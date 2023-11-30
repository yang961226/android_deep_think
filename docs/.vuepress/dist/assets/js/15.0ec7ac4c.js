(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{405:function(e,t,v){e.exports=v.p+"assets/img/savedstate_14.b15bf8e1.png"},406:function(e,t,v){e.exports=v.p+"assets/img/savedstate_20.824b422f.png"},492:function(e,t,v){e.exports=v.p+"assets/img/savedstate_04.b51d3efd.png"},493:function(e,t,v){e.exports=v.p+"assets/img/savedstate_05.22601a3e.png"},494:function(e,t,v){e.exports=v.p+"assets/img/savedstate_06.2af77d93.png"},495:function(e,t,v){e.exports=v.p+"assets/img/savedstate_07.a7c7c892.png"},496:function(e,t,v){e.exports=v.p+"assets/img/savedstate_13.d3a451cc.png"},497:function(e,t,v){e.exports=v.p+"assets/img/savedstate_15.469a1c57.png"},498:function(e,t,v){e.exports=v.p+"assets/img/savedstate_11.a0236a37.png"},499:function(e,t,v){e.exports=v.p+"assets/img/savedstate_12.9b166651.png"},500:function(e,t,v){e.exports=v.p+"assets/img/savedstate_16.17ede37c.png"},501:function(e,t,v){e.exports=v.p+"assets/img/savedstate_17.cfa1ee2f.png"},502:function(e,t,v){e.exports=v.p+"assets/img/savedstate_18.88e8e627.png"},503:function(e,t,v){e.exports=v.p+"assets/img/savedstate_19.175a2e99.png"},504:function(e,t,v){e.exports=v.p+"assets/img/savedstate_21.7eff889d.png"},505:function(e,t,v){e.exports=v.p+"assets/img/savedstate_22.efd96d43.png"},506:function(e,t,v){e.exports=v.p+"assets/img/savedstate_23.d0186532.png"},507:function(e,t,v){e.exports=v.p+"assets/img/savedstate_24.11d4c492.png"},508:function(e,t,v){e.exports=v.p+"assets/img/savedstate_25.b2e57b86.png"},509:function(e,t,v){e.exports=v.p+"assets/img/savedstate_26.aa87ace7.png"},510:function(e,t,v){e.exports=v.p+"assets/img/savedstate_27.96314c1e.png"},511:function(e,t,v){e.exports=v.p+"assets/img/savedstate_28.57d47e59.png"},512:function(e,t,v){e.exports=v.p+"assets/img/savedstate_29.c32153f4.png"},513:function(e,t,v){e.exports=v.p+"assets/img/savedstate_30.6f385f3c.png"},514:function(e,t,v){e.exports=v.p+"assets/img/savedstate_31.a00de0b6.png"},515:function(e,t,v){e.exports=v.p+"assets/img/savedstate_32.480188b9.png"},516:function(e,t,v){e.exports=v.p+"assets/img/savedstate_33.059af658.png"},517:function(e,t,v){e.exports=v.p+"assets/img/savedstate_34.b0cec8ba.png"},518:function(e,t,v){e.exports=v.p+"assets/img/savedstate_35.1e97ec2c.png"},519:function(e,t,v){e.exports=v.p+"assets/img/savedstate_36.f0c2e05c.png"},535:function(e,t,v){"use strict";v.r(t);var _=v(2),a=Object(_.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"状态保存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#状态保存"}},[e._v("#")]),e._v(" 状态保存")]),e._v(" "),t("h2",{attrs:{id:"_1、为什么需要状态保存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1、为什么需要状态保存"}},[e._v("#")]),e._v(" 1、为什么需要状态保存？")]),e._v(" "),t("p",[e._v("说「状态保存」之前，我们先讲一讲为什么需要状态保存：")]),e._v(" "),t("p",[e._v("常见的window、linux系统不同的是，移动端的操作系统拥有的内存更少，因此这类系统更容易面临"),t("strong",[e._v("内存不足")]),e._v("的情况，如何最大限度利用较少的内存是移动端操作系统比较重要的问题。")]),e._v(" "),t("p",[e._v("对于安卓系统来说，一个"),t("code",[e._v("Activity")]),e._v("不可见时，即这时已经跳转到了另外一个"),t("code",[e._v("Activity")]),e._v("或者整个App都处于处于后台的情况下，同时它的生命周期处于「Stoped」。在这之后，一旦出现内存不足的情况，Android系统就会考虑销毁这些用户不可见的"),t("code",[e._v("Activity")]),e._v("，这样就可以释放它们占用的内存，给予用户目前正在交互的"),t("code",[e._v("Activity")]),e._v("更多的内存，避免彻底的OOM（out of momory)异常出现。")]),e._v(" "),t("p",[e._v("此刻就出现了一个问题，如果只是单纯的把"),t("code",[e._v("Activity")]),e._v("销毁了，那么之前用户操作的信息就全部丢失了，可以想象的一个场景是：用户正在编辑一段日记的时候，来了一个电话，当通话结束之后（假设此刻处于后台的编辑日记的Activity由于内存不足被销毁了），那么返回到App的时候，用户会发现花了很多时间编辑的日记已经全部丢失，这样的App逻辑是无法接受的。因此我们需要一种机制：在即将被销毁的时候保存"),t("code",[e._v("Activity")]),e._v("的状态，页面重建之后根据之前保存的状态恢复页面，这种“机制”就是标题所谓的「状态保存」。")]),e._v(" "),t("h2",{attrs:{id:"_2、状态在安卓中意味着什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2、状态在安卓中意味着什么"}},[e._v("#")]),e._v(" 2、状态在安卓中意味着什么")]),e._v(" "),t("p",[e._v("在安卓中，当我们提到「状态保存」的时候，开发者保存的状态其实就是某些「成员变量」。")]),e._v(" "),t("p",[e._v("因此，读者可以简单的理解为，当一个变量存在于View中，即此变量为View的成员变量时，此变量可能会由于View的重建而丢失，因为View此时是一个全新的实例。同理，当Activity与Fragment也会存在类似的场景丢失他们的成员变量。因此开发者需要处理这些可能会由于实例的替换导致丢失成员变量的场景，这个处理的过程就是安卓的「状态保存」。")]),e._v(" "),t("p",[e._v("下面结合代码理解一下：")]),e._v(" "),t("h4",{attrs:{id:"_2-1、view的实例状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1、view的实例状态"}},[e._v("#")]),e._v(" 2.1、View的实例状态")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(492),alt:"savedstate_04"}})]),e._v(" "),t("p",[e._v("根据上文所述"),t("code",[e._v("View")]),e._v("中的那些成员变量就是「View的实例状态」，这里展示一个按钮案例，常见的按钮就有”选中“和”未选中“两个状态，因此开发者会用一个布尔值来存储这个状态，但是由于重建机制的存在，"),t("code",[e._v("View")]),e._v("会被一个新的实例代替，那么此时的View就丢失了状态了。")]),e._v(" "),t("h4",{attrs:{id:"_2-2、activity的实例状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2、activity的实例状态"}},[e._v("#")]),e._v(" 2.2、Activity的实例状态")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(493),alt:"savedstate_05"}})]),e._v(" "),t("p",[e._v("一个"),t("code",[e._v("Activity")]),e._v("中存在着"),t("code",[e._v("View")]),e._v("，在"),t("code",[e._v("View")]),e._v("的内部存在着「View的实例状态」，同时它旁边也存在着一些"),t("code",[e._v("Activity")]),e._v("的成员变量，这些成员变量和"),t("code",[e._v("View")]),e._v("内部的状态共同组成了「"),t("code",[e._v("Activity")]),e._v("的实例状态」。")]),e._v(" "),t("p",[e._v("同样，当遇到重建的场景时，"),t("code",[e._v("Activity")]),e._v("会同时丢失自身的状态与"),t("code",[e._v("View")]),e._v("内部的实例状态（在"),t("code",[e._v("View")]),e._v("没有实现状态保存的情况下）。")]),e._v(" "),t("h4",{attrs:{id:"_2-3、fragment的实例状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3、fragment的实例状态"}},[e._v("#")]),e._v(" 2.3、Fragment的实例状态")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(494),alt:"savedstate_06"}})]),e._v(" "),t("p",[e._v("与"),t("code",[e._v("Activity")]),e._v("几乎类似，"),t("code",[e._v("Fragment")]),e._v("也同样存在着"),t("code",[e._v("View")]),e._v("与自身的成员变量，因此「"),t("code",[e._v("View")]),e._v("的实例状态」与这些成员变量共同组成了「Fragment的实例状态」。")]),e._v(" "),t("blockquote",[t("p",[e._v("需要注意的是：由于"),t("code",[e._v("Fragment")]),e._v("的特殊性，"),t("code",[e._v("Fragment")]),e._v("的生命周期与"),t("code",[e._v("Fragment")]),e._v("的"),t("code",[e._v("View")]),e._v("的生命周期是不一致的，一个"),t("code",[e._v("Fragment")]),e._v("在自身的生命周期内可能会跨越多个"),t("code",[e._v("View")]),e._v("的重建，这也导致了"),t("code",[e._v("Fragment")]),e._v("的状态保存分裂为「成员变量的保存」与「View的实例状态的保存」，这两者在"),t("code",[e._v("Activity")]),e._v("中是同时发生的，而"),t("code",[e._v("Fragment")]),e._v("中并不一定同时。")])]),e._v(" "),t("h4",{attrs:{id:"_2-4、实例状态的包含关系"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-4、实例状态的包含关系"}},[e._v("#")]),e._v(" 2.4、实例状态的包含关系")]),e._v(" "),t("p",[e._v("由于"),t("code",[e._v("View")]),e._v("是依附于组件中的，因此「组件的实例状态」除了组件本身的变量，还包括了「"),t("code",[e._v("View")]),e._v("的实例状态」，因此当我们说组件的状态保存的时候，其实还包括了保存"),t("code",[e._v("View")]),e._v("的状态。")]),e._v(" "),t("p",[e._v("也许读者此时会联想到，"),t("code",[e._v("Fragment")]),e._v("也可以存在于父"),t("code",[e._v("Fragment")]),e._v("或者父"),t("code",[e._v("Activity")]),e._v("，那么它们之间的实例状态也是包含关系吗？")]),e._v(" "),t("p",[e._v("答案是对的，当"),t("code",[e._v("Activity")]),e._v("保存自身状态的时候，同时也会让它所包含的"),t("code",[e._v("Fragment")]),e._v("保存实例状态。")]),e._v(" "),t("p",[e._v("下面这张图可以展示状态关系：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(495),alt:"savedstate_07"}})]),e._v(" "),t("h2",{attrs:{id:"_3、图示状态保存与恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3、图示状态保存与恢复"}},[e._v("#")]),e._v(" 3、图示状态保存与恢复")]),e._v(" "),t("p",[e._v("下面援引自"),t("a",{attrs:{href:"https://inthecheesefactory.com/blog/fragment-state-saving-best-practices/en",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Real Best Practices to Save"),t("OutboundLink")],1),e._v("的几张图可以很好阐述状态保存时发生的事情：")]),e._v(" "),t("blockquote",[t("p",[e._v("当Activity需要保存实例状态的时候，它会先遍历所有的View让他们各自保存自己的状态，然后打包放在自己的实例状态中的某个地方，和自身的其他业务状态保存在一起。")])]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://inthecheesefactory.com/uploads/source/fragmentstate/activitysavestate_.gif"}})]),e._v(" "),t("blockquote",[t("p",[e._v("相反，当Activity需要恢复状态的时候，它会从实例状态中找出所有View之前保存的状态，然后将他们恢复给所有的View，同时恢复自身的业务状态。")])]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://inthecheesefactory.com/uploads/source/fragmentstate/activityrestorestate_.gif"}})]),e._v(" "),t("p",[e._v("对于"),t("code",[e._v("Fragment")]),e._v("来说整个过程是类似的，这里就不展示了。")]),e._v(" "),t("h2",{attrs:{id:"_4、实操状态保存与恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4、实操状态保存与恢复"}},[e._v("#")]),e._v(" 4、实操状态保存与恢复")]),e._v(" "),t("h3",{attrs:{id:"_4-1、view"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1、view"}},[e._v("#")]),e._v(" 4.1、View")]),e._v(" "),t("p",[t("code",[e._v("View")]),e._v("的状态保存与恢复核心方法是"),t("code",[e._v("onSaveInstanceState()")]),e._v("与"),t("code",[e._v("onRestoreInstanceState()")]),e._v("。")]),e._v(" "),t("p",[e._v("开发者只需要为当前的"),t("code",[e._v("View")]),e._v("在"),t("code",[e._v("onSaveInstanceState()")]),e._v("、"),t("code",[e._v("onRestoreInstanceState()")]),e._v("中实现图中的操作即可。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(496),alt:"savedstate_13"}})]),e._v(" "),t("p",[e._v("需要注意的是：")]),e._v(" "),t("blockquote",[t("p",[e._v("View能够实现状态保存与恢复的前提是：必须在UI树中存在唯一的ID。")])]),e._v(" "),t("p",[e._v("换句话说，这要求了开发者必须在布局的xml中为该View赋予唯一的ID，或者动态添加的时候生成一个唯一ID。")]),e._v(" "),t("p",[e._v("这并不难理解，状态保存的本质是将状态缓存在某个容器中，需要恢复的时候从容器中取出来，而ID则是取的Key，如果没有Key那又如何保存状态呢？")]),e._v(" "),t("h3",{attrs:{id:"_4-2、activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2、activity"}},[e._v("#")]),e._v(" 4.2、Activity")]),e._v(" "),t("p",[t("code",[e._v("Activity")]),e._v("的状态保存与"),t("code",[e._v("View")]),e._v("类似，也是一对"),t("code",[e._v("onSaveInstanceState()")]),e._v("与"),t("code",[e._v("onRestoreInstanceState()")]),e._v("方法，但是开发者大多数选择在"),t("code",[e._v("onCreate()")]),e._v("中恢复状态，这取决于实际的需要。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(405),alt:"savedstate_14"}})]),e._v(" "),t("h3",{attrs:{id:"_4-3、fragment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3、fragment"}},[e._v("#")]),e._v(" 4.3、Fragment")]),e._v(" "),t("p",[t("code",[e._v("Fragment")]),e._v("的状态保存也与"),t("code",[e._v("Activity")]),e._v("类似，下面直接看图即可：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(497),alt:"savedstate_15"}})]),e._v(" "),t("blockquote",[t("p",[e._v("依然需要注意的是：在2.3中提到，由于Fragment的实例与UI的分离的设计模式，因此会发生只保存UI状态的情况，因此上图中的onSaveInstanceState()是不会调用的，我们从方法名中也可以看出这是保存实例状态。")])]),e._v(" "),t("h2",{attrs:{id:"_5、状态保存与恢复的时机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5、状态保存与恢复的时机"}},[e._v("#")]),e._v(" 5、状态保存与恢复的时机？")]),e._v(" "),t("h3",{attrs:{id:"_5-1、activity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1、activity"}},[e._v("#")]),e._v(" 5.1、Activity")]),e._v(" "),t("blockquote",[t("p",[e._v("当"),t("code",[e._v("Activity")]),e._v("被意外销毁时，需要保存状态，并在Activity重新恢复显示时恢复状态。")])]),e._v(" "),t("p",[e._v("对于"),t("code",[e._v("Activity")]),e._v("来说，除了用户手动从当前"),t("code",[e._v("Activity")]),e._v("退出以外（这种情况无需状态保存），还有以下两种情况会导致"),t("code",[e._v("Activity")]),e._v("会被系统销毁：")]),e._v(" "),t("blockquote",[t("ol",[t("li",[e._v("配置发生变化（用户修改了手机的语言、暗夜模式等）。")]),e._v(" "),t("li",[e._v("Activity处于「停止」状态时因系统限制（内存不足）而被销毁。")])])]),e._v(" "),t("p",[e._v("为什么用户主动按下返回按钮导致"),t("code",[e._v("Activity")]),e._v("销毁不需要状态保存而后两种情况需要状态保存呢？")]),e._v(" "),t("p",[e._v("主要的原因是前者是**「用户意料之内的行为」"),t("strong",[e._v("，而后两种情况属于")]),e._v("「用户意料之外的行为」**。当一个用户旋转一个页面时，亦或者用户从页面A跳转到B，并稍后从B返回到A时，这两种情况用户并不希望页面的信息丢失了，否则就会出现上文出现的「编辑一半的日记被来电清空」的特殊情况，这对于用户来说是不可以接受的。")]),e._v(" "),t("p",[e._v("下面结合一张图来展示"),t("code",[e._v("Activity")]),e._v("生命周期与状态保存的关系：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(498),alt:"savedstate_11"}})]),e._v(" "),t("p",[e._v("由图中可见，"),t("code",[e._v("Activity")]),e._v("的状态保存与恢复发生在"),t("code",[e._v("onSaveInstanceState()")]),e._v("和"),t("code",[e._v("onRestoreInstanceState()")]),e._v("中，具体的细节下文会解释，这里读者记住它发生的时机即可。（在安卓9之后，保存状态发生在onStop()之后，这与安卓9之前的版本有细微的差异）。")]),e._v(" "),t("h3",{attrs:{id:"_5-2、fragment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2、fragment"}},[e._v("#")]),e._v(" 5.2、Fragment")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Fragment")]),e._v("保存状态的时机相对复杂，有好几种情况。同时保存业务状态和保存View的状态的时机并不一定是一致的。")])]),e._v(" "),t("p",[e._v("下面援引官方文档的一句结论：")]),e._v(" "),t("blockquote",[t("p",[t("strong",[e._v("注意")]),e._v("：仅当 fragment 的宿主 activity 调用自己的 "),t("code",[e._v("onSaveInstanceState(Bundle)")]),e._v(" 时，系统才会调用 "),t("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("。")])]),e._v(" "),t("p",[e._v("实际上这个结论并不能完全概括"),t("code",[e._v("Fragment")]),e._v("保存状态的所有时机，只是阐述了其中一种由"),t("code",[e._v("Activity")]),e._v("发生状态保存的时候，顺便保存其子"),t("code",[e._v("Fragment")]),e._v("状态的情况，而"),t("code",[e._v("Fragment")]),e._v("保存状态的情况还有两种，笔者下文会讲，这里先从"),t("code",[e._v("Activity")]),e._v("发生状态保存时开始讲起。")]),e._v(" "),t("h4",{attrs:{id:"_5-2-1、activity状态保存时-顺便保存fragment的状态-恢复状态同理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-1、activity状态保存时-顺便保存fragment的状态-恢复状态同理"}},[e._v("#")]),e._v(" 5.2.1、Activity状态保存时，顺便保存Fragment的状态，恢复状态同理")]),e._v(" "),t("p",[e._v("这种情况属于自动发生的情况，上文讲"),t("code",[e._v("Activity")]),e._v("的状态保存时提到，"),t("code",[e._v("Activity")]),e._v("的实例状态其实也包含了"),t("code",[e._v("Fragment")]),e._v("的实例状态，因此"),t("code",[e._v("Activity")]),e._v("保存状态中也包含了"),t("code",[e._v("Fragment")]),e._v("的状态。")]),e._v(" "),t("p",[e._v("通过图示来理解这个过程：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(499),alt:"savedstate_12"}})]),e._v(" "),t("p",[e._v("这种情况就是官方文档中提到的「宿主"),t("code",[e._v("Activity")]),e._v("」调用"),t("code",[e._v("Fragment")]),e._v("的"),t("code",[e._v("onSaveInstanceState()")]),e._v("的时候保存状态的情况。")]),e._v(" "),t("h4",{attrs:{id:"_5-2-2、主动保存与恢复fragment的状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-2、主动保存与恢复fragment的状态"}},[e._v("#")]),e._v(" 5.2.2、主动保存与恢复Fragment的状态")]),e._v(" "),t("p",[e._v("有时候"),t("code",[e._v("Fragment")]),e._v("并不一定要跟随"),t("code",[e._v("Activity")]),e._v("进行状态保存，在"),t("code",[e._v("Activity")]),e._v("的生命周期期间，其内部的"),t("code",[e._v("Fragment")]),e._v("也会主动保存与恢复状态，这暗示着这些"),t("code",[e._v("Fragment")]),e._v("存在着需要销毁实例的情况。")]),e._v(" "),t("p",[e._v("下面我们讲讲如何主动保存与恢复这些"),t("code",[e._v("Fragment")]),e._v("的状态：")]),e._v(" "),t("p",[e._v("首先我们看FragmentManager(1.5.5版本)的源码，其中存在着一个"),t("code",[e._v("saveFragmentInstanceState(Fragment)")]),e._v("的方法，它是public的因此开发者可以使用这个方法「主动保存一个"),t("code",[e._v("Fragment")]),e._v("的状态」，随后就可以抛弃掉这个"),t("code",[e._v("Fragment")]),e._v("实例。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(500),alt:"savedstate_16"}})]),e._v(" "),t("p",[e._v("还可以看到，保存的状态为"),t("code",[e._v("SavedState")]),e._v("，随后我们可以根据这个状态去为新创建的"),t("code",[e._v("Fragment")]),e._v("实例恢复刚才的状态。")]),e._v(" "),t("p",[e._v("那么我们应该如何为新创建的"),t("code",[e._v("Fragment")]),e._v("实例恢复呢？"),t("code",[e._v("Fragment")]),e._v("专门为这种情况提供了一个方法：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(501),alt:"savedstate_17"}})]),e._v(" "),t("p",[e._v("可以看到这个方法单纯就是为了初始化一个"),t("code",[e._v("Fragment")]),e._v("的状态，唯一需要注意的是：")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("setInitialSavedState(SavedState)")]),e._v("只能在"),t("code",[e._v("Fragment")]),e._v("被"),t("code",[e._v("FragmentManager")]),e._v("纳入管理之前调用。")])]),e._v(" "),t("p",[e._v("这一对API的意义是什么呢？目的只有一个就是节省内存，因为开发者经常会遇到这种场景：")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("Fragment")]),e._v("暂时不可见，希望回收它的实例但是保存状态，稍后新建一个类型相同的"),t("code",[e._v("Fragment")]),e._v("实例，然后用刚才保存的状态将「新建的实例」恢复成「旧的实例」的状态。")])]),e._v(" "),t("p",[e._v("如果你熟悉"),t("code",[e._v("ViewPager2")]),e._v("，那么你一定了解它的一个"),t("code",[e._v("offscreenPageLimit")]),e._v("的机制，"),t("code",[e._v("FragmentStateAdapter")]),e._v("这个适配器会将那些离视窗范围太远的"),t("code",[e._v("Fragment")]),e._v("销毁掉，这个场景就是上述的提到的。那么它又是如何在重新回到被销毁的"),t("code",[e._v("Fragment")]),e._v("的位置的时候将其状态恢复的呢？")]),e._v(" "),t("p",[e._v("答案就是上文提到的主动恢复状态的方法："),t("code",[e._v("setInitialSavedState(SavedState)")]),e._v("。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(502),alt:"savedstate_18"}})]),e._v(" "),t("p",[e._v("虽然旧的"),t("code",[e._v("Fragment")]),e._v("实例被销毁了，但是"),t("code",[e._v("ViewPager2")]),e._v("通过保存它的状态的方式，稍后使用了一个新的"),t("code",[e._v("Fragment")]),e._v("与之前保存的状态恢复到了当初的样子。")]),e._v(" "),t("p",[e._v("虽然开发者很少会实现自己的「跨Fragment实例的状态保存恢复机制」，但是理解其本质有利于理解"),t("code",[e._v("ViewPager")]),e._v("等框架的基础原理。")]),e._v(" "),t("h4",{attrs:{id:"_5-2-3、fragment进入回退栈的时候"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-3、fragment进入回退栈的时候"}},[e._v("#")]),e._v(" 5.2.3、Fragment进入回退栈的时候")]),e._v(" "),t("p",[e._v("下面引用一段来自"),t("a",{attrs:{href:"https://www.geeksforgeeks.org/fragment-lifecycle-in-android/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fragment Lifecycle in Android - GeeksforGeeks"),t("OutboundLink")],1),e._v("的图阐述一下"),t("code",[e._v("Fragment")]),e._v("特殊的生命周期：")]),e._v(" "),t("p",[t("img",{attrs:{src:"https://media.geeksforgeeks.org/wp-content/uploads/20230120013956/AndroidFragmentLifecycle.png",alt:""}})]),e._v(" "),t("p",[e._v("在图中可以看出，从"),t("code",[e._v("onCreate()")]),e._v("到"),t("code",[e._v("onDestroy()")]),e._v("的生命周期中，"),t("code",[e._v("Fragment")]),e._v("还可能进入一个从"),t("code",[e._v("onCreateView()")]),e._v("到"),t("code",[e._v("onDestroyView()")]),e._v("的循环，这个循环的次数可能是大于1次的。")]),e._v(" "),t("p",[e._v("换句话说，在"),t("code",[e._v("Fragment")]),e._v("实例被创建到被销毁的期间，它的"),t("code",[e._v("View")]),e._v("也许会经历1次或以上的重新创建。")]),e._v(" "),t("p",[e._v("那么什么情况下会发生「只销毁View而不销毁实例」的情况呢？答案如标题所述，就是"),t("code",[e._v("Fragment")]),e._v("进入回退栈的时候。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(503),alt:"savedstate_19"}})]),e._v(" "),t("p",[e._v("当开发者使用"),t("code",[e._v("FragmentManager")]),e._v("执行"),t("code",[e._v("replace")]),e._v("操作并调用了"),t("code",[e._v("addToBackStack()")]),e._v("的时候，意味着「使用了一个新的"),t("code",[e._v("Fragment")]),e._v("替换掉了旧的"),t("code",[e._v("Fragment")]),e._v("」，但是这个操作是可逆的，因为操作添加进了回退栈，也就意味着，用户按返回键的时候，会返回到之前那个被替换的"),t("code",[e._v("Fragment")]),e._v("。")]),e._v(" "),t("p",[e._v("这意味着，旧的"),t("code",[e._v("Fragment")]),e._v("只是暂时被压到了一个栈中，待会仍然可以通过退栈的方式重新回到用户的屏幕中，这个旧的"),t("code",[e._v("Fragment")]),e._v("会经历onPause()->onStop()->onDestroyView()的过程，但是仅此而已。它的实例没有被销毁，只是"),t("code",[e._v("View")]),e._v("被销毁了而已。")]),e._v(" "),t("p",[e._v("但是开发者仍然不需要担心"),t("code",[e._v("View")]),e._v("被销毁后，"),t("code",[e._v("View")]),e._v("中的实例状态丢失了，因为"),t("code",[e._v("Fragment")]),e._v("考虑到了这种情况，在"),t("code",[e._v("FragmentManager")]),e._v("检测到这种场景的时候，会主动让"),t("code",[e._v("Fragment")]),e._v("保存其"),t("code",[e._v("contentView")]),e._v("的状态并存放在"),t("code",[e._v("FragmentManager")]),e._v("中。")]),e._v(" "),t("p",[e._v("然而对于开发者来说，并不需要额外花心思在如何处理"),t("code",[e._v("Fragment")]),e._v("的"),t("code",[e._v("contentView")]),e._v("的状态如何被保存，因为这个本质是属于"),t("code",[e._v("View")]),e._v("层面的东西，了解这个机制的含义更多是解决一些开发中的隐性问题：")]),e._v(" "),t("blockquote",[t("p",[e._v("Fragment的实例和UI的生命周期实则是分离的，不能将两者等同，例如不能简单的使用Fragment的生命周期回调对UI进行一些操作而是使用其contentView的生命周期，否则将会发生越界访问（UI销毁了仍尝试访问）或者内存泄漏。")]),e._v(" "),t("p",[e._v("Fragment的UI初始化应该写在onCreateView()中而不是onCreate()，这样能避免在生命周期期间发生UI销毁，导致UI没有被重新初始化等问题。")])]),e._v(" "),t("h2",{attrs:{id:"_6、古法状态保存的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6、古法状态保存的问题"}},[e._v("#")]),e._v(" 6、古法状态保存的问题")]),e._v(" "),t("p",[e._v("上述分点讨论了"),t("code",[e._v("View")]),e._v("、"),t("code",[e._v("Activity")]),e._v("、"),t("code",[e._v("Fragment")]),e._v("的古法状态保存，不知道读者是否感觉到了他们有一些设计上的缺陷呢？笔者这里总结了几点：")]),e._v(" "),t("p",[e._v("我们以"),t("code",[e._v("Activity")]),e._v("为例，回顾一下它的状态保存：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(405),alt:"savedstate_14"}})]),e._v(" "),t("h3",{attrs:{id:"_6-1、不同类型的状态之间混合在一起"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1、不同类型的状态之间混合在一起"}},[e._v("#")]),e._v(" 6.1、不同类型的状态之间混合在一起")]),e._v(" "),t("p",[e._v("如果我们将一个页面中不同业务的状态，都通过同一种方式（key-value)全部缓存在"),t("code",[e._v("onSaveInstanceState(Bundle)")]),e._v("提供的"),t("code",[e._v("bundle")]),e._v("中，那么维护起来将十分的复杂。")]),e._v(" "),t("h3",{attrs:{id:"_6-2、上层主动保存状态而不是状态持有者本身"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2、上层主动保存状态而不是状态持有者本身"}},[e._v("#")]),e._v(" 6.2、上层主动保存状态而不是状态持有者本身")]),e._v(" "),t("p",[e._v("另外还要注意的是："),t("code",[e._v("Activity")]),e._v("本质上需要在自身的基础上，通过重写方法的方式来保存和恢复一些状态，然后提供这些状态给别的组件使用。")]),e._v(" "),t("p",[e._v("这样的问题是：状态的使用者往往不是"),t("code",[e._v("Activity")]),e._v("而是"),t("code",[e._v("Activity")]),e._v("的一些附属的组件，例如一些成员变量、"),t("code",[e._v("View")]),e._v("（这里的情况下把"),t("code",[e._v("View")]),e._v("的状态上升到了"),t("code",[e._v("Activity")]),e._v("来维护，也是开发中常见的一种方式）等。")]),e._v(" "),t("p",[e._v("如果全部的状态都通过"),t("code",[e._v("Activity")]),e._v("亲自来维护和恢复，如果后续需要保存的状态多起来的话，将会为"),t("code",[e._v("Activity")]),e._v("的开发提高了很大的负担。再者这也是违背单一权责的，单个方法中需要管理的不同业务的状态太多了。")]),e._v(" "),t("h3",{attrs:{id:"_6-3、缺乏统一的管理层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3、缺乏统一的管理层"}},[e._v("#")]),e._v(" 6.3、缺乏统一的管理层")]),e._v(" "),t("p",[e._v("Activity、Dialog、Fragment等不同场景均依赖自身的方法，缺乏统一的代码。数据的维护可能需要团队的代码规范。")]),e._v(" "),t("h3",{attrs:{id:"_6-4、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-4、总结"}},[e._v("#")]),e._v(" 6.4、总结")]),e._v(" "),t("p",[e._v("古法状态保存由于历史的原因，设计的缺陷非常的大，开发者很难在复杂的业务中精准、高效地保存页面状态。")]),e._v(" "),t("h2",{attrs:{id:"_7、走向savedstate库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7、走向savedstate库"}},[e._v("#")]),e._v(" 7、走向SavedState库")]),e._v(" "),t("p",[e._v("谷歌为了解决上述的状态保存的问题，提出了SavedState库。")]),e._v(" "),t("p",[e._v("让我们看看「SavedState」库的整体脉络：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(406),alt:"savedstate_20"}})]),e._v(" "),t("p",[e._v("图中可以看出，状态是缓存在"),t("code",[e._v("SavedStateRegistry")]),e._v("中的，而该Registry又通过不同的"),t("code",[e._v("SavedStateProvider")]),e._v("来保存不同类型的状态，达到了分类管理的效果。")]),e._v(" "),t("p",[e._v("单纯一幅图是没法完全理解这个库的，下面进行分点讲解：")]),e._v(" "),t("h3",{attrs:{id:"_7-1、关键类解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1、关键类解析"}},[e._v("#")]),e._v(" 7.1、关键类解析")]),e._v(" "),t("h4",{attrs:{id:"_7-1-1、savedstateregistryowner"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-1、savedstateregistryowner"}},[e._v("#")]),e._v(" 7.1.1、SavedStateRegistryOwner")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(504),alt:"savedstate_21"}})]),e._v(" "),t("p",[e._v("可以看到，"),t("code",[e._v("SavedStateRegistryOwner")]),e._v("是一个非常简单的接口，它的目的是对外提供一个"),t("code",[e._v("SavedStateRegistry")]),e._v("，这是一个集中管理状态的管理器，下文会提到这里略过。")]),e._v(" "),t("p",[e._v("还需要注意的是，该接口是"),t("code",[e._v("LifecycleOwner")]),e._v("的子类，因此它拥有感知生命周期的能力。不难理解，毕竟需要状态保存与恢复需要发生在组件恰当的生命周期中。")]),e._v(" "),t("h4",{attrs:{id:"_7-1-2、savedstateprovider"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-2、savedstateprovider"}},[e._v("#")]),e._v(" 7.1.2、SavedStateProvider")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(505),alt:"savedstate_22"}})]),e._v(" "),t("p",[t("code",[e._v("SavedStateProvider")]),e._v("是一个接口，它的含义是「状态提供器」，实现该接口的类本质上就是定义了如何保存一类状态的方式。当需要保存状态时，"),t("code",[e._v("SavedStateRegistry")]),e._v("就会让它管理的所有Provider按定义保存所有状态。")]),e._v(" "),t("h4",{attrs:{id:"_7-1-3、savedstateregistry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3、savedstateregistry"}},[e._v("#")]),e._v(" 7.1.3、SavedStateRegistry")]),e._v(" "),t("p",[t("code",[e._v("SavedStateRegistry")]),e._v("是一个管理器，管理着一系列的"),t("code",[e._v("SavedStateProvider")]),e._v("，当其拥有者重建时，Registry也会重新创建一个新的实例。当Registry的拥有者（例如"),t("code",[e._v("Activity")]),e._v("）被创建的时候，Registry就会尝试恢复之前保存的状态。")]),e._v(" "),t("p",[e._v("让我们总体概览一下"),t("code",[e._v("SavedStateRegistry")]),e._v("的代码， 不用为复杂的代码感到担心，下面会详解：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(506),alt:"savedstate_23"}})]),e._v(" "),t("h5",{attrs:{id:"_7-1-3-1、注册与反注册「状态提供者」"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3-1、注册与反注册「状态提供者」"}},[e._v("#")]),e._v(" 7.1.3.1、注册与反注册「状态提供者」")]),e._v(" "),t("p",[e._v("上文中提到，"),t("code",[e._v("SavedStateRegistry")]),e._v("是一个管理一系列"),t("code",[e._v("SavedStateProvider")]),e._v("的容器，因此它提供了一对方法用于注册和解绑这些"),t("code",[e._v("StateProvider")]),e._v("，稍后这些Provider在保存与恢复状态中起到了关键作用。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(507),alt:"savedstate_24"}})]),e._v(" "),t("h5",{attrs:{id:"_7-1-3-2、恢复与消费状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3-2、恢复与消费状态"}},[e._v("#")]),e._v(" 7.1.3.2、恢复与消费状态")]),e._v(" "),t("p",[t("code",[e._v("SavedStateRegistry")]),e._v("分别提供了"),t("code",[e._v("performRestore(Bundle?)")]),e._v("和"),t("code",[e._v("consumeRestoredStateForKey(String?)")]),e._v("来实现状态的恢复与消费。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(508),alt:"savedstate_25"}})]),e._v(" "),t("p",[e._v("从代码中可见，「恢复状态」只是从外部的Bundle中抓取一部分存放到Registry内部，并没有去执行取值的操作。如果需要从恢复后的状态中取值，则再次多次调用"),t("code",[e._v("consumeRestoredStateForKey(String?)")]),e._v("来取状态。")]),e._v(" "),t("p",[e._v("那么为什么「恢复状态」之后还要「消费状态」呢？")]),e._v(" "),t("p",[e._v("这里笔者的结论是：存在「恢复状态后，还不能立即消费状态」的场景。因此谷歌在设计该Api的时候，把状态的消费单独分离出来，适配更多场景。")]),e._v(" "),t("blockquote",[t("p",[e._v("需要注意的是：消费状态必须要在状态保存发生之后，可以使用"),t("code",[e._v("SavedStateRegistry.isRestored")]),e._v("来判断，否则会异常。")])]),e._v(" "),t("h5",{attrs:{id:"_7-1-3-3、保存状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-3-3、保存状态"}},[e._v("#")]),e._v(" 7.1.3.3、保存状态")]),e._v(" "),t("p",[e._v("保存状态的代码也非常简洁，就是将"),t("code",[e._v("SavedStateRegistry")]),e._v("中的所有"),t("code",[e._v("SavedStateProvider")]),e._v("集中打包放到外部的bundle中。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(509),alt:"savedstate_26"}})]),e._v(" "),t("h4",{attrs:{id:"_7-1-4、savedstateregistrycontroller"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-4、savedstateregistrycontroller"}},[e._v("#")]),e._v(" 7.1.4、SavedStateRegistryController")]),e._v(" "),t("p",[e._v("这个类并没有什么特殊的，他只是"),t("code",[e._v("SavedStateRegistry")]),e._v("之间的包装类，结合"),t("code",[e._v("SavedStateRegistryOwner")]),e._v("做了一些生命周期上的工作，本质还是使用"),t("code",[e._v("performRestore(Bundle?)")]),e._v("和"),t("code",[e._v("performSave(Bundle?)")]),e._v("两个方法与"),t("code",[e._v("Registry")]),e._v("进行沟通：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(510),alt:"savedstate_27"}})]),e._v(" "),t("p",[e._v("因为Controller多了与生命周期的监听，因此实际开发中，直接使用"),t("code",[e._v("SavedStateRegistry")]),e._v("还是比较少的，大多数使用"),t("code",[e._v("SavedStateRegistryController")]),e._v("来间接控制。")]),e._v(" "),t("h4",{attrs:{id:"_7-1-5、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-5、总结"}},[e._v("#")]),e._v(" 7.1.5、总结")]),e._v(" "),t("p",[e._v("让我们重新回到这张图中，根据刚才的解析总结一下各组件的功能：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(406),alt:"savedstate_20"}})]),e._v(" "),t("ul",[t("li",[e._v("SavedStateRegistryOwner："),t("code",[e._v("SavedStateRegistry")]),e._v("的提供者。")]),e._v(" "),t("li",[e._v("StateRegistryController：间接控制"),t("code",[e._v("SavedStateRegistry")]),e._v("。")]),e._v(" "),t("li",[e._v("SavedStateRegistry：状态的管理者。")]),e._v(" "),t("li",[e._v("SavedStateProvider：状态的提供者。")])]),e._v(" "),t("h3",{attrs:{id:"_7-3、谷歌眼中的savedstate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3、谷歌眼中的savedstate"}},[e._v("#")]),e._v(" 7.3、谷歌眼中的SavedState")]),e._v(" "),t("p",[e._v("我们结合谷歌提供的AndroidX代码来理解一下SavedState库是如何被使用的。")]),e._v(" "),t("h4",{attrs:{id:"_7-3-1、componentdialog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-1、componentdialog"}},[e._v("#")]),e._v(" 7.3.1、ComponentDialog")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("ComponentDialog")]),e._v("中，存在着SavedState库的核心代码，我们抽取出来看看：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(511),alt:"savedstate_28"}})]),e._v(" "),t("p",[e._v("可见，该Dialog实现了"),t("code",[e._v("SavedStateRegistryOwner")]),e._v("接口，因此它可以对外提供"),t("code",[e._v("SavedStateRegistry")]),e._v("，上文中提到，由于"),t("code",[e._v("SavedStateController")]),e._v("包含的能力更多，因此都是直接使用"),t("code",[e._v("SavedStateController")]),e._v("来间接操控"),t("code",[e._v("SavedStateRegistry")]),e._v("。")]),e._v(" "),t("p",[e._v("在"),t("code",[e._v("onSaveInstanceState()")]),e._v("中，使用了Controller来保存状态，而在"),t("code",[e._v("onCreate(Bundle?)")]),e._v("方法中，使用了Controller来恢复状态。")]),e._v(" "),t("p",[e._v("还有一点值得注意的是，在"),t("code",[e._v("initViewTreeOwners()")]),e._v("方法中，将当前的"),t("code",[e._v("SavedStateRegistryOwner")]),e._v("绑定在了"),t("code",[e._v("Dialog")]),e._v("所在的"),t("code",[e._v("DecorView")]),e._v("中，这样给该"),t("code",[e._v("Dialog")]),e._v("下面的所有"),t("code",[e._v("View")]),e._v("提供了访问该"),t("code",[e._v("Dialog")]),e._v("的"),t("code",[e._v("SavedStateRegistry")]),e._v("的能力。")]),e._v(" "),t("blockquote",[t("p",[e._v("关于ViewTreeStateRegistryOwner的设计，在生命周期那一章已经简单阐述过类似的概念，不懂的读者可以回去阅读生命周期章。")])]),e._v(" "),t("h4",{attrs:{id:"_7-3-2、componentactivity"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-2、componentactivity"}},[e._v("#")]),e._v(" 7.3.2、ComponentActivity")]),e._v(" "),t("p",[e._v("同时我们再看看"),t("code",[e._v("ComponentActivity")]),e._v("，本质上和Dialog也相似，关键代码已经全部截取出来了，读者结合Dialog的代码自行领会即可。")]),e._v(" "),t("p",[t("code",[e._v("Fragment")]),e._v("的几乎也一样，这里就不展示了。")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(512),alt:"savedstate_29"}})]),e._v(" "),t("h2",{attrs:{id:"_8、savedstate的最佳实践-savedstatehandle"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8、savedstate的最佳实践-savedstatehandle"}},[e._v("#")]),e._v(" 8、SavedState的最佳实践——SavedStateHandle")]),e._v(" "),t("p",[e._v("那么开发中如何使用SavedState呢，实际上开发者并不需要在项目中亲自试用SavedState，例如在Activity中直接使用"),t("code",[e._v("SavedStateRegistry")]),e._v("，而是配合"),t("code",[e._v("ViewModel")]),e._v("与其配套的"),t("code",[e._v("SavedStateHandle")]),e._v("一起使用。")]),e._v(" "),t("p",[e._v("为什么会这样呢？因为直接在Activity、Fragment中声明变量已经不适合现代mvvm等开发模式了，而是将状态和逻辑写在"),t("code",[e._v("ViewModel")]),e._v("中，而"),t("code",[e._v("Activity")]),e._v("、"),t("code",[e._v("Fragment")]),e._v("等只做数据的订阅载体。")]),e._v(" "),t("p",[e._v("因此ViewModel就需要一种访问其组件上的缓存的状态的能力，这里就引出本篇文章的主角——"),t("code",[e._v("SavedStateHandle")]),e._v("，我们直接先看看它是如何被使用的吧：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(513),alt:"savedstate_30"}})]),e._v(" "),t("p",[e._v("只需要在ViewModel的构造函数中添加"),t("code",[e._v("SavedStateHandle")]),e._v("这个参数即可，开发者通过"),t("code",[e._v("SavedStateHandle")]),e._v("可以读取到"),t("code",[e._v("Activity")]),e._v("的"),t("code",[e._v("getIntent()")]),e._v("的值，亦或者是读取到"),t("code",[e._v("Fragment")]),e._v("的"),t("code",[e._v("getArguments()")]),e._v("的值。相反的，也可以通过"),t("code",[e._v("SavedStateHandle")]),e._v("往里面写入值。")]),e._v(" "),t("p",[e._v("这种用法有什么用呢？作用是两点：")]),e._v(" "),t("ol",[t("li",[e._v("读取"),t("code",[e._v("Activity")]),e._v("或者"),t("code",[e._v("Fragment")]),e._v("的入参。")]),e._v(" "),t("li",[e._v("写入与读取状态，这些状态可以被状态保存机制保存起来。")])]),e._v(" "),t("p",[e._v("第一点就不细说了，这个可以让"),t("code",[e._v("ViewModel")]),e._v("读取到当前所在组件的入参，做一些逻辑上的初始化工作。")]),e._v(" "),t("p",[e._v("这里重点是第二点，如果你了解"),t("code",[e._v("ViewModel")]),e._v("，那么你肯定知道"),t("code",[e._v("ViewModel")]),e._v("在配置更新导致的组件重建的时候，是不会销毁的，然而一旦遇到非配置更新导致的重建的情况（例如处于Stoped状态的"),t("code",[e._v("Activity")]),e._v("由于内存不足被系统回收），"),t("code",[e._v("ViewModel")]),e._v("就会被销毁了。")]),e._v(" "),t("p",[e._v("为了解决"),t("code",[e._v("ViewModel")]),e._v("在上述情况被销毁导致状态丢失的问题，开发者可以通过"),t("code",[e._v("SavedStateHandle")]),e._v("来写入和读取一些值，这个值会在发生状态保存的时候被写入到组件的Bundle中，并在组件组件重建的时候重新回到"),t("code",[e._v("SavedStateHandle")]),e._v("中，这让"),t("code",[e._v("ViewModel")]),e._v("拥有了读写状态的能力。")]),e._v(" "),t("h3",{attrs:{id:"_8-1、savedstatehandle如何做到的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-1、savedstatehandle如何做到的"}},[e._v("#")]),e._v(" 8.1、SavedStateHandle如何做到的")]),e._v(" "),t("p",[e._v("也许你一定很好奇"),t("code",[e._v("SavedStateHandle")]),e._v("是如何能够与"),t("code",[e._v("Activity")]),e._v("或者"),t("code",[e._v("Fragment")]),e._v("发生联系的，如果上述关于"),t("code",[e._v("ComponentActivity")]),e._v("等代码你还有印象，那么你肯定能猜到：")]),e._v(" "),t("blockquote",[t("p",[t("code",[e._v("SavedStateHandle")]),e._v("访问了组件的"),t("code",[e._v("SavedStateRegistry")]),e._v("，并在上面读取和写了状态。")])]),e._v(" "),t("p",[e._v("让我们通过代码来看看"),t("code",[e._v("SavedStateHandle")]),e._v("做了什么事：")]),e._v(" "),t("p",[e._v("首先，"),t("code",[e._v("ViewModel")]),e._v("的构建都是通过工厂类反射得到的，因此我们使用了一个带参的"),t("code",[e._v("ViewModel")]),e._v("，那么必定存在一个对应的工厂类，这个工厂类在SavedState库中已经实现好了：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(514),alt:"savedstate_31"}})]),e._v(" "),t("p",[e._v("可以看到，这个工厂类在构建方法中允许传入一个外部的"),t("code",[e._v("SavedStateRegistryOwner")]),e._v("来获取其"),t("code",[e._v("SavedStateRegistry")]),e._v("，同时还传入了一个defaultArgs，还记得上面说的吗？这个参数在"),t("code",[e._v("Activity")]),e._v("中是"),t("code",[e._v("getIntent().getExtras()")]),e._v("，在"),t("code",[e._v("Fragment")]),e._v("中是"),t("code",[e._v("getArguments()")]),e._v("。我们直接在"),t("code",[e._v("ComponentActivity")]),e._v("的代码中验证下：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(515),alt:"savedstate_32"}})]),e._v(" "),t("p",[e._v("验证成功，关于"),t("code",[e._v("Fragment")]),e._v("读者可以亲自验证下，同样是"),t("code",[e._v("getDefaultViewModelProviderFactory()")]),e._v("方法。")]),e._v(" "),t("p",[e._v("综上我们可以得出以下结论：")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("ViewModel")]),e._v("默认可以使用带"),t("code",[e._v("SaveStateHandle")]),e._v("的参数的构造函数，因为工厂方法已经默认提供了。")]),e._v(" "),t("li",[t("code",[e._v("SavedStateHandle")]),e._v("向"),t("code",[e._v("ViewModel")]),e._v("提供了读取组件入参、读取写入状态的能力。")]),e._v(" "),t("li",[t("code",[e._v("SavedStateHandle")]),e._v("的能力的基础源自工厂类拥有组件的"),t("code",[e._v("SaveStateRegistry")]),e._v("，因此"),t("code",[e._v("SavedStateHandle")]),e._v("被构建时同时也传入了组件的"),t("code",[e._v("SaveStateRegistry")]),e._v("。")])]),e._v(" "),t("p",[e._v("下面用一张图简单描述一下它们的关系：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"100%"},attrs:{src:v(516),alt:"savedstate_33"}})]),e._v(" "),t("h3",{attrs:{id:"_8-2、状态保存的思路转变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-2、状态保存的思路转变"}},[e._v("#")]),e._v(" 8.2、状态保存的思路转变")]),e._v(" "),t("p",[e._v("如果都通过"),t("code",[e._v("ViewModel")]),e._v("来保存业务中的状态，那么"),t("code",[e._v("View")]),e._v("又如何保存呢，毕竟"),t("code",[e._v("View")]),e._v("是没法直接访问"),t("code",[e._v("ViewModel")]),e._v("的，其实这陷入了一种思维的误区。")]),e._v(" "),t("p",[e._v("进入MVVM时代之后，开发者更聚焦于状态本身，通过改变状态来让UI自动发生响应，因此"),t("code",[e._v("View")]),e._v("本身的状态可以「上升」到"),t("code",[e._v("ViewModel")]),e._v("中，组件发生销毁之后，ViewModel仍可以安全的保存状态，因此重新走一遍订阅状态的流程又可以让"),t("code",[e._v("View")]),e._v("恢复状态了。")]),e._v(" "),t("p",[e._v("因此，并不是"),t("code",[e._v("View")]),e._v("不保存状态了，而是保存的位置迁移到了"),t("code",[e._v("ViewModel")]),e._v("。")]),e._v(" "),t("p",[e._v("这里用一张新的图来阐述这种变化：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"76%"},attrs:{src:v(517),alt:"savedstate_34"}})]),e._v(" "),t("h2",{attrs:{id:"_9、引入savedstatehandle后-状态保存走向何方"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9、引入savedstatehandle后-状态保存走向何方"}},[e._v("#")]),e._v(" 9、引入SavedStateHandle后，状态保存走向何方？")]),e._v(" "),t("p",[e._v("上文中提到，在引入MVVM开发思想以及对应的实现工具"),t("code",[e._v("ViewModel")]),e._v("之后，我们应该在"),t("code",[e._v("ViewModel")]),e._v("中结合"),t("code",[e._v("SavedStateHandle")]),e._v("来实现状态保存，但我们需要保存"),t("code",[e._v("ViewModel")]),e._v("中所有的属性吗？答案是不必要。")]),e._v(" "),t("p",[e._v("首先，基于"),t("code",[e._v("ViewModel")]),e._v("的视角去看一看"),t("code",[e._v("SavedStateHandle")]),e._v("：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(518),alt:"savedstate_35"}})]),e._v(" "),t("p",[e._v("可以看到ViewModel存在着两种类型的属性：")]),e._v(" "),t("ul",[t("li",[e._v("由SavedStateHandle直接管理的、ViewModel实例销毁时不会丢失的属性")]),e._v(" "),t("li",[e._v("直接编码在ViewModel自身的临时变量")])]),e._v(" "),t("p",[e._v("刚才提到，虽然开发者可以将一切变量都通过"),t("code",[e._v("SavedStateHandle")]),e._v("保存在状态中，避免"),t("code",[e._v("ViewModel")]),e._v("销毁后丢失，但是这是不必要的，为什么呢？下面从一个实际场景出发来解释下：")]),e._v(" "),t("p",[e._v("假设页面A是一个列表，页面入参是用户的ID，从网络中加载用户相关的推荐房间数据。")]),e._v(" "),t("p",[e._v("使用者进入到页面后，页面开始加载数据，同时使用者也在页面中勾选了一些筛选之类的选项。")]),e._v(" "),t("p",[e._v("紧接着使用者收到了来电，APP进入了后台，页面也随即进入Stoped状态。")]),e._v(" "),t("p",[e._v("不久之后，用户没有返回APP，而是使用了其他的APP，这导致了手机内存不足，原来的列表页面被"),t("strong",[e._v("系统回收")]),e._v("。")]),e._v(" "),t("p",[e._v("这个时候我们就要开始考虑哪些是需要保存的状态了：")]),e._v(" "),t("ul",[t("li",[e._v("对于入参ID，我们可以得知，所有入参是存在于Intent().getExtra()中的，在开发过程中不用担心这块数据因组件以外销毁而丢失。")]),e._v(" "),t("li",[e._v("对于筛选选项之类的，笔者认为这一块是需要保存的，最好使用"),t("code",[e._v("SavedStateHandle")]),e._v("处理一下。")]),e._v(" "),t("li",[e._v("对于加载的列表，笔者认为这一块是不需要保存的，如果长时间没有回来APP，即时性比较强的列表数据其实是没有恢复的必要，重新为用户加载一份并不是特别糟糕的体验。（注：个人观点，仍需要结合实际开发场景）")])]),e._v(" "),t("p",[e._v("下面用代码来复现上述这种场景：")]),e._v(" "),t("center",[t("img",{staticStyle:{zoom:"67%"},attrs:{src:v(519),alt:"savedstate_36"}})]),e._v(" "),t("p",[e._v("代码很多，但是并不复杂，我们分别从"),t("code",[e._v("Activity")]),e._v("和"),t("code",[e._v("ViewModel")]),e._v("两部分讲解：")]),e._v(" "),t("p",[t("strong",[e._v("Activity")]),e._v("：")]),e._v(" "),t("p",[e._v("定义了一个uid的Key值以及一个伴生方法，用于其他页面跳转到当前"),t("code",[e._v("Activity")]),e._v("时在"),t("code",[e._v("Intent")]),e._v("的Extras中附带一个用户id的参数；")]),e._v(" "),t("p",[e._v("添加了一个生命周期观察器，用于在进入Created时，调用"),t("code",[e._v("ViewModel")]),e._v("的方法去抓取数据。")]),e._v(" "),t("p",[t("strong",[e._v("ViewModel")]),e._v("：")]),e._v(" "),t("p",[e._v("使用"),t("code",[e._v("savedStateHandle")]),e._v("去读取"),t("code",[e._v("Activity")]),e._v("的Intent里面的Extra，用来获取用户id。")]),e._v(" "),t("p",[e._v("定义了一个userFilter的Key值，用于通过"),t("code",[e._v("savedStateHandle")]),e._v("去读写"),t("code",[e._v("Activity")]),e._v("的Intent，用于避免开启筛选的状态在重建组件时丢失；")]),e._v(" "),t("p",[e._v("定义了dataList用于缓存根据用户id请求的结果，但是此结果并不会保存在Intent中，因此会在组件因内存不足被系统销毁时丢失。")]),e._v(" "),t("p",[e._v("最后笔者还是要说一句，决定哪些数据需要保存哪些数据可以放弃，这个要视乎实际项目的需要。")]),e._v(" "),t("h2",{attrs:{id:"_10、总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_10、总结"}},[e._v("#")]),e._v(" 10、总结")]),e._v(" "),t("p",[e._v("本章中，我们从最古早的方法回调的方式了解如何保存与恢复状态，发现出许多旧版方式存在的缺陷，然后从SavedState库着手，以一种新的方式完成状态保存。可以看出近些年来谷歌在努力着手解决安卓整体框架的缺陷。")])],1)}),[],!1,null,null,null);t.default=a.exports}}]);