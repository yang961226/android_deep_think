(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{463:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_01.786b4a33.png"},464:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_02.0626e949.png"},465:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_08.3ee91be3.png"},466:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_03.92188481.png"},467:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_04.01e147cf.png"},468:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_05.859710aa.png"},469:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_06.7bc15dd4.png"},470:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_07.2036a10d.png"},471:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_09.fa2b19e2.png"},472:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_10.d54d2e00.png"},473:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_11.d6d746a8.png"},474:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_12.ad20a0e0.png"},475:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_13.9dd03dda.png"},476:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_14.b14cdfc0.png"},477:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_15.70912793.png"},478:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_16.738a55a6.png"},479:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_17.0bb205c4.png"},480:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_18.7f0e045b.png"},481:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_19.d7295861.png"},482:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_20.4bde3751.png"},483:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_21.70c01bbd.png"},484:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_22.2f8daaae.png"},485:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_23.7909483b.png"},486:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_24.071f69fd.png"},487:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_25.8c642849.png"},488:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_27.8baca5c8.png"},489:function(e,v,_){e.exports=_.p+"assets/img/lifecycle_26.85523ac1.jpg"},510:function(e,v,_){"use strict";_.r(v);var t=_(2),c=Object(t.a)({},(function(){var e=this,v=e._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"生命周期的前世今生"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#生命周期的前世今生"}},[e._v("#")]),e._v(" 生命周期的前世今生")]),e._v(" "),v("h2",{attrs:{id:"_1-1、前世-初识篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-1、前世-初识篇"}},[e._v("#")]),e._v(" 1.1、前世——初识篇")]),e._v(" "),v("p",[e._v("天地初开，一切皆为混沌的时代，安卓宇宙中诞生了名为"),v("code",[e._v("Activity")]),e._v("（活动）的组件，"),v("code",[e._v("Activity")]),e._v("\n是Android应用中最关键的组件，一个"),v("code",[e._v("Activity")]),e._v("\n通常对应的是App的一个页面，当手机使用者在不同的页面之间导航的时候，新的"),v("code",[e._v("Activity")]),e._v("\n会诞生，同时也会在特定的时候销毁。一个页面的诞生之初到它销毁的这段时间，名为「生命周期」。")]),e._v(" "),v("p",[e._v("理解并掌握生命周期是每一个Android修炼者的必修功力，因为生命周期的每一个阶段均代表"),v("code",[e._v("Activity")]),e._v("\n处于不同的状态之中，一旦错误处理生命周期周期，修炼者轻则内伤残疾（手机耗电过多，丢失信息），重则走火入魔（程序崩溃）。")]),e._v(" "),v("p",[e._v("关于生命周期，江湖中一直流传着一张「Activity生命周期总览图」，但个中奥秘，却鲜为人知，因此少有人能够修炼到最高境界：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://developer.android.google.cn/guide/components/images/activity_lifecycle.png?hl=zh-cn",alt:"Activity生命周期"}})]),e._v(" "),v("p",[e._v("由图可见，"),v("code",[e._v("Activity")]),e._v("的生命周期中，提供了6种回调："),v("code",[e._v("onCreate()")]),e._v("、"),v("code",[e._v("onStart()")]),e._v("、"),v("code",[e._v("onResume()")]),e._v("、"),v("code",[e._v("onPause()")]),e._v("、"),v("code",[e._v("onStop()")]),e._v("、"),v("code",[e._v("onDestroy()")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[v("strong",[e._v("需要特别注意的是："),v("strong",[e._v("这")]),e._v("仅仅")]),e._v("是一种回调，与我们通常的认识不同都是，生命周期的某个阶段是指一个"),v("strong",[e._v("时间段")]),e._v("，而回调或者说事件只是一个瞬间，换句话来说，onCreate并不是指生命周期中存在一个阶段名为onCreate，而是"),v("code",[e._v("Activity")]),e._v("触发了onCreate事件，即将进入已创建阶段。")])]),e._v(" "),v("p",[e._v("然而可惜的是，在远古Android的设计中，Android的创世神并没有为开发者提供具体的生命周期阶段的概念，仅仅是提供了进入某个生命周期阶段的回调，因此上述提到的“"),v("strong",[e._v("已创建")]),e._v("”这个状态在原生安卓的概念中并不存在。然而在后人的努力中，生命周期阶段这一概念最终得到确定与落实，不过这都是后话了。")]),e._v(" "),v("h2",{attrs:{id:"_1-2、前世-详解篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2、前世-详解篇"}},[e._v("#")]),e._v(" 1.2、前世——详解篇")]),e._v(" "),v("h3",{attrs:{id:"_1-2-1、oncreate-、ondestroy"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1、oncreate-、ondestroy"}},[e._v("#")]),e._v(" 1.2.1、onCreate()、onDestroy()")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("onCreate()")]),e._v("："),v("code",[e._v("Activity")]),e._v("生命周期的起点，首次被系统创建时触发，整个生命周期只会触发一次。此回调通常用于执行页面View的设置，例如"),v("code",[e._v("setContentView()")]),e._v("。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("onDestroy()")]),e._v("："),v("code",[e._v("Activity")]),e._v("生命周期的终点，在"),v("code",[e._v("Activity")]),e._v("被销毁前触发，此回调的有两种情况被调用：")])])]),e._v(" "),v("ol",[v("li",[e._v("用户手动关闭"),v("code",[e._v("Activity")]),e._v("（按返回键）或者系统主动关闭"),v("code",[e._v("Activity")]),e._v("（一般是App进程因内存不足被销毁，导致"),v("code",[e._v("Activity")]),e._v("也被销毁）。")]),e._v(" "),v("li",[e._v("配置变更（设备旋转、语言切换等）。")])]),e._v(" "),v("p",[e._v("简单来说，onCreate()是"),v("code",[e._v("Activity")]),e._v("被创建的时刻，onDestroy()是"),v("code",[e._v("Activity")]),e._v("即将被销毁的时刻。")]),e._v(" "),v("p",[e._v("一个"),v("code",[e._v("Activity")]),e._v("进入onDestroy()之后，理应被GC回收，但是如果此时它仍然被引用（例如被某些网络请求的回调中被引用），那么此"),v("code",[e._v("Activity")]),e._v("就会导致"),v("strong",[e._v("内存泄漏")]),e._v("，这也是所有Android开发者需要关注其生命周期的原因。")]),e._v(" "),v("h3",{attrs:{id:"_1-2-2、onstart-、onstop"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2、onstart-、onstop"}},[e._v("#")]),e._v(" 1.2.2、onStart()、onStop()")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("onStart()")]),e._v("：当"),v("code",[e._v("Activity")]),e._v("在onCreate()之后不久就会触发此回调，说明了"),v("code",[e._v("Activity")]),e._v("此刻进入了“已开始”的状态，但是此刻的"),v("code",[e._v("Activity")]),e._v("仍然"),v("strong",[e._v("未获取焦点")]),e._v("。")])]),e._v(" "),v("blockquote",[v("p",[e._v("很多Android开发者一直搞不懂Activity为什么会存在一个"),v("strong",[e._v("可见但是没有获取焦点")]),e._v("的状态，会存在这种疑惑的原因是因为Android通常作为"),v("strong",[e._v("一种移动设备的系统而存在")]),e._v("，而移动设备由于其特殊性，通常也只会同屏存在一个页面，因此"),v("strong",[e._v("可见但是没有获取焦点")]),e._v("这种状态几乎只存在一瞬间（它马上就会遮住之前正在交互的页面），然而我们以电脑系统的角度来看，电脑系统的桌面上基本都是多窗口并存的，然而即使存在了多窗口，用户能交互的也仅仅只有获取焦点的那个窗口。")])]),e._v(" "),v("p",[e._v("因此，"),v("strong",[e._v("可见但是没有获取焦点")]),e._v("的窗口，就像是电脑上那些打开着、但被用户正在交互的窗口挡住的那些窗口，假如电脑桌面上存在着一个QQ窗口，然而用户正在编写一个Word文档，那么被Word挡住的那个QQ窗口，就是"),v("strong",[e._v("可见但未获取焦点")]),e._v("的窗口。")]),e._v(" "),v("ul",[v("li",[v("strong",[e._v("onStop()")]),e._v("：当一个"),v("code",[e._v("Activity")]),e._v("从"),v("strong",[e._v("可见但是没有获取到焦点")]),e._v("的状态变为"),v("strong",[e._v("完全不可见")]),e._v("的状态时就会触发此回调，按照上文类比，这种情况通常可以理解为："),v("strong",[e._v("电脑桌面上的一个被遮挡的窗口被最小化了")]),e._v("。")])]),e._v(" "),v("h3",{attrs:{id:"_1-2-3、onresume-、onpause"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3、onresume-、onpause"}},[e._v("#")]),e._v(" 1.2.3、onResume()、onPause()")]),e._v(" "),v("ul",[v("li",[v("p",[v("strong",[e._v("onResume()")]),e._v("：当"),v("code",[e._v("Activity")]),e._v("从"),v("strong",[e._v("可见但是没有获取焦点")]),e._v("的状态变成"),v("strong",[e._v("可见同时获取焦点")]),e._v("的状态时，触发此回调，同样按照电脑系统的角度来理解，这种情况通常可以理解为："),v("strong",[e._v("电脑桌面上的一个被遮挡的窗口此刻被用户交互了")]),e._v("。")])]),e._v(" "),v("li",[v("p",[v("strong",[e._v("onPause()")]),e._v("：当"),v("code",[e._v("Activity")]),e._v("从“"),v("strong",[e._v("可见同时获取焦点")]),e._v("”的状态变成"),v("strong",[e._v("可见但是没有获取焦点")]),e._v("的状态时，触发此回调，同样同样按照电脑系统的角度来理解，这种情况通常可以理解为："),v("strong",[e._v("电脑桌面上的一个正在被用户交互的窗口，由于用户操作了其他窗口，导致当前的窗口被遮挡了，也因此失去了焦点")]),e._v("。")])])]),e._v(" "),v("h2",{attrs:{id:"_1-3、前世-总结篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1-3、前世-总结篇"}},[e._v("#")]),e._v(" 1.3、前世——总结篇")]),e._v(" "),v("p",[e._v("我们从电脑系统的窗口去理解"),v("code",[e._v("Activity")]),e._v("的生命周期：")]),e._v(" "),v("ol",[v("li",[e._v("启动一个程序的时候，程序就会在电脑桌面上创建一个窗口，创建的那一瞬间（通常会很快，可能不需要1秒）就相当于"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("onCreate()")]),e._v("。")]),e._v(" "),v("li",[e._v("创建完成后，窗口就可以被用户所看见了，被用户看到的那一瞬间就相当于"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("onStart()")]),e._v("。")]),e._v(" "),v("li",[e._v("通常来说，一个新启动的程序会自动获得焦点并可被用户交互，因此onStart()之后，窗口会被置顶到顶层，这一瞬间就相当于"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("onResume()")]),e._v("。")]),e._v(" "),v("li",[e._v("当用户选择其他窗口时，之前交互的窗口并不会消失，而是会失去焦点并被用户最新交互的窗口所遮挡，这一瞬间就相当于"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("onPause()")]),e._v("。")]),e._v(" "),v("li",[e._v("当用户最小化窗口时，窗口就会进入后台（并不是销毁）而且并不能被用户所看见，这一瞬间就相当于进入了"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("onStop()")]),e._v("。")]),e._v(" "),v("li",[e._v("当用户关闭程序亦或者电脑内存不足时，程序被销毁，窗口同时也被销毁了，这一瞬间就相当于进入了"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("onDestroy()")]),e._v("。")])]),e._v(" "),v("p",[e._v("一个窗口当然可以失去焦点后重新获取焦点，因此"),v("code",[e._v("onPause()")]),e._v("和"),v("code",[e._v("onResume()")]),e._v("可能在生命周期中多次被执行，同理窗口也可以最小化之后重新最大化，"),v("code",[e._v("onStart()")]),e._v("和"),v("code",[e._v("onStop()")]),e._v("也可能在生命周期中多次被执行。只不过对于移动设备来说，几乎不存在页面失去焦点后又重新获得焦点的情况，因为移动设备的页面绝大多数情况都是一个页面可被用户交互，被挡住的页面完全不可见，即等价于电脑系统中只存在一个最大化的页面，所以移动设备的"),v("code",[e._v("Activity")]),e._v("的生命周期通常只会在"),v("code",[e._v("onStart()")]),e._v("和"),v("code",[e._v("onStop()")]),e._v("两者之间流转（当然，仍然会遵循onStart()->onResumt()->onPause()->onStop()的顺序）。")]),e._v(" "),v("p",[e._v("而一个窗口只能被创建和销毁一次，因此在"),v("code",[e._v("Activity")]),e._v("的生命周期中，onCreate()和onDestroy()只会被调用一次。")]),e._v(" "),v("blockquote",[v("p",[e._v("上文中提到，原生的Android生命周期设计中，只提供了进入某个生命周期状态的回调，并没有提供具体的状态的定义，例如onCreate()与onStart()之间的状态叫什么呢，官方的文档提到了这个叫“已创建”的状态，然而这只存在于文本性的文档中，这在代码中并不存在，只能作为一种“共识”的定义。这也为开发者之间沟通生命周期带来了极大的困扰。")])]),e._v(" "),v("h2",{attrs:{id:"_2-1、今生-初识篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、今生-初识篇"}},[e._v("#")]),e._v(" 2.1、今生——初识篇")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://blogger.googleusercontent.com/img/a/AVvXsEgo2-I1LhMjWd1zzpIQXzjMCPoZeUZc35n43UosKDuLMyP7rIDe8cGfs23tmkSAed6Wxw9EoNTIpvvWCljermK_lCu0etlrCnONx3WeXMCGe-s8I45hYhuVo6w_Q2UTNATMTA70t2o9MS5p2pBdPFz5Ye4b2ajOJjNlW9rELtqWcEW4O1Rkzy4lfqRO",alt:"Jetpack"}})]),e._v(" "),v("p",[e._v("经历漫长的混沌时代之后，Jetpack携带着「Lifecycle」正式进入到了Android的世界中，「Lifecycle」为千千万万的Android修炼者带来了福音，因为它比起传统的基于回调的方式来感知生命周期的方式有以下的优点：")]),e._v(" "),v("ol",[v("li",[v("strong",[e._v("提出了「生命周期状态」的概念，弥补了安卓传统的生命周期只有事件没有状态的缺陷")])]),e._v(" "),v("li",[v("strong",[e._v("将生命周期管理从页面（如Activity和Fragment）脱离，将生命周期监听的职责转移到组件中，降低页面与组件的耦合度。")])])]),e._v(" "),v("p",[e._v("为了让读者更加清晰使用「Lifecycle」与不使用它之间的区别，这里使用两个代码案例来对比：")]),e._v(" "),v("ul",[v("li",[e._v("首先，定义一个常见的基于回调的监听类，每秒钟会对外广播一次字符串。")])]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(463),alt:"生命周期图1"}})]),e._v(" "),v("ul",[v("li",[v("p",[e._v("在"),v("code",[e._v("Activity")]),e._v("中的onCreate()阶段初始化监听，然后在onStart()中开启监听，在onStop()中关闭监听，这样的好处是当页面不可见的时候不会浪费手机性能。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(464),alt:"生命周期图2"}})])],1)]),e._v(" "),v("p",[e._v("以上便是传统安卓开发中最直接也是最常见的一种根据生命周期来实现监听的方式，让我们分析一下这种方式的缺点：")]),e._v(" "),v("ol",[v("li",[v("strong",[e._v("真实业务开发中，同一页面中往往存在大量的生命周期监听需求，"),v("code",[e._v("Activity")]),e._v("等生命周期组件会同时管理大量的组件，让代码难以维护。")])]),e._v(" "),v("li",[v("strong",[e._v("代码缺乏一致性，需要监听生命周期的组件存在许多模板代码。试想一下，一个需要在onStart()启动，在onStop()关闭的、同时在项目中大量存在的组件，某天需要它在onResume()做一些操作，那将会导致灾难，因为需要每一处使用它的代码中增加onResume()的修改，一旦遗漏这个修改将会导致不可预知的bug。")])]),e._v(" "),v("li",[v("strong",[e._v("无法获取实时的生命周期状态。假设在onStart()的阶段，需要执行一个网络请求或者其他耗时操作之后再调用"),v("code",[e._v("listener.start()")]),e._v("的场景下，无法保证此刻页面仍然处于可见的状态，开发者也无法获取「当前所处状态」来避免不可见的时候仍然调用"),v("code",[e._v("listener.start()")]),e._v("（这个缺陷上文已经提到，原生安卓生命周期只提供了生命周期事件而没有生命周期状态）。")])])]),e._v(" "),v("p",[e._v("让我们看一看使用了「Lifecycle」库之后的生命周期是如何实现监听的：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(465),alt:"生命周期图8"}})]),e._v(" "),v("p",[e._v("我们让需要监听"),v("code",[e._v("Activity")]),e._v("生命周期的"),v("code",[e._v("MyListener")]),e._v("组件实现"),v("code",[e._v("DefaultLifecycleObserver")]),e._v("接口，然后重写onStart()、onStop()方法，然后直接在"),v("code",[e._v("Activity")]),e._v("中获取"),v("code",[e._v("lifecycle")]),e._v("然后调用其"),v("code",[e._v("addObserver()")]),e._v("即可。")]),e._v(" "),v("p",[e._v("我们会发现，「生命周期管理」的责任从"),v("code",[e._v("Activity")]),e._v("转移到了组件中，"),v("code",[e._v("Activity")]),e._v("本身只负责对外广播自身的生命周期，这样极大减少了"),v("code",[e._v("Activity")]),e._v("的维护负担。")]),e._v(" "),v("h2",{attrs:{id:"_2-2、今生-详解篇"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、今生-详解篇"}},[e._v("#")]),e._v(" 2.2、今生——详解篇")]),e._v(" "),v("h3",{attrs:{id:"_2-2-1、lifecycle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1、lifecycle"}},[e._v("#")]),e._v(" 2.2.1、"),v("a",{attrs:{href:"https://developer.android.google.cn/reference/androidx/lifecycle/Lifecycle",target:"_blank",rel:"noopener noreferrer"}},[e._v("Lifecycle"),v("OutboundLink")],1)]),e._v(" "),v("p",[v("em",[e._v("Lifecycle包含两个定义，一个指的是Jetpack库中的Lifecycle组件库，一个指的是Lifecycle组件库中的一个核心类，后文中如果没有特指情况下，文章中描述的默认为类")])]),e._v(" "),v("p",[e._v("上文中提到，安卓原生中只有描述生命周期的事件，缺乏一种描述当前生命周期所处的状态，但是「Lifecycle」库中补全了状态，下图中阐述了事件与状态的关系：")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://developer.android.google.cn/static/images/topic/libraries/architecture/lifecycle-states.svg?hl=zh-cn",alt:"Activity生命周期的状态与事件"}})]),e._v(" "),v("p",[e._v("根据「Lifecycle」库的定义，一个生命周期状态的起点是「Initialized」，终点是「Destroyed」，当发生生命周期事件时，生命周期状态就会发生移动，包括"),v("strong",[e._v("状态提升")]),e._v("和"),v("strong",[e._v("状态下降")]),e._v("。")]),e._v(" "),v("blockquote",[v("p",[e._v("我们把状态从Initialized到Resumed当做一个从小到大的状态，如果状态值变小了，则称为"),v("strong",[e._v("状态下降")]),e._v("，反之则为"),v("strong",[e._v("状态提升")]),e._v("。")])]),e._v(" "),v("p",[e._v("初步的定义有了，让我们把视角聚焦于"),v("code",[e._v("Lifecycle")]),e._v("类的源码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(466),alt:"lifecycle_03"}})]),e._v(" "),v("p",[e._v("可以看到，"),v("code",[e._v("Lifecycle")]),e._v("类的设计基本遵循生命周期事件与状态图例，一个"),v("code",[e._v("Lifecycle")]),e._v("只有2个核心功能：")]),e._v(" "),v("ol",[v("li",[v("strong",[e._v("缓存当前的生命周期状态（currentState）。")])]),e._v(" "),v("li",[v("strong",[e._v("添加与移除生命周期观察者。")])])]),e._v(" "),v("p",[e._v("上述代码中，对"),v("code",[e._v("Event")]),e._v("和"),v("code",[e._v("State")]),e._v("的部分代码进行了省略，下面展开讲解：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(467),alt:"lifecycle_04"}})]),e._v(" "),v("p",[e._v("首先是"),v("code",[e._v("Event")]),e._v("类，"),v("code",[e._v("Event")]),e._v("类对应的是生命周期事件，也就是原生安卓生命周期的事件，即onCreate()、onPause()等。")]),e._v(" "),v("p",[e._v("该类提供了一个"),v("code",[e._v("targetState")]),e._v("的属性，指的是发生了该事件之后，生命周期状态发生改变的状态目标。")]),e._v(" "),v("blockquote",[v("p",[e._v("例如发生了ON_CREATE事件，这是状态从「Initialized」向「Created」转移的瞬间，那么targetState自然就是「State.CREATED」了；同理发生ON_STOP事件时，是状态从「Started」向「Created」转移的瞬间，targetState也是「State.CREATED」。")]),e._v(" "),v("p",[e._v("此处不必死记硬背，只需要配合"),v("strong",[e._v("状态与事件图")]),e._v("理解其意义即可。")])]),e._v(" "),v("p",[e._v("该类还提供了四个方法，downFrom()、downTo()、upFrom()、upTo()，这些都是当"),v("strong",[e._v("状态发生提升或者降级的时候，方便获取对应的事件")]),e._v("的便捷方法，以downFrom()举例：")]),e._v(" "),v("blockquote",[v("p",[e._v("downFrom(state:State)的含义是获取会导致state发生状态下降的事件，假如State.Created，发生什么事件会导致状态从State.Created下降呢，我们回去查看"),v("strong",[e._v("状态与事件图")]),e._v("，发现是发生了ON_DESTROY事件，那么该方法就会返回ON_DESTROY。")]),e._v(" "),v("p",[e._v("此处不必死记硬背，只需要配合"),v("strong",[e._v("状态与事件图")]),e._v("理解其意义即可。")])]),e._v(" "),v("p",[e._v("看完了"),v("strong",[e._v("Event")]),e._v("，我们把视角转向"),v("strong",[e._v("State")]),e._v("：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(468),alt:"lifecycle_05"}})]),e._v(" "),v("p",[v("code",[e._v("State")]),e._v("的代码非常简单甚至不用一丝的省略，除了枚举值外仅有一个方法："),v("strong",[e._v("isAtLeast(state:State)")]),e._v("，此方法的含义是用于判断当前的状态是否大于或等于目标值的状态。")]),e._v(" "),v("p",[e._v("如何理解呢？还记得上文提到的吗，状态是有大小的：")]),e._v(" "),v("blockquote",[v("p",[e._v("我们把状态从Initialized到Resumed当做一个从小到大的状态，如果状态值变小了，则称为"),v("strong",[e._v("状态下降")]),e._v("，反之则为"),v("strong",[e._v("状态提升")]),e._v("。")])]),e._v(" "),v("p",[e._v("因此对于生命周期的状态而言，Created是比Initialized"),v("strong",[e._v("大")]),e._v("的，"),v("code",[e._v("isAtLeast(state:State)")]),e._v("的含义就是判断生命周期是否比某个预期值“走的更远”了，如果一个行为可以在组件创建后被执行，那么换句话说，只要生命周期的状态大于或者等于Created即可。")]),e._v(" "),v("p",[e._v("上文中提到，原生的生命周期回调无法实时获取生命周期所处的状态，一旦在生命周期回调方法中执行一些耗时操作，就无法耗时操作结束后，仍处于安全的生命周期区间，例如下面的代码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(469),alt:"lifecycle_06"}})]),e._v(" "),v("p",[e._v("我们尝试在onStart()中执行一段耗时操作再开启监听，但是执行耗时操作期间无法"),v("code",[e._v("Activity")]),e._v("是否已经处于onStop()了，此刻我们就可以使用"),v("code",[e._v("isAtLeast(state:State)")]),e._v("来判断耗时操作结束后的生命周期状态：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(470),alt:"lifecycle_07"}})]),e._v(" "),v("p",[e._v("可见，「Lifecycle」库确实解决了生命周期只有事件没有状态的问题，开发者可以轻易获取当前的生命周期所处的阶段。")]),e._v(" "),v("h3",{attrs:{id:"_2-2-2、lifecycleowner"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2、lifecycleowner"}},[e._v("#")]),e._v(" 2.2.2、"),v("a",{attrs:{href:"https://developer.android.google.cn/reference/androidx/lifecycle/LifecycleOwner",target:"_blank",rel:"noopener noreferrer"}},[e._v("LifecycleOwner"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("首先，我们看看它的源码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(471),alt:"lifecycle_09"}})]),e._v(" "),v("p",[e._v("非常的简单，只是给实现者对外提供一个获取"),v("code",[e._v("Lifecycle")]),e._v("的入口，为什么要这样设计呢？还记得"),v("code",[e._v("Lifecycle")]),e._v("吗，它并不是一个接口而是一个抽象类，在Jvm中是单继承的，因此不太可能会让带有生命周期的组件直接继承"),v("code",[e._v("Lifecycle")]),e._v("抽象类。")]),e._v(" "),v("p",[e._v("因此在实际使用中，带有生命周期的组件和"),v("code",[e._v("Lifecycle")]),e._v("是包含的关系，即下图的情况：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(472),alt:"lifecycle_10"}})]),e._v(" "),v("blockquote",[v("p",[e._v("为什么谷歌的开发人员要如此奇怪呢，让"),v("code",[e._v("Lifecycle")]),e._v("变成接口，让Activity实现接口不一样能让组件访问到"),v("code",[e._v("Lifecycle")]),e._v("吗？")]),e._v(" "),v("p",[e._v("先别急，"),v("code",[e._v("Lifecycle")]),e._v("的具体实现我们还没看，等到那一节将会解答这个疑问。")])]),e._v(" "),v("p",[e._v("总结："),v("code",[e._v("LifecycleOwner")]),e._v("只是一个简单的对外提供访问"),v("code",[e._v("Lifecycle")]),e._v("的接口。")]),e._v(" "),v("h3",{attrs:{id:"_2-2-3、lifecycleobserver"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3、lifecycleobserver"}},[e._v("#")]),e._v(" 2.2.3、"),v("a",{attrs:{href:"https://developer.android.google.cn/reference/androidx/lifecycle/LifecycleObserver",target:"_blank",rel:"noopener noreferrer"}},[e._v("LifecycleObserver"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("此处就不放代码了，因为这是一个空接口，作用是将其"),v("strong",[e._v("实现者变成一个生命周期的观察者")]),e._v("。")]),e._v(" "),v("p",[e._v("其本身不起作用，业务中我们通常使用其子接口，例如"),v("code",[e._v("DefaultLifecycleObserver")]),e._v("、"),v("code",[e._v("LifecycleEventObserver")]),e._v("等，可以回去查看2.1节的"),v("code",[e._v("MyListener")]),e._v("实现了"),v("code",[e._v("DefaultLifecycleObserver")]),e._v("之后是如何感知"),v("code",[e._v("Activity")]),e._v("的生命周期的。")]),e._v(" "),v("h3",{attrs:{id:"_2-2-4、lifecycleregistry"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4、lifecycleregistry"}},[e._v("#")]),e._v(" 2.2.4、"),v("a",{attrs:{href:"https://developer.android.google.cn/reference/androidx/lifecycle/LifecycleRegistry",target:"_blank",rel:"noopener noreferrer"}},[e._v("LifecycleRegistry"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("此类是「Lifecycle」库的核心类，也是"),v("code",[e._v("Lifecycle")]),e._v("抽象类的直接实现，它的作用是"),v("strong",[e._v("管理生命周期事件的派发")]),e._v("，但是其做了非常多的优化，例如解决了产生事件时，迭代观察者过程中可能会新增或者移除观察者，用ArrayList遍历会崩的问题、新加入的观察者如何派发事件的问题，移除观察者如何更新状态的问题等等。")]),e._v(" "),v("p",[e._v("这些谷歌的开发人员都帮我们解决了，只需要按下图简单配置一下即可使用：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(473),alt:"lifecycle_11"}})]),e._v(" "),v("p",[e._v("可见，我们只需要按照上文提到的结构，在"),v("code",[e._v("Activity")]),e._v("中实例化一个"),v("code",[e._v("LifecycleRegistry")]),e._v("，然后在合适的生命周期回调中派发响应的事件，所有监听当前"),v("code",[e._v("Activity")]),e._v("生命周期的组件就可以获取到当前"),v("code",[e._v("Activity")]),e._v("的生命周期了。")]),e._v(" "),v("p",[e._v("**需要注意的是：**上述代码仅仅是为了为你展示"),v("code",[e._v("Lifecycle")]),e._v("是如何实现生命周期事件派发的，实际使用中，并不需要为"),v("code",[e._v("Activity")]),e._v("手动派发事件，"),v("code",[e._v("ComponentActivity")]),e._v("、"),v("code",[e._v("AppcompatActivity")]),e._v("实际上已经配置好了派发逻辑，开发中直接获取"),v("code",[e._v("Lifecycle")]),e._v("即可。")]),e._v(" "),v("p",[e._v("下面即将深入"),v("code",[e._v("LifecycleRegistry")]),e._v("的源码层面探究一下它的原理，但是需要注意的是，本文章的目的并不是让读者100%搞懂源码中每一行代码的运行逻辑，因为这违背了本系列文章的初衷——让读者能够在对库有足够充足的了解下开发，同时笔者也没有100%搞懂源码每一行的逻辑。")]),e._v(" "),v("p",[e._v("如果读者非常有钻研精神，可以看一下这个博主的文章，他对"),v("code",[e._v("LifecycleRegistry")]),e._v("的源码做了非常详细的讲解："),v("a",{attrs:{href:"https://juejin.cn/post/7071144317636575262?searchId=20231009151913294FEF5A47C68C20DD18#heading-9",target:"_blank",rel:"noopener noreferrer"}},[e._v("【Jetpack】学穿：Lifecycle → 生命周期 (原理篇) - 掘金 (juejin.cn)"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("下面我们看看LifecycleRegistry的代码脉络：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(474),alt:"lifecycle_12"}})]),e._v(" "),v("p",[e._v("笔者省去了绝大部分和业务无关的代码，只保留了最核心最精华的代码，其实被移除掉的代码都是为了解决前文中提到的“遍历过程中增删列表”、”新加入的观察者如何派发事件“等细枝末节的问题，与本文主题关系不大。")]),e._v(" "),v("p",[e._v("可以看到，"),v("code",[e._v("LifecycleRegistry")]),e._v("本质上就是一个强化版的观察者模式的设计，添加观察者（observer）、遍历派发事件的模式。")]),e._v(" "),v("p",[e._v("还记得上文提到的一个小问题吗，为什么"),v("code",[e._v("LifecycleOwner")]),e._v("不直接设计成接口而是以成员变量的方式挂载在对应的生命周期组件里面呢？通过"),v("code",[e._v("LifecycleRegistry")]),e._v("的源码我们可以看到，"),v("code",[e._v("LifecycleOwner")]),e._v("被以弱引用的方式存放着的，也就是说处理生命周期事件派发的"),v("code",[e._v("LifecycleRegistry")]),e._v("并不会直接引用"),v("code",[e._v("LifecycleOwner")]),e._v("，可以认为是谷歌的开发人员是为了防止产生内存泄漏而故意设计的。")]),e._v(" "),v("h3",{attrs:{id:"_2-2-5、小总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5、小总结"}},[e._v("#")]),e._v(" 2.2.5、小总结")]),e._v(" "),v("p",[e._v("我们已经依次浏览了「Lifecycle」库中的四个最核心的组件，他们的关系如果你已经搞混了，笔者再次通过一段极简的代码的方式来强化读者对他们的理解：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(475),alt:"lifecycle_13"}})]),e._v(" "),v("p",[e._v("关于四个核心组件的总结：")]),e._v(" "),v("ol",[v("li",[v("strong",[v("code",[e._v("Lifecycle")]),e._v("描述的是存放和管理生命周期的容器")])]),e._v(" "),v("li",[v("strong",[v("code",[e._v("LifecycleRegistry")]),e._v("是"),v("code",[e._v("Lifecycle")]),e._v("的实现类")])]),e._v(" "),v("li",[v("strong",[v("code",[e._v("LifecycleObserver")]),e._v("是观察生命周期变化的监听器")])]),e._v(" "),v("li",[v("strong",[v("code",[e._v("LifecycleOwner")]),e._v("是对外提供"),v("code",[e._v("Lifecycle")]),e._v("的提供者。")])])]),e._v(" "),v("h2",{attrs:{id:"_3、谷歌眼中的lifecycle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、谷歌眼中的lifecycle"}},[e._v("#")]),e._v(" 3、谷歌眼中的Lifecycle")]),e._v(" "),v("h3",{attrs:{id:"_3-1、componentactivity"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1、componentactivity"}},[e._v("#")]),e._v(" 3.1、"),v("a",{attrs:{href:"https://developer.android.com/reference/kotlin/androidx/activity/ComponentActivity",target:"_blank",rel:"noopener noreferrer"}},[e._v("ComponentActivity"),v("OutboundLink")],1)]),e._v(" "),v("p",[e._v("此类是谷歌官方基于Activity开发的子类，其集成了许多Jetpack库的核心功能，其中就包括了「Lifecycle」库，该类因此也实现了"),v("code",[e._v("LifecycleOwner")]),e._v("接口，开发者常用的"),v("code",[e._v("AppcompatActvity")]),e._v("也是该类的子类。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(476),alt:"lifecycle_14"}})]),e._v(" "),v("p",[e._v("但是细读源码会发现，该类并没有像笔者之前展示的源码那样，直接调用"),v("code",[e._v("LifecycleRegistry")]),e._v("在特定的"),v("code",[e._v("Activity")]),e._v("生命周期回调中派发事件，那么该类是如何实现生命周期事件的派发的呢？下面介绍「Lifecycle」库中的另外一个关键类："),v("strong",[e._v("ReportFragment")]),e._v("。")]),e._v(" "),v("h4",{attrs:{id:"_3-1-1、reportfragment与lifecyclecallbacks"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1、reportfragment与lifecyclecallbacks"}},[e._v("#")]),e._v(" 3.1.1、ReportFragment与LifecycleCallbacks")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("ComponentActivity")]),e._v("的onCreate()中，有一段"),v("code",[e._v("ReportFragment.injectIfNeededIn(this)")]),e._v("的代码，这个就是实现了生命周期事件派发的核心类。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(477),alt:"lifecycle_15"}})]),e._v(" "),v("p",[e._v("接下来让我们走进"),v("code",[e._v("ReportFragment")]),e._v("的源码，正如前文所述，文章并不会阐述每一行代码的原理，而是抓住主要的脉络，隐藏了和主脉络无关的代码，但是剩余的代码量仍然挺多，读者不必对大量的代码感到恐慌，因为文章会逐一解释：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(478),alt:"lifecycle_16"}})]),e._v(" "),v("p",[e._v("可见，"),v("code",[e._v("ReportFragment")]),e._v("做的事非常简单，就是在其生命周期的各个阶段上报生命周期事件，因为"),v("code",[e._v("Fragment")]),e._v("的生命周期和"),v("code",[e._v("Activity")]),e._v("在绝大部分是保持一致的（特殊的如"),v("code",[e._v("onCreate()")]),e._v("除外，不过也有"),v("code",[e._v("onActivityCreated()")]),e._v("、"),v("code",[e._v("onActivityPostCreated()")]),e._v("等可以感知"),v("code",[e._v("Activity")]),e._v("生命周期的函数），谷歌的开发人员于是就利用"),v("code",[e._v("ReportFragment")]),e._v("作为"),v("strong",[e._v("监听"),v("code",[e._v("Activity")]),e._v("生命周期的工具")]),e._v("，你可以看到这个Fragment是没有UI的，这也间接证明了它的任务并不是展示一个UI而仅仅是为了监听生命周期。")]),e._v(" "),v("p",[e._v("让我们回到"),v("strong",[e._v("injectIfNeedIn()")]),e._v("，可以清楚的看到这里做了一个版本判断，如果大于api版本大于29，则使用"),v("code",[e._v("LifecycleCallbacks")]),e._v("做一个注册的逻辑，这是怎么回事呢？")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(479),alt:"lifecycle_17"}})]),e._v(" "),v("p",[e._v("在我提到"),v("code",[e._v("ReportFragment")]),e._v("是作为一个生命周期监听者而不是一个展示UI的模块的时候，你也许就已经隐隐约约闻到一种非常奇怪的味道。由于安卓源码设计的缺陷（只对外提供了回调方法而没有提供回调监听注册），开发者对待这一问题必须考虑向下兼容，因此他们选择了源码中已经存在的、可以监听"),v("code",[e._v("Activity")]),e._v("的生命周期的"),v("code",[e._v("Fragment")]),e._v("，但是在api 29之后，Activity原生自带了生命周期的回调监听注册，因此一旦检测到api大于或者等于29，"),v("code",[e._v("ReportFragment")]),e._v("的作用就形同虚设了，因为广播生命周期的事件的任务已经转移给"),v("code",[e._v("Activity")]),e._v("自带的生命周期回调来实现了。")]),e._v(" "),v("p",[e._v("你也许还会担心，现在有"),v("code",[e._v("ReportFragment")]),e._v("和"),v("code",[e._v("Activity")]),e._v("自带的生命周期回调两种方式了，会不会导致一个事件被广播两次呢？其实不用担心，广播的时候已经做了排除了，只有api小于29的情况下，"),v("code",[e._v("ReportFragment")]),e._v("才会生效。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(480),alt:"lifecycle_18"}})]),e._v(" "),v("h3",{attrs:{id:"_3-2、fragment"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-2、fragment"}},[e._v("#")]),e._v(" 3.2、Fragment")]),e._v(" "),v("p",[v("code",[e._v("Fragment")]),e._v("本身的生命周期和"),v("code",[e._v("Activity")]),e._v("没有很大的差异，依然是内置"),v("code",[e._v("LifecycleRegistry")]),e._v("然后在合适的生命周期回调中广播生命周期事件的一套，但是值得注意的是：")]),e._v(" "),v("blockquote",[v("p",[e._v("当"),v("code",[e._v("Fragment")]),e._v("被"),v("code",[e._v("FragmentManager")]),e._v("管理时，例如执行"),v("code",[e._v("replace()")]),e._v("事务中，逻辑上当前的"),v("code",[e._v("Fragment")]),e._v("只是被另外一个同类所替换了，它并没有真的被销毁（因为待会还有重新回来的机会），因此该"),v("code",[e._v("Fragment")]),e._v("并不会执行"),v("code",[e._v("onDestroy()")]),e._v("，然而由于内存上的考量，不可见的"),v("code",[e._v("Fragment")]),e._v("的"),v("code",[e._v("View")]),e._v("理应被回收，因此"),v("code",[e._v("View")]),e._v("会被销毁。")]),e._v(" "),v("p",[e._v("换句话说，"),v("code",[e._v("Fragment")]),e._v("不可见之后，它的状态会保存起来，但是其"),v("code",[e._v("View")]),e._v("会被销毁，待会再次可见的时候，会根据其状态再一次执行"),v("strong",[e._v("onCreateView()")]),e._v("。")])]),e._v(" "),v("p",[e._v("上述机制导致了一个问题："),v("code",[e._v("Fragment")]),e._v("的生命周期和其对应的"),v("code",[e._v("View")]),e._v("的生命周期在实质上是不对等的，然而实际开发中感知生命周期大多数是为了与UI进行互动，这也导致了开发者单纯监听"),v("code",[e._v("Fragment")]),e._v("的生命周期已经不能够满足开发上的需求了。")]),e._v(" "),v("p",[e._v("下面这张来源于谷歌官方开发者文档的图片很好的诠释了"),v("code",[e._v("Fragment")]),e._v("和它的"),v("code",[e._v("View")]),e._v("的生命周期关系：")]),e._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://developer.android.com/static/images/guide/fragments/fragment-view-lifecycle.png?hl=zh-cn",alt:"Fragment生命周期"}}),e._v(" "),v("p",[e._v("假如一个"),v("code",[e._v("Fragment")]),e._v("正在栈顶，他会处于Resumed的阶段，但是被replace之后（或者说是进入了回退栈），它会进入Created阶段，此刻"),v("code",[e._v("View")]),e._v("被销毁，"),v("code",[e._v("View")]),e._v("会进入Destroyed阶段，但是"),v("code",[e._v("Fragment")]),e._v("重回栈顶的时候，"),v("code",[e._v("Fragment")]),e._v("会从Created再次回归到Resume，而"),v("code",[e._v("View")]),e._v("会从Destroyed重回Resumed状态。")]),e._v(" "),v("p",[e._v("换句话说，在"),v("code",[e._v("Fragment")]),e._v("的生命周期中，它的View可能会反复的从Destroyed到Resumed之间移动（即不断地销毁与创建）")]),e._v(" "),v("p",[e._v("谷歌为了缓解这个问题，给"),v("code",[e._v("Fragment")]),e._v("的"),v("code",[e._v("View")]),e._v("单独添加了一套生命周期，我们可以通过代码看到端倪：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(481),alt:"lifecycle_19"}})]),e._v(" "),v("p",[e._v("可以看到，在"),v("code",[e._v("Fragment")]),e._v("执行"),v("code",[e._v("performCreateView()")]),e._v("的时候，会初始化"),v("code",[e._v("View")]),e._v("的"),v("strong",[e._v("Lifecycle")]),e._v("，两者的生命周期事件是单独通知的。")]),e._v(" "),v("ul",[v("li",[e._v("如果开发者想访问"),v("code",[e._v("Fragment")]),e._v("的生命周期，在"),v("code",[e._v("Fragment")]),e._v("中访问"),v("code",[e._v("lifecycleOwner")]),e._v("即可。")]),e._v(" "),v("li",[e._v("如果开发者想访问"),v("code",[e._v("Fragment")]),e._v("的"),v("code",[e._v("View")]),e._v("的生命周期，在"),v("code",[e._v("Fragment")]),e._v("中访问"),v("code",[e._v("viewLifecycleOwner")]),e._v("即可。")])]),e._v(" "),v("h3",{attrs:{id:"_3-3、viewtreelifecycleowner"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3、viewtreelifecycleowner"}},[e._v("#")]),e._v(" 3.3、ViewTreeLifecycleOwner")]),e._v(" "),v("p",[e._v("在上述的代码中，能够直接访问"),v("code",[e._v("Activity")]),e._v("、"),v("code",[e._v("Fragment")]),e._v("的Lifecycle的只能是它们的类中，而很多需要访问生命周期的地方往往是一些"),v("code",[e._v("View")]),e._v("中，例如要在"),v("code",[e._v("View")]),e._v("中监听其父组件生命周期，然而"),v("code",[e._v("View")]),e._v("的父控件有非常多，包括了"),v("code",[e._v("Activity")]),e._v("、"),v("code",[e._v("Fragment")]),e._v("甚至是"),v("code",[e._v("Dialog")]),e._v("乃至更多，要想获取父组件的生命周期，只能做类型判断+类型强转的工作，这样就极大的限制了"),v("code",[e._v("View")]),e._v("的使用范围：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(482),alt:"lifecycle_20"}})]),e._v(" "),v("p",[e._v("为了缓解，谷歌的开发人员提出了一种叫"),v("code",[e._v("ViewTreeLifecycleOwner")]),e._v("的设计，其实这个东西并没有什么神秘的，让我们直接看看源码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(483),alt:"lifecycle_21"}})]),e._v(" "),v("p",[e._v("通篇只有两个"),v("code",[e._v("View")]),e._v("的扩展函数，第一个函数的意义是给对应的"),v("code",[e._v("View")]),e._v("绑上一个"),v("code",[e._v("LifecycleOwner")]),e._v("，第二个函数的意义是不断往上查找父控件，直到查出之前绑定的"),v("code",[e._v("LifecycleOwner")]),e._v("。")]),e._v(" "),v("p",[e._v("这段源码的作用挺简单的，也就是说只要给某个顶层的控件提前绑好了"),v("code",[e._v("LifecycleOwner")]),e._v("，那么他下辖的所有子"),v("code",[e._v("View")]),e._v("都可以通过往上查找的方式来找到"),v("code",[e._v("LifecycleOwner")]),e._v("，不得不说谷歌的开发人员真的是太厉害了，在简陋的基础下做出了非常强大的功能。")]),e._v(" "),v("p",[e._v("那么下面的问题是："),v("code",[e._v("LifecycleOwner")]),e._v("的绑定发生在哪里呢？")]),e._v(" "),v("h4",{attrs:{id:"_3-3-1、activity中的绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1、activity中的绑定"}},[e._v("#")]),e._v(" 3.3.1、Activity中的绑定")]),e._v(" "),v("p",[e._v("​\tActivity的直接子类"),v("code",[e._v("ComponentActivity")]),e._v("、"),v("code",[e._v("AppcompatActivity")]),e._v("均自动完成了绑定的工作，我们以"),v("code",[e._v("ComponentActivity")]),e._v("为例看看相关的绑定代码：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(484),alt:"lifecycle_22"}})]),e._v(" "),v("p",[e._v("可见在"),v("code",[e._v("ComponentActivity")]),e._v("的"),v("code",[e._v("setContentView")]),e._v("被执行时，会将"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("ViewLifecycleOwner")]),e._v("绑定其所在的"),v("code",[e._v("Window")]),e._v("的"),v("code",[e._v("DecorView")]),e._v("中，我们都知道"),v("code",[e._v("Activity")]),e._v("下面的所有"),v("code",[e._v("View")]),e._v("都是"),v("code",[e._v("DecorView")]),e._v("的子View，因此它们都可以直接通过谷歌开发人员提供的扩展函数直接访问到最顶层的"),v("code",[e._v("Activity")]),e._v("的"),v("code",[e._v("Lifecycle")]),e._v("。")]),e._v(" "),v("h4",{attrs:{id:"_3-3-2、fragment中的绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2、fragment中的绑定"}},[e._v("#")]),e._v(" 3.3.2、Fragment中的绑定")]),e._v(" "),v("p",[e._v("和"),v("code",[e._v("Activity")]),e._v("类似，"),v("code",[e._v("Fragment")]),e._v("也采用了几乎一致的绑定方式，只不过是将"),v("code",[e._v("Lifecycle")]),e._v("绑定在了"),v("code",[e._v("Fragment")]),e._v("的"),v("code",[e._v("View")]),e._v("之上：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(485),alt:"lifecycle_23"}})]),e._v(" "),v("h4",{attrs:{id:"_3-3-3、dialog中的绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-3、dialog中的绑定"}},[e._v("#")]),e._v(" 3.3.3、Dialog中的绑定")]),e._v(" "),v("p",[e._v("默认的"),v("code",[e._v("Dialog")]),e._v("和"),v("code",[e._v("Activity")]),e._v("是不支持"),v("code",[e._v("ViewTreeLifecycleOwner")]),e._v("的，因此谷歌的开发人员重新继承实现了一个新的Dialog子类："),v("code",[e._v("ComponentDialog")]),e._v("，其中的绑定大同小异，简单看下源码即可了解：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(486),alt:"lifecycle_24"}})]),e._v(" "),v("p",[e._v("看来和"),v("code",[e._v("Activity")]),e._v("一样，把"),v("code",[e._v("LifecycleOwner")]),e._v("绑定在了"),v("code",[e._v("DecorView")]),e._v("中。")]),e._v(" "),v("h4",{attrs:{id:"_3-3-4、意义与总结"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-4、意义与总结"}},[e._v("#")]),e._v(" 3.3.4、意义与总结")]),e._v(" "),v("p",[e._v("那么谷歌的开发人员费尽心思的为以上的组件绑定"),v("code",[e._v("ViewTreeLifecycleOwner")]),e._v("有何用意呢？意义可大了，由于消除了组件之间的差异（均是通过"),v("code",[e._v("View")]),e._v("往上查找父控件直到找到"),v("code",[e._v("LifecycleOwner")]),e._v("的模式），我们不用在乎当前的"),v("code",[e._v("View")]),e._v("是在哪个控件中，都是统一通过"),v("code",[e._v("findViewTreeLifecycleOwner()")]),e._v("来获取最顶层控件的生命周期。")]),e._v(" "),v("p",[e._v("例如下面的自定义View的代码，无论在上述哪个控件中都可以用：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(487),alt:"lifecycle_25"}})]),e._v(" "),v("p",[e._v("可见，开发者只需要关注生命周期本身，不再需要担心不同组件之间的差异了。")]),e._v(" "),v("h2",{attrs:{id:"_4、结语"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_4、结语"}},[e._v("#")]),e._v(" 4、结语")]),e._v(" "),v("p",[e._v("安卓原生的生命周期设计只能说是毛坯房都算不上的水平，然而通过「Lifecycle」库的加持之后，开发者可以轻松访问组件的生命周期，让开发业务更加的合理与安全。")]),e._v(" "),v("p",[e._v("作为开发者的你，应该逐渐将重写生命周期函数的方式逐渐过渡到「Lifecycle」的开发方式中来，在一些工具类亦或者其他业务类中，你也可以使用「Lifecycle」辅助强化与生命周期相关的业务。")]),e._v(" "),v("p",[e._v("如果文章帮助到你，请为笔者点一个👍🏻支持一下，你的鼓励是我前进的动力！")]),e._v(" "),v("h2",{attrs:{id:"扩展内容"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#扩展内容"}},[e._v("#")]),e._v(" 扩展内容：")]),e._v(" "),v("h3",{attrs:{id:"_1、maxlifecycle"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、maxlifecycle"}},[e._v("#")]),e._v(" 1、MaxLifecycle")]),e._v(" "),v("p",[e._v("在"),v("code",[e._v("ViewPager")]),e._v("和"),v("code",[e._v("ViewPager2")]),e._v("这类可以操作"),v("code",[e._v("Fragment")]),e._v("的框架中，存在着一个重要的特性就是离屏缓存，即"),v("code",[e._v("offscreenPageLimit")]),e._v("，这个特性的作用是在当前可见的元素两侧，缓存多少不可见的元素。")]),e._v(" "),v("p",[e._v("这个机制有利于"),v("code",[e._v("ViewPager")]),e._v("在滑动过程中保持丝滑，因为当元素还未可见的时候，就提前加载并添加到视图树中。")]),e._v(" "),v("p",[e._v("但是这个机制却导致"),v("code",[e._v("Fragment")]),e._v("的生命周期与其可见度产生了冲突。")]),e._v(" "),v("p",[e._v("对于"),v("code",[e._v("Activity")]),e._v("来说，当它进入到Resumed状态后，开发者可以轻易认为当前的"),v("code",[e._v("Activity")]),e._v("对于用户是「可见」的。但是对于处于"),v("code",[e._v("ViewPager")]),e._v("的离屏缓存区域的"),v("code",[e._v("Fragment")]),e._v("来说，虽然他们被加载出来并进入了"),v("code",[e._v("Resumed")]),e._v("状态，但是实际上用户是看不见这些"),v("code",[e._v("Fragment")]),e._v("。这就导致了生命周期与可见性产生了不同步的问题，毕竟"),v("code",[e._v("Resumed")]),e._v("的定义就是可以看见并可以操作的意思。")]),e._v(" "),v("p",[e._v("下面简单用一个例子来演示这个问题：")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(488),alt:"lifecycle_27"}})]),e._v(" "),v("p",[e._v("上面的代码中虽然代码量不少，但是逻辑极其简单，就是构造一个"),v("code",[e._v("ViewPager")]),e._v("，同时带有5个"),v("code",[e._v("Fragment")]),e._v("，我们为每一个"),v("code",[e._v("Fragment")]),e._v("添加生命周期监听。")]),e._v(" "),v("center",[v("img",{staticStyle:{zoom:"50%"},attrs:{src:_(489),alt:"lifecycle_26"}})]),e._v(" "),v("p",[e._v("当初次进入的时候，"),v("code",[e._v("ViewPager")]),e._v("处于第1个位置，但是我们看一下日志：")]),e._v(" "),v("blockquote",[v("p",[e._v("当前位置:0进入了ON_CREATE\n当前位置:0进入了ON_START\n当前位置:1进入了ON_CREATE\n当前位置:0进入了ON_RESUME\n当前位置:1进入了ON_START\n当前位置:1进入了ON_RESUME")])]),e._v(" "),v("p",[e._v("可以看见的是，虽然当前只有第1个位置的"),v("code",[e._v("Fragment")]),e._v("可见，然而第2个位置的"),v("code",[e._v("Fragment")]),e._v("却进入了"),v("code",[e._v("onResume")]),e._v("，这个就是上面提到的离屏缓存的机制导致的。这导致在业务上我们没办法单纯通过"),v("code",[e._v("Fragment")]),e._v("的生命周期来判断是否被用户可见。")]),e._v(" "),v("p",[e._v("对于这个问题，谷歌为"),v("code",[e._v("Fragment")]),e._v("增加了一个"),v("code",[e._v("setUserVisibleHint(Boolean)")]),e._v("的方法来解决上述的问题。开发者可以手动通过调用这个方法来修改"),v("code",[e._v("Fragment")]),e._v("的可见度。需要注意的是，这个机制只是一个简单的「标记」，它并不能真正决定"),v("code",[e._v("Fragment")]),e._v("是否对于用户可见，笔者再次强调这只是一个「标记」。")]),e._v(" "),v("p",[e._v("于是"),v("code",[e._v("ViewPager")]),e._v("在页面跳转的时候，会主动去修改那些"),v("code",[e._v("Fragment")]),e._v("的"),v("code",[e._v("UserVisibleHint")]),e._v("，开发者再根据这个值来判断"),v("code",[e._v("Fragment")]),e._v("是否可见。")])],1)}),[],!1,null,null,null);v.default=c.exports}}]);