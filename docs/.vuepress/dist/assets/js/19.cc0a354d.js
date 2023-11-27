(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{435:function(e,v,_){e.exports=_.p+"assets/img/viewModel_01.d9ab9aac.png"},436:function(e,v,_){e.exports=_.p+"assets/img/viewModel_02.c15f157c.png"},437:function(e,v,_){e.exports=_.p+"assets/img/viewModel_03.54972283.png"},438:function(e,v,_){e.exports=_.p+"assets/img/viewModel_04.69eb9625.png"},439:function(e,v,_){e.exports=_.p+"assets/img/viewModel_05.8c2c745e.png"},440:function(e,v,_){e.exports=_.p+"assets/img/viewModel_06.e54050df.png"},441:function(e,v,_){e.exports=_.p+"assets/img/viewModel_07.82841cbe.png"},442:function(e,v,_){e.exports=_.p+"assets/img/viewModel_08.a012c56a.png"},443:function(e,v,_){e.exports=_.p+"assets/img/viewModel_09.9afb4210.png"},444:function(e,v,_){e.exports=_.p+"assets/img/viewModel_10.64b30c28.png"},445:function(e,v,_){e.exports=_.p+"assets/img/viewModel_11.3f66cfd1.png"},446:function(e,v,_){e.exports=_.p+"assets/img/viewModel_12.ce9332df.png"},447:function(e,v,_){e.exports=_.p+"assets/img/viewModel_13.2f727bc6.png"},523:function(e,v,_){"use strict";_.r(v);var o=_(2),t=Object(o.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("blockquote",[v("p",[e._v("本章与「状态保存与SavedState」章有较强联系，建议阅读过后再浏览本章节。")])]),e._v(" "),v("h2",{attrs:{id:"_1、viewmodel的来源-从状态保存谈起"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、viewmodel的来源-从状态保存谈起"}},[e._v("#")]),e._v(" 1、ViewModel的来源——从状态保存谈起")]),e._v(" "),v("h3",{attrs:{id:"_1-1、savedstate并不是viewmodel的特性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、savedstate并不是viewmodel的特性"}},[e._v("#")]),e._v(" 1.1、SavedState并不是ViewModel的特性")]),e._v(" "),v("p",[e._v("在「状态保存与SavedStated」一章中，提到了"),v("code",[e._v("ViewModel")]),e._v("与"),v("code",[e._v("SavedState")]),e._v("的关系，其中提到了"),v("code",[e._v("SavedStateHandle")]),e._v("的意义是用来解决"),v("code",[e._v("ViewModel")]),e._v("难以「访问组件入参」以及「保存状态」的两个难题。")]),e._v(" "),v("p",[e._v("但是我们回头看"),v("code",[e._v("SavedStateHandle")]),e._v("是如何被引入"),v("code",[e._v("ViewModel")]),e._v("的：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(435),alt:"viewModel_01"}})]),e._v(" "),v("p",[e._v("可以看见，"),v("code",[e._v("SavedStateHandle")]),e._v("通过构造函数传入"),v("code",[e._v("ViewModel")]),e._v("，也就是说"),v("code",[e._v("ViewModel")]),e._v("在默认情况下，是没有「访问组件入参」以及「保存状态」2个功能的，那么"),v("code",[e._v("ViewModel")]),e._v("的对于状态保存的意义在哪里呢?")]),e._v(" "),v("p",[e._v("答案是："),v("code",[e._v("ViewModel")]),e._v("可以在「配置更改导致的"),v("code",[e._v("Activity")]),e._v("重建」后仍然保存自身的实例。")]),e._v(" "),v("p",[e._v("换句话说，开发者使用"),v("code",[e._v("ViewModel")]),e._v("之后，无需担心再花费精力去处理配置更新导致的组件销毁问题，因为"),v("code",[e._v("ViewModel")]),e._v("并不会受到影响。")]),e._v(" "),v("p",[e._v("那么这个「配置更改导致的"),v("code",[e._v("Activity")]),e._v("重建」后仍可以保存实例的机制又是如何实现的呢？")]),e._v(" "),v("h3",{attrs:{id:"_1-2、无人问津的onretainnonconfigurationinstance"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、无人问津的onretainnonconfigurationinstance"}},[e._v("#")]),e._v(" 1.2、无人问津的"),v("code",[e._v("onRetainNonConfigurationInstance()")])]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("Activity")]),e._v("的源码中，存在着一个几乎没什么人用的Api——"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("。")]),e._v(" "),v("p",[e._v("这个Api并没有在「状态保存与SavedStated」一章中被介绍的原因也是几乎没人使用它。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(436),alt:"viewModel_02"}})]),e._v(" "),v("p",[e._v("从名字可以看出，这个方法的用途是保存一些与配置无关的实例，读过「状态保存与SavedStated」的读者肯定会联想到"),v("code",[e._v("Activity")]),e._v("中保存实例的方法："),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("，两者的区别如下：")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th"),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[v("code",[e._v("onSaveInstanceState(Bundle)")])]),e._v(" "),v("th",{staticStyle:{"text-align":"center"}},[v("code",[e._v("onRetainNonConfigurationInstance()")])])])]),e._v(" "),v("tbody",[v("tr",[v("td",[e._v("调用时机")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("组件onStop()前/后被调用")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("配置发生改变时被调用")])]),e._v(" "),v("tr",[v("td",[e._v("支持类型")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("只支持基础类型和Parcelable/Serializable类型")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("支持任意类型")])]),e._v(" "),v("tr",[v("td",[e._v("大小限制")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("受Binder限制，数据不能超过1MB")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("大小不受限制")])]),e._v(" "),v("tr",[v("td",[e._v("实现原理")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("先通过Binder反序列化，再存储于内存中")]),e._v(" "),v("td",{staticStyle:{"text-align":"center"}},[e._v("直接存于内存中")])])])]),e._v(" "),v("p",[e._v("回到本节的标题，为什么"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("无论是支持的类型还是大小都遥遥领先于"),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("，但它却几乎不受程序员的待见呢？")]),e._v(" "),v("p",[e._v("答案就是它的调用时机过于局限了，这也和这个API的设计初衷有关系，因为它只能用于处理「配置更新导致的Activity销毁」的这种场景，因此它并不是每次都进入"),v("code",[e._v("onStop()")]),e._v("（高版本在之前，低版本在之后）都被调用。")]),e._v(" "),v("p",[e._v("对于配置发生改变时要保存的状态，"),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("也能做，即使有类型和大小的限制，程序员们也习惯于统一往"),v("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("中实现所有的状态保存逻辑，因为这能降低维护的复杂性。")]),e._v(" "),v("p",[e._v("以上造就了"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("几乎无人使用的窘境。")]),e._v(" "),v("h3",{attrs:{id:"_1-3、丢掉or进一步扩展-这是一个问题"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、丢掉or进一步扩展-这是一个问题"}},[e._v("#")]),e._v(" 1.3、丢掉or进一步扩展，这是一个问题")]),e._v(" "),v("p",[e._v("上一节提到，"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("遭遇了程序员的冷落，但是这能证明这个Api是无用的吗？")]),e._v(" "),v("p",[e._v("如果你对Binder的机制有一点了解的话，可以知道的是，为了实现跨进程，所有通过Binder传输的对象都要反复的序列化和反序列化，这就导致了性能上的劣势，当然还存在大小的限制。")]),e._v(" "),v("p",[e._v("如果配置更新导致了组件的销毁，页面中其实存在着有许多不需要跟随配置更改而改变的字段，例如已经加载好的bitmap。对于这类内存巨大的字段用Binder存起来也不合适，这就给"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("这个Api生存的空间，开发者可以通过这个Api缓存一些较大的对象来避免因配置更改后反复加载的缺点。")]),e._v(" "),v("p",[e._v("但是又回到了上一节的问题，这个Api实在不好用，我们应该直接抛弃它吗？答案是否定的。")]),e._v(" "),v("p",[e._v("在1.1节中笔者提到的"),v("code",[e._v("ViewModel")]),e._v("了一个重要特性：「配置更新后不会销毁」，读者是否觉得它与"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("这个Api的特性非常相近呢？对的你没猜错，"),v("code",[e._v("ViewModel")]),e._v("就是基于这个Api来实现其跨越配置更改的特性的。")]),e._v(" "),v("p",[e._v("总结："),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("并不是没用了，而是谷歌基于这个Api实现了"),v("code",[e._v("ViewModel")]),e._v("，开发者只需要使用"),v("code",[e._v("ViewModel")]),e._v("便享受到了这个Api的便利。相对于难以使用的原生Api，"),v("code",[e._v("ViewModel")]),e._v("确实好用特别多。")]),e._v(" "),v("blockquote",[v("p",[e._v("注意一点的是：「不会因配置更新而销毁」并不是"),v("code",[e._v("ViewModel")]),e._v("的全部意义，这个只是它的一个非常重要的特性，"),v("code",[e._v("ViewModel")]),e._v("还有许多优秀的特性这点下面会聊到。")])]),e._v(" "),v("h3",{attrs:{id:"_1-4、viewmodel如何跨越配置更新的鸿沟"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-4、viewmodel如何跨越配置更新的鸿沟"}},[e._v("#")]),e._v(" 1.4、ViewModel如何跨越配置更新的鸿沟")]),e._v(" "),v("p",[e._v("经过前三节的铺垫，笔者想必已经明白了"),v("code",[e._v("ViewModel")]),e._v("是使用"),v("code",[e._v("onRetainNonConfigurationInstance()")]),e._v("来实现避免配置更新导致自身销毁的机制的，具体如何实现本节展开讲讲：")]),e._v(" "),v("blockquote",[v("p",[e._v("关于"),v("code",[e._v("ComponentActivity")]),e._v("，这个"),v("code",[e._v("Activity")]),e._v("的子类在「Lifecycle」与「状态保存」的章节中都频繁出现过，其基本是Jetpac核心功能的基础实现，因此下面的源码也是基于这个子类来讲解。")])]),e._v(" "),v("p",[e._v("我们从"),v("code",[e._v("ComponentActivity")]),e._v("的源码出发，看看核心的代码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(437),alt:"viewModel_03"}})]),e._v(" "),v("p",[e._v("核心代码就一个方法，就是上文提到的"),v("code",[e._v("onReainNonConfigurationInstance()")]),e._v("，而且谷歌还让其标记为final，即不可继承重写，这个方法只会强制返回一个类："),v("code",[e._v("NonConfigurationInstances")]),e._v("，其中包括了一个"),v("code",[e._v("Object")]),e._v("类型的custom，一个"),v("code",[e._v("ViewModelStore")]),e._v("。")]),e._v(" "),v("p",[e._v("标记为final并不意味着开发者不能实现该方法原本非常灵活的任意类型的返回值，而是谷歌将其放在了"),v("code",[e._v("NonConfigurationInstances")]),e._v("这个类的custom中，重写"),v("code",[e._v("onRetainCustomNonConfigutaionInstance()")]),e._v("即可，不过这并不是重点（因为这只是一种兼容老开发模式的手段），该类另外一个成员变量"),v("code",[e._v("ViewModelStore")]),e._v("才是本篇文章的核心。")]),e._v(" "),v("p",[e._v("上文提到，"),v("code",[e._v("NonConfigurationInstances")]),e._v("的核心是"),v("code",[e._v("ViewModelStore")]),e._v("，因此我们可以去掉custom之后单独围绕它来看，那么这个Api就会被简化成下面这样：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(438),alt:"viewModel_04"}})]),e._v(" "),v("p",[e._v("简化后的代码非常清晰，其实就是在保存"),v("code",[e._v("ViewModelStore")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[e._v("也许你并不清楚什么"),v("code",[e._v("ViewModelStore")]),e._v("和"),v("code",[e._v("ViewModel")]),e._v("的关系，这里你只需要明白一点即可："),v("code",[e._v("ViewModelStore")]),e._v("是一个缓存"),v("code",[e._v("ViewModel")]),e._v("的容器，通过它就可以拿到"),v("code",[e._v("ViewModel")])])]),e._v(" "),v("p",[e._v("在配置更新时保存"),v("code",[e._v("ViewModelStore")]),e._v("，并在组件重建之后重新拿到"),v("code",[e._v("ViewModelStore")]),e._v("，那么自然而然的就拿到了对应的"),v("code",[e._v("ViewModel")]),e._v("。")]),e._v(" "),v("p",[e._v("我们看看"),v("code",[e._v("ComponentActivity")]),e._v("是如何拿到"),v("code",[e._v("ViewModelStore")]),e._v("的：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(439),alt:"viewModel_05"}})]),e._v(" "),v("p",[e._v("每次"),v("code",[e._v("ComponentActivity")]),e._v("要访问"),v("code",[e._v("ViewModelStore")]),e._v("的时候，都会主动调用"),v("code",[e._v("ensureViewModelStore()")]),e._v("这个方法，看看有没有往非配置实例中写入"),v("code",[e._v("ViewModelStore")]),e._v("，如果有则读出来，如果没有就新建一个。")]),e._v(" "),v("p",[e._v("以上就是：「"),v("code",[e._v("ViewModel")]),e._v("可以在配置更新后不会销毁」的秘密。")]),e._v(" "),v("h2",{attrs:{id:"_2、viewmodel是谁"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、viewmodel是谁"}},[e._v("#")]),e._v(" 2、ViewModel是谁？")]),e._v(" "),v("p",[e._v("把"),v("code",[e._v("ViewModel")]),e._v("的定义放在第二节是笔者有意为之，在第一节中，笔者为读者展示了"),v("code",[e._v("ViewModel")]),e._v("如何解决了开发者一个巨大的痛点，即「处理因配置更新导致的组件销毁从而导致的状态丢失」的问题，读者相比已经对"),v("code",[e._v("ViewModel")]),e._v("有了一个基础的认知，但如同上面提到过得一样，跨越配置更新的鸿沟并不是"),v("code",[e._v("ViewModel")]),e._v("的全部优点和特性，下面为你逐步掀开ViewModel的"),v("s",[e._v("头盖骨")]),e._v("面纱。")]),e._v(" "),v("h3",{attrs:{id:"_2-1、定义"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、定义"}},[e._v("#")]),e._v(" 2.1、定义")]),e._v(" "),v("blockquote",[v("p",[v("code",[e._v("ViewModel")]),e._v(" 类是一种业务逻辑或屏幕级状态容器。它用于将状态公开给界面，以及封装相关的业务逻辑。它的主要优点是，它可以缓存状态，并可在配置更改后持久保留相应状态。这意味着在 activity 之间导航时或进行配置更改后（例如旋转屏幕时），界面将无需重新提取数据。")])]),e._v(" "),v("p",[e._v("上文中重点讲了"),v("code",[e._v("ViewModel")]),e._v("可以让在配置更改后保存自身的存在，从定义中我们可以看出，其实"),v("code",[e._v("ViewModel")]),e._v("更重要的一个身份是「状态容器」，换句话说"),v("code",[e._v("ViewModel")]),e._v("负责广播状态，而组件（"),v("code",[e._v("Activity")]),e._v("、"),v("code",[e._v("Fragment")]),e._v("）则回归纯粹UI的本质，引入"),v("code",[e._v("ViewModel")]),e._v("之后的不仅是多了一个组件的区别，更多的改变则在于开发范式的转变（关于这个话题下文会讲）。")]),e._v(" "),v("h3",{attrs:{id:"_2-2、viewmodel简单使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、viewmodel简单使用"}},[e._v("#")]),e._v(" 2.2、ViewModel简单使用")]),e._v(" "),v("p",[e._v("简单看一下引入"),v("code",[e._v("ViewModel")]),e._v("之后的"),v("code",[e._v("Activity")]),e._v("的变化（Fragment代码基本类似，不重复展示）：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(440),alt:"viewModel_06"}})]),e._v(" "),v("p",[e._v("还记得"),v("code",[e._v("ViewModel")]),e._v("的两个特性吗，这里重温下：")]),e._v(" "),v("ul",[v("li",[e._v("状态容器")]),e._v(" "),v("li",[e._v("规避配置更新导致的丢失")])]),e._v(" "),v("p",[e._v("图中一个显著的特征是原本应该位于"),v("code",[e._v("Activity")]),e._v("中的成员变量被移动到了"),v("code",[e._v("ViewModel")]),e._v("的内部，这体现了"),v("code",[e._v("ViewModel")]),e._v("作为状态容器的特性，这样做的好处就是让逻辑收拢在了"),v("code",[e._v("ViewModel")]),e._v("的内部，这让UI更加容易迁移和调试（因为降低了耦合度）。")]),e._v(" "),v("p",[e._v("「规避配置更新导致的丢失」这个特性在图中不好展示，但是读者可以参考上述的代码自己实现一个小demo，然后旋转屏幕，观察重建的"),v("code",[e._v("Activity")]),e._v("中的数据有没有发生丢失现象。")]),e._v(" "),v("p",[e._v("上文提到的「开发范式的转变」指的是开发模式逐渐过渡到MVVM或者其他开发思想中来，一种常见的特征就是状态均以LiveData或者StateFlow的形式出现。")]),e._v(" "),v("h3",{attrs:{id:"_2-3、savedstate的使用"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、savedstate的使用"}},[e._v("#")]),e._v(" 2.3、SavedState的使用")]),e._v(" "),v("blockquote",[v("p",[e._v("关于SavedState的使用在「状态保存与SavedState」一章中有详细讲解如何使用，本章不再继续展开")])]),e._v(" "),v("h2",{attrs:{id:"_3、viewmodel剖析"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、viewmodel剖析"}},[e._v("#")]),e._v(" 3、ViewModel剖析")]),e._v(" "),v("p",[e._v("为了让读者对"),v("code",[e._v("ViewModel")]),e._v("的整个体系有大致的理解，这里先把"),v("code",[e._v("ViewModel")]),e._v("的几个关键组件列举出来，只需要留个印象即可，后续会串联起来。")]),e._v(" "),v("h3",{attrs:{id:"_3-1、核心组件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、核心组件"}},[e._v("#")]),e._v(" 3.1、核心组件")]),e._v(" "),v("h4",{attrs:{id:"_3-1-1、viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1、viewmodel"}},[e._v("#")]),e._v(" 3.1.1、ViewModel")]),e._v(" "),v("p",[v("code",[e._v("ViewModel")]),e._v("无疑是该库中最核心的组件，但是其内部却极其简单，只有两个容器，主要的作用就是存放Tag和Closeable，这两者会在"),v("code",[e._v("ViewModel")]),e._v("被关闭的时候被清空。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(441),alt:"viewModel_07"}})]),e._v(" "),v("p",[e._v("可以看到，上面提到的"),v("code",[e._v("ViewModel")]),e._v("的特性似乎都与这个类没有任何关系，这只是一个没有任何东西的抽象类，由此可见"),v("code",[e._v("ViewModel")]),e._v("的核心机制并不能单纯靠这个类实现。")]),e._v(" "),v("h4",{attrs:{id:"_3-1-2、viewmodelstore、viewmodelstoreowner"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2、viewmodelstore、viewmodelstoreowner"}},[e._v("#")]),e._v(" 3.1.2、ViewModelStore、ViewModelStoreOwner")]),e._v(" "),v("p",[v("code",[e._v("ViewModelStore")]),e._v("是存放"),v("code",[e._v("ViewModel")]),e._v("的仓库类，通过Key来区分不同的"),v("code",[e._v("ViewModel")]),e._v("实例。")]),e._v(" "),v("p",[v("code",[e._v("ViewModelStoreOwner")]),e._v("和生命周期篇讲过的"),v("code",[e._v("LifecycleOwner")]),e._v("基本类似的设计模式，本质只是一个提供实例的接口。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(442),alt:"viewModel_08"}})]),e._v(" "),v("p",[v("code",[e._v("ViewModelStore")]),e._v("遵循以下原则：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("ViewModelStore")]),e._v("需要配置更改后仍然得到保留，如果没法保留而被销毁了，那么保存的"),v("code",[e._v("ViewModel")]),e._v("实例也要一样，这里简单来说就是map内部的成员实例都不能丢。")]),e._v(" "),v("li",[e._v("如果"),v("code",[e._v("ViewModelStore")]),e._v("的持有者不再需要它而且也不会重新创建它，则其所有者需要调用"),v("code",[e._v("ViewModelStore")]),e._v("的clear()方法通知它不再使用。")])]),e._v(" "),v("blockquote",[v("p",[e._v("以上两条原则虽然对于绝大多数开发者来说并不会使用，因为大部分开发者都不会亲自开发"),v("code",[e._v("ViewModelStore")]),e._v("，但是谷歌亲自开发的Jetpack库中，均遵循这两条准则，因此开发者将其理解为"),v("code",[e._v("ViewModelStore")]),e._v("的「特性」即可。")])]),e._v(" "),v("h4",{attrs:{id:"_3-1-3、viewmodelprovider、factory"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3、viewmodelprovider、factory"}},[e._v("#")]),e._v(" 3.1.3、ViewModelProvider、Factory")]),e._v(" "),v("p",[e._v("上文提到"),v("code",[e._v("ViewModelStore")]),e._v("只是一个存储"),v("code",[e._v("ViewModel")]),e._v("的容器，它并没有创建"),v("code",[e._v("ViewModel")]),e._v("的功能，而"),v("code",[e._v("ViewModelProvider")]),e._v("正好弥补了这个功能。")]),e._v(" "),v("p",[e._v("从图中可以看出两点：")]),e._v(" "),v("ul",[v("li",[v("p",[v("code",[e._v("ViewModelProvider")]),e._v("通过工厂类创建"),v("code",[e._v("ViewModel")])])]),e._v(" "),v("li",[v("p",[v("code",[e._v("ViewModelProvider")]),e._v("的核心代码是get()，其原理就是简单的有就取缓存，没有就用工厂类创建一个"),v("code",[e._v("ViewModel")]),e._v("并放置在"),v("code",[e._v("ViewModel")]),e._v("与缓存中")])])]),e._v(" "),v("blockquote",[v("p",[e._v("为什么需要工厂类？因为"),v("code",[e._v("ViewModel")]),e._v("和"),v("code",[e._v("Fragment")]),e._v("需要在非开发者干预的情况下由系统创建，这种模式只能由反射去实现，工厂类就是定义了不同构造函数的反射创建方式。")])]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(443),alt:"viewModel_09"}})]),e._v(" "),v("h4",{attrs:{id:"_3-1-4、小总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4、小总结"}},[e._v("#")]),e._v(" 3.1.4、小总结")]),e._v(" "),v("p",[e._v("下面以一张图总结各个组件之间的关系：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(444),alt:"viewModel_10"}})]),e._v(" "),v("h3",{attrs:{id:"_3-2、从使用流程回首viewmodel"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、从使用流程回首viewmodel"}},[e._v("#")]),e._v(" 3.2、从使用流程回首ViewModel")]),e._v(" "),v("p",[e._v("上文简单讲解了"),v("code",[e._v("ViewModel")]),e._v("几个核心组件的功能，下文将从"),v("code",[e._v("ViewModel")]),e._v("的使用流程去将几个组件所处的位置理清楚。")]),e._v(" "),v("blockquote",[v("p",[e._v("需要注意的是，由于需要讲解组件的使用，因此不会使用委托的方式创建ViewModel，同时以Activity为讲解组件。")])]),e._v(" "),v("p",[e._v("下面看看"),v("code",[e._v("ComponentActivity")]),e._v("中使用"),v("code",[e._v("ViewModel")]),e._v("的典型案例：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(445),alt:"viewModel_11"}})]),e._v(" "),v("p",[e._v("可以看出，"),v("code",[e._v("ViewModel")]),e._v("是由"),v("code",[e._v("ViewModelProvider")]),e._v("创建的，这里传入了2个重要参数：")]),e._v(" "),v("ol",[v("li",[v("code",[e._v("ViewModelStoreOwner")])]),e._v(" "),v("li",[v("code",[e._v("Factory")])])]),e._v(" "),v("p",[e._v("我们分开讲解两个参数的意义：")]),e._v(" "),v("p",[e._v("传入"),v("code",[e._v("ViewModelStoreOwner")]),e._v("的目的并没有什么特别的，答案和这个接口一样简单，就是单纯为了获取"),v("code",[e._v("ViewModelStore")]),e._v("，上文中提到，"),v("code",[e._v("ViewModelProvider")]),e._v("会在创建"),v("code",[e._v("ViewModel")]),e._v("之后，将该实例缓存在"),v("code",[e._v("ViewModelStore")]),e._v("中，因此获取StoreOwner也不奇怪了。")]),e._v(" "),v("p",[e._v("至于"),v("code",[e._v("Factory")]),e._v("，这里要展开说一下"),v("code",[e._v("defaultViewModelProviderFactory")]),e._v("：")]),e._v(" "),v("p",[e._v("这个参数来自于一个接口："),v("code",[e._v("HasDefaultViewModelProviderFactory")]),e._v("：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(446),alt:"viewModel_12"}})]),e._v(" "),v("p",[e._v("这个接口是什么意思呢，这个接口是给"),v("code",[e._v("ViewModelStoreOwner")]),e._v("实现的，相当于某个"),v("code",[e._v("StoreOwner")]),e._v("存在着默认的创建"),v("code",[e._v("ViewModel")]),e._v("的工厂类。")]),e._v(" "),v("p",[e._v("上文中提到，"),v("code",[e._v("ViewModelProvider")]),e._v("需要从Owner手里获取工厂类来了解如何构建"),v("code",[e._v("ViewModel")]),e._v("，对于单个Owner来说，绝大多数情况创建ViewModel的方式都是相同的（大多数情况都是无参或者带"),v("code",[e._v("SavedStateHandle")]),e._v("），因此拥有一个「默认工厂」是极大的便利。")]),e._v(" "),v("p",[e._v("开发者可以在"),v("code",[e._v("ComponentActivity")]),e._v("中使用"),v("code",[e._v("defaultViewModelProviderFactory")]),e._v("的原因恰恰是它也实现了该接口：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:_(447),alt:"viewModel_13"}})]),e._v(" "),v("p",[e._v("可以看出，这是一个创建「参数带有SavedState」的"),v("code",[e._v("ViewModel")]),e._v("，同时"),v("code",[e._v("SavedState")]),e._v("默认带有"),v("code",[e._v("Activity")]),e._v("的getIntent().getExtras()，而在"),v("code",[e._v("Fragment")]),e._v("中则是getArugments()。")])],1)}),[],!1,null,null,null);v.default=t.exports}}]);