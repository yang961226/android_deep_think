---
title: 传世不朽ViewModel
date: 2023-11-20
author: 晴天小庭
---

> 本章与「状态保存与SavedState」章有较强联系，建议阅读过后再浏览本章节。

## 1、ViewModel的来源——从状态保存谈起

### 1.1、SavedState并不是ViewModel的特性

在「状态保存与SavedStated」一章中，提到了`ViewModel`与`SavedState`的关系，其中提到了`SavedStateHandle`的意义是用来解决`ViewModel`难以「访问组件入参」以及「保存状态」的两个难题。

但是我们回头看`SavedStateHandle`是如何被引入`ViewModel`的：

<center><img src="./viewModel_res/viewModel_01.png" alt="viewModel_01" style="zoom:67%;" /></center>

可以看见，`SavedStateHandle`通过构造函数传入`ViewModel`，也就是说`ViewModel`在默认情况下，是没有「访问组件入参」以及「保存状态」2个功能的，那么`ViewModel`的对于状态保存的意义在哪里呢?

答案是：`ViewModel`可以在「配置更改导致的`Activity`重建」后仍然保存自身的实例。

换句话说，开发者使用`ViewModel`之后，无需担心再花费精力去处理配置更新导致的组件销毁问题，因为`ViewModel`并不会受到影响。

那么这个「配置更改导致的`Activity`重建」后仍可以保存实例的机制又是如何实现的呢？

### 1.2、无人问津的`onRetainNonConfigurationInstance()`

在`Activity`的源码中，存在着一个几乎没什么人用的Api——`onRetainNonConfigurationInstance()`。

这个Api并没有在「状态保存与SavedStated」一章中被介绍的原因也是几乎没人使用它。

<center><img src="./viewModel_res/viewModel_02.png" alt="viewModel_02" style="zoom:67%;" /></center>

从名字可以看出，这个方法的用途是保存一些与配置无关的实例，读过「状态保存与SavedStated」的读者肯定会联想到`Activity`中保存实例的方法：`onSaveInstanceState(Bundle)`，两者的区别如下：

|          |        `onSaveInstanceState(Bundle)`        | `onRetainNonConfigurationInstance()` |
| -------- | :-----------------------------------------: | :----------------------------------: |
| 调用时机 |           组件onStop()前/后被调用           |         配置发生改变时被调用         |
| 支持类型 | 只支持基础类型和Parcelable/Serializable类型 |             支持任意类型             |
| 大小限制 |        受Binder限制，数据不能超过1MB        |             大小不受限制             |
| 实现原理 |    先通过Binder反序列化，再存储于内存中     |            直接存于内存中            |

回到本节的标题，为什么`onRetainNonConfigurationInstance()`无论是支持的类型还是大小都遥遥领先于`onSaveInstanceState(Bundle)`，但它却几乎不受程序员的待见呢？

答案就是它的调用时机过于局限了，这也和这个API的设计初衷有关系，因为它只能用于处理「配置更新导致的Activity销毁」的这种场景，因此它并不是每次都进入`onStop()`（高版本在之前，低版本在之后）都被调用。

对于配置发生改变时要保存的状态，`onSaveInstanceState(Bundle)`也能做，即使有类型和大小的限制，程序员们也习惯于统一往`onSaveInstanceState(Bundle)`中实现所有的状态保存逻辑，因为这能降低维护的复杂性。

以上造就了`onRetainNonConfigurationInstance()`几乎无人使用的窘境。

### 1.3、丢掉or进一步扩展，这是一个问题

上一节提到，`onRetainNonConfigurationInstance()`遭遇了程序员的冷落，但是这能证明这个Api是无用的吗？

如果你对Binder的机制有一点了解的话，可以知道的是，为了实现跨进程，所有通过Binder传输的对象都要反复的序列化和反序列化，这就导致了性能上的劣势，当然还存在大小的限制。

如果配置更新导致了组件的销毁，页面中其实存在着有许多不需要跟随配置更改而改变的字段，例如已经加载好的bitmap。对于这类内存巨大的字段用Binder存起来也不合适，这就给`onRetainNonConfigurationInstance()`这个Api生存的空间，开发者可以通过这个Api缓存一些较大的对象来避免因配置更改后反复加载的缺点。

但是又回到了上一节的问题，这个Api实在不好用，我们应该直接抛弃它吗？答案是否定的。

在1.1节中笔者提到的`ViewModel`了一个重要特性：「配置更新后不会销毁」，读者是否觉得它与`onRetainNonConfigurationInstance()`这个Api的特性非常相近呢？对的你没猜错，`ViewModel`就是基于这个Api来实现其跨越配置更改的特性的。

总结：`onRetainNonConfigurationInstance()`并不是没用了，而是谷歌基于这个Api实现了`ViewModel`，开发者只需要使用`ViewModel`便享受到了这个Api的便利。相对于难以使用的原生Api，`ViewModel`确实好用特别多。

> 注意一点的是：「不会因配置更新而销毁」并不是`ViewModel`的全部意义，这个只是它的一个非常重要的特性，`ViewModel`还有许多优秀的特性这点下面会聊到。

### 1.4、ViewModel如何跨越配置更新的鸿沟

经过前三节的铺垫，笔者想必已经明白了`ViewModel`是使用`onRetainNonConfigurationInstance()`来实现避免配置更新导致自身销毁的机制的，具体如何实现本节展开讲讲：

> 关于`ComponentActivity`，这个`Activity`的子类在「Lifecycle」与「状态保存」的章节中都频繁出现过，其基本是Jetpac核心功能的基础实现，因此下面的源码也是基于这个子类来讲解。

我们从`ComponentActivity`的源码出发，看看核心的代码：

<center><img src="./viewModel_res/viewModel_03.png" alt="viewModel_03" style="zoom:67%;" /></center>

核心代码就一个方法，就是上文提到的`onReainNonConfigurationInstance()`，而且谷歌还让其标记为final，即不可继承重写，这个方法只会强制返回一个类：`NonConfigurationInstances`，其中包括了一个`Object`类型的custom，一个`ViewModelStore`。

标记为final并不意味着开发者不能实现该方法原本非常灵活的任意类型的返回值，而是谷歌将其放在了`NonConfigurationInstances`这个类的custom中，重写`onRetainCustomNonConfigutaionInstance()`即可，不过这并不是重点（因为这只是一种兼容老开发模式的手段），该类另外一个成员变量`ViewModelStore`才是本篇文章的核心。

上文提到，`NonConfigurationInstances`的核心是`ViewModelStore`，因此我们可以去掉custom之后单独围绕它来看，那么这个Api就会被简化成下面这样：

<center><img src="./viewModel_res/viewModel_04.png" alt="viewModel_04" style="zoom:67%;" /></center>

简化后的代码非常清晰，其实就是在保存`ViewModelStore`。

> 也许你并不清楚什么`ViewModelStore`和`ViewModel`的关系，这里你只需要明白一点即可：`ViewModelStore`是一个缓存`ViewModel`的容器，通过它就可以拿到`ViewModel`

在配置更新时保存`ViewModelStore`，并在组件重建之后重新拿到`ViewModelStore`，那么自然而然的就拿到了对应的`ViewModel`。

我们看看`ComponentActivity`是如何拿到`ViewModelStore`的：

<center><img src="./viewModel_res/viewModel_05.png" alt="viewModel_05" style="zoom:67%;" /></center>

每次`ComponentActivity`要访问`ViewModelStore`的时候，都会主动调用`ensureViewModelStore()`这个方法，看看有没有往非配置实例中写入`ViewModelStore`，如果有则读出来，如果没有就新建一个。

以上就是：「`ViewModel`可以在配置更新后不会销毁」的秘密。

## 2、ViewModel是谁？

把`ViewModel`的定义放在第二节是笔者有意为之，在第一节中，笔者为读者展示了`ViewModel`如何解决了开发者一个巨大的痛点，即「处理因配置更新导致的组件销毁从而导致的状态丢失」的问题，读者相比已经对`ViewModel`有了一个基础的认知，但如同上面提到过得一样，跨越配置更新的鸿沟并不是`ViewModel`的全部优点和特性，下面为你逐步掀开ViewModel的~~头盖骨~~面纱。

### 2.1、定义

> `ViewModel` 类是一种业务逻辑或屏幕级状态容器。它用于将状态公开给界面，以及封装相关的业务逻辑。它的主要优点是，它可以缓存状态，并可在配置更改后持久保留相应状态。这意味着在 activity 之间导航时或进行配置更改后（例如旋转屏幕时），界面将无需重新提取数据。

上文中重点讲了`ViewModel`可以让在配置更改后保存自身的存在，从定义中我们可以看出，其实`ViewModel`更重要的一个身份是「状态容器」，换句话说`ViewModel`负责广播状态，而组件（`Activity`、`Fragment`）则回归纯粹UI的本质，引入`ViewModel`之后的不仅是多了一个组件的区别，更多的改变则在于开发范式的转变（关于这个话题下文会讲）。

### 2.2、ViewModel简单使用

简单看一下引入`ViewModel`之后的`Activity`的变化（Fragment代码基本类似，不重复展示）：

<center><img src="./viewModel_res/viewModel_06.png" alt="viewModel_06" style="zoom:67%;" /></center>

还记得`ViewModel`的两个特性吗，这里重温下：

- 状态容器
- 规避配置更新导致的丢失

图中一个显著的特征是原本应该位于`Activity`中的成员变量被移动到了`ViewModel`的内部，这体现了`ViewModel`作为状态容器的特性，这样做的好处就是让逻辑收拢在了`ViewModel`的内部，这让UI更加容易迁移和调试（因为降低了耦合度）。

「规避配置更新导致的丢失」这个特性在图中不好展示，但是读者可以参考上述的代码自己实现一个小demo，然后旋转屏幕，观察重建的`Activity`中的数据有没有发生丢失现象。

上文提到的「开发范式的转变」指的是开发模式逐渐过渡到MVVM或者其他开发思想中来，一种常见的特征就是状态均以LiveData或者StateFlow的形式出现。

### 2.3、SavedState的使用

> 关于SavedState的使用在「状态保存与SavedState」一章中有详细讲解如何使用，本章不再继续展开

## 3、ViewModel剖析

为了让读者对`ViewModel`的整个体系有大致的理解，这里先把`ViewModel`的几个关键组件列举出来，只需要留个印象即可，后续会串联起来。

### 3.1、核心组件

#### 3.1.1、ViewModel

`ViewModel`无疑是该库中最核心的组件，但是其内部却极其简单，只有两个容器，主要的作用就是存放Tag和Closeable，这两者会在`ViewModel`被关闭的时候被清空。

<center><img src="./viewModel_res/viewModel_07.png" alt="viewModel_07" style="zoom:67%;" /></center>



可以看到，上面提到的`ViewModel`的特性似乎都与这个类没有任何关系，这只是一个没有任何东西的抽象类，由此可见`ViewModel`的核心机制并不能单纯靠这个类实现。

#### 3.1.2、ViewModelStore、ViewModelStoreOwner

`ViewModelStore`是存放`ViewModel`的仓库类，通过Key来区分不同的`ViewModel`实例。

`ViewModelStoreOwner`和生命周期篇讲过的`LifecycleOwner`基本类似的设计模式，本质只是一个提供实例的接口。

<center><img src="./viewModel_res/viewModel_08.png" alt="viewModel_08" style="zoom:67%;" /></center>

`ViewModelStore`遵循以下原则：

- `ViewModelStore`需要配置更改后仍然得到保留，如果没法保留而被销毁了，那么保存的`ViewModel`实例也要一样，这里简单来说就是map内部的成员实例都不能丢。
- 如果`ViewModelStore`的持有者不再需要它而且也不会重新创建它，则其所有者需要调用`ViewModelStore`的clear()方法通知它不再使用。

> 以上两条原则虽然对于绝大多数开发者来说并不会使用，因为大部分开发者都不会亲自开发`ViewModelStore`，但是谷歌亲自开发的Jetpack库中，均遵循这两条准则，因此开发者将其理解为`ViewModelStore`的「特性」即可。

#### 3.1.3、ViewModelProvider、Factory

上文提到`ViewModelStore`只是一个存储`ViewModel`的容器，它并没有创建`ViewModel`的功能，而`ViewModelProvider`正好弥补了这个功能。

从图中可以看出两点：

- `ViewModelProvider`通过工厂类创建`ViewModel`

- `ViewModelProvider`的核心代码是get()，其原理就是简单的有就取缓存，没有就用工厂类创建一个`ViewModel`并放置在`ViewModel`与缓存中

> 为什么需要工厂类？因为`ViewModel`和`Fragment`需要在非开发者干预的情况下由系统创建，这种模式只能由反射去实现，工厂类就是定义了不同构造函数的反射创建方式。

<center><img src="./viewModel_res/viewModel_09.png" alt="viewModel_09" style="zoom:67%;" /></center>

#### 3.1.4、小总结

下面以一张图总结各个组件之间的关系：

<center><img src="./viewModel_res/viewModel_10.png" alt="viewModel_10" style="zoom:67%;" /></center>

### 3.2、从使用流程回首ViewModel

上文简单讲解了`ViewModel`几个核心组件的功能，下文将从`ViewModel`的使用流程去将几个组件所处的位置理清楚。

> 需要注意的是，由于需要讲解组件的使用，因此不会使用委托的方式创建ViewModel，同时以Activity为讲解组件。

下面看看`ComponentActivity`中使用`ViewModel`的典型案例：

<center><img src="./viewModel_res/viewModel_11.png" alt="viewModel_11" style="zoom:67%;" /></center>

可以看出，`ViewModel`是由`ViewModelProvider`创建的，这里传入了2个重要参数：

1. `ViewModelStoreOwner`
2. `Factory`

我们分开讲解两个参数的意义：

传入`ViewModelStoreOwner`的目的并没有什么特别的，答案和这个接口一样简单，就是单纯为了获取`ViewModelStore`，上文中提到，`ViewModelProvider`会在创建`ViewModel`之后，将该实例缓存在`ViewModelStore`中，因此获取StoreOwner也不奇怪了。

至于`Factory`，这里要展开说一下`defaultViewModelProviderFactory`：

这个参数来自于一个接口：`HasDefaultViewModelProviderFactory`：

<center><img src="./viewModel_res/viewModel_12.png" alt="viewModel_12" style="zoom:67%;" /></center>

这个接口是什么意思呢，这个接口是给`ViewModelStoreOwner`实现的，相当于某个`StoreOwner`存在着默认的创建`ViewModel`的工厂类。

上文中提到，`ViewModelProvider`需要从Owner手里获取工厂类来了解如何构建`ViewModel`，对于单个Owner来说，绝大多数情况创建ViewModel的方式都是相同的（大多数情况都是无参或者带`SavedStateHandle`），因此拥有一个「默认工厂」是极大的便利。

开发者可以在`ComponentActivity`中使用`defaultViewModelProviderFactory`的原因恰恰是它也实现了该接口：

<center><img src="./viewModel_res/viewModel_13.png" alt="viewModel_13" style="zoom:67%;" /></center>

可以看出，这是一个创建「参数带有SavedState」的`ViewModel`，同时`SavedState`默认带有`Activity`的getIntent().getExtras()，而在`Fragment`中则是getArugments()。

