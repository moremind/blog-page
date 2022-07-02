(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{549:function(a,s,e){"use strict";e.r(s);var t=e(1),r=Object(t.a)({},(function(){var a=this,s=a.$createElement,e=a._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"_1-garbage-collect-垃圾回收"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-garbage-collect-垃圾回收"}},[a._v("#")]),a._v(" 1 Garbage Collect(垃圾回收)")]),a._v(" "),e("p",[a._v("GC Root:虚拟机栈中的本地变量、static成员、常量引用、本地方法栈[Thread C]中的变量")]),a._v(" "),e("p",[a._v("类加载器：如果它找到一条路线，能到到达某个对象，也不能称为垃圾。")]),a._v(" "),e("p",[a._v("Thread:Java进程(线程)")]),a._v(" "),e("h3",{attrs:{id:"_1-1-如何确定一个对象是垃圾"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-如何确定一个对象是垃圾"}},[a._v("#")]),a._v(" 1.1 如何确定一个对象是垃圾？")]),a._v(" "),e("h4",{attrs:{id:"_1-1-1-引用计数法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-引用计数法"}},[a._v("#")]),a._v(" 1.1.1 引用计数法")]),a._v(" "),e("p",[a._v("对于某个对象而言，只要应用程序中持有该对象的引用，就说明该对象不是垃圾，如果一个对象没有任 何指针对其 引用，它就是垃圾。")]),a._v(" "),e("blockquote",[e("p",[a._v("弊端 :如果AB相互持有引用，导致永远不能被回收。")])]),a._v(" "),e("h4",{attrs:{id:"_1-1-2-可达性分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-可达性分析"}},[a._v("#")]),a._v(" 1.1.2 可达性分析")]),a._v(" "),e("p",[a._v("通过GC Root的对象，开始向下寻找，看某个对象是否可达")]),a._v(" "),e("blockquote",[e("p",[a._v("能作为GC Root:类加载器、Thread、虚拟机栈的本地变量表、static成员、常量引用、本地方法 栈的变量等。")])]),a._v(" "),e("h3",{attrs:{id:"_1-2-垃圾收集算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-垃圾收集算法"}},[a._v("#")]),a._v(" 1.2 垃圾收集算法")]),a._v(" "),e("h4",{attrs:{id:"_1-2-1-标记-清除-mark-sweep"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-标记-清除-mark-sweep"}},[a._v("#")]),a._v(" 1.2.1 标记-清除(Mark-Sweep)")]),a._v(" "),e("ul",[e("li",[a._v("标记")])]),a._v(" "),e("p",[a._v("找出内存中需要回收的对象，并且把它们标记出来")]),a._v(" "),e("blockquote",[e("p",[a._v("此时堆中所有的对象都会被扫描一遍，从而才能确定需要回收的对象，比较耗时")])]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004158070.png",alt:"image-20220310004158070"}})]),a._v(" "),e("ul",[e("li",[a._v("清除")])]),a._v(" "),e("p",[a._v("清除掉被标记需要回收的对象，释放出对应的内存空间")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004225334.png",alt:"image-20220310004225334"}})]),a._v(" "),e("p",[a._v("缺点：")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。\n(1)标记和清除两个过程都比较耗时，效率不高\n(2)会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_1-2-2-复制-copying"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-复制-copying"}},[a._v("#")]),a._v(" 1.2.2 复制(Copying)")]),a._v(" "),e("p",[a._v("将内存划分为两块相等的区域，每次只使用其中一块，如下图所示：")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004419137.png",alt:"image-20220310004419137"}})]),a._v(" "),e("p",[a._v("当其中一块内存使用完了，就将还存活的对象复制到另外一块上面，然后把已经使用过的内存空间一次 清除掉。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004442121.png",alt:"image-20220310004442121"}})]),a._v(" "),e("p",[a._v("缺点: 空间利用率降低。")]),a._v(" "),e("h4",{attrs:{id:"_1-2-3-标记-整理-mark-compact"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-标记-整理-mark-compact"}},[a._v("#")]),a._v(" 1.2.3 标记-整理(Mark-Compact)")]),a._v(" "),e("p",[a._v('标记过程仍然与"标记-清除"算法一样，但是后续步骤不是直接对可回收对象进行清理，而是让所有存活 的对象都向一端移动，然后直接清理掉端边界以外的内存。')]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004604646.png",alt:"image-20220310004604646"}})]),a._v(" "),e("p",[a._v("让所有存活的对象都向一端移动，清理掉边界意外的内存。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004633487.png",alt:"image-20220310004633487"}})]),a._v(" "),e("h3",{attrs:{id:"_1-3-分代收集算法"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-分代收集算法"}},[a._v("#")]),a._v(" 1.3 分代收集算法")]),a._v(" "),e("p",[e("strong",[a._v("Young区：复制算法")]),a._v("(对象在被分配之后，可能生命周期比较短，Young区复制效率比较高)")]),a._v(" "),e("p",[e("strong",[a._v("Old区：标记清除或标记整理")]),a._v("(Old区对象存活时间比较长，复制来复制去没必要，不如做个标记再清理)")]),a._v(" "),e("h3",{attrs:{id:"_1-4-垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-垃圾收集器"}},[a._v("#")]),a._v(" 1.4 垃圾收集器")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004914409.png",alt:"image-20220310004914409"}})]),a._v(" "),e("h4",{attrs:{id:"_1-4-1-serial收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-1-serial收集器"}},[a._v("#")]),a._v(" 1.4.1 Serial收集器")]),a._v(" "),e("p",[a._v("Serial收集器是最基本、发展历史最悠久的收集器，曾经（在JDK1.3.1之前）是虚拟机新生代收集的唯 一选择。")]),a._v(" "),e("p",[a._v("它是一种单线程收集器，不仅仅意味着它只会使用一个CPU或者一条收集线程去完成垃圾收集工作，更 重要的是其在进行垃圾收集的时候需要暂停其他线程。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310204357425.png",alt:"image-20220310204357425"}})]),a._v(" "),e("h4",{attrs:{id:"_1-4-2-parnew收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-2-parnew收集器"}},[a._v("#")]),a._v(" 1.4.2 ParNew收集器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("优点：在多CPU时，比Serial效率高。\n缺点：收集过程暂停所有应用程序线程，单CPU时比Serial效率差。\n算法：复制算法\n适用范围：新生代\n应用：运行在Server模式下的虚拟机中首选的新生代收集器\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310204622369.png",alt:"image-20220310204622369"}})]),a._v(" "),e("h4",{attrs:{id:"_1-4-3-parallel-scavenge收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-3-parallel-scavenge收集器"}},[a._v("#")]),a._v(" 1.4.3 Parallel Scavenge收集器")]),a._v(" "),e("p",[a._v("Parallel Scavenge收集器是一个新生代收集器，它也是使用复制算法的收集器，又是并行的多线程收集 器，看上去和ParNew一样，但是"),e("strong",[a._v("Parallel Scanvenge更关注系统的吞吐量 。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("吞吐量=运行用户代码的时间/(运行用户代码的时间+垃圾收集时间)\n比如虚拟机总共运行了100分钟，垃圾收集时间用了1分钟，吞吐量=(100-1)/100=99%。\n若吞吐量越大，意味着垃圾收集的时间越短，则用户代码可以充分利用CPU资源，尽快完成程序的运算任务。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("-XX:MaxGCPauseMillis控制最大的垃圾收集停顿时间，\n-XX:GCTimeRatio直接设置吞吐量的大小。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"_1-4-4-serial-old收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-4-serial-old收集器"}},[a._v("#")]),a._v(" 1.4.4 Serial Old收集器")]),a._v(" "),e("p",[a._v("Serial Old收集器是Serial收集器的老年代版本，也是一个单线程收集器，不同的是"),e("strong",[a._v('采用"标记-整理算 法"')]),a._v("，运行过程和Serial收集器一样。")]),a._v(" "),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310205235758.png",alt:"image-20220310205235758"}})]),a._v(" "),e("h4",{attrs:{id:"_1-4-5-parallel-old收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-5-parallel-old收集器"}},[a._v("#")]),a._v(" 1.4.5 Parallel Old收集器")]),a._v(" "),e("p",[a._v("Parallel Old收集器是Parallel Scavenge收集器的老年代版本，"),e("strong",[a._v('使用多线程和"标记-整理算法"进行垃圾 回收。')])]),a._v(" "),e("h4",{attrs:{id:"_1-4-6-cms收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-6-cms收集器"}},[a._v("#")]),a._v(" 1.4.6 CMS收集器")]),a._v(" "),e("p",[e("strong",[a._v("CMS(Concurrent Mark Sweep)收集器是一种以获取最短回收停顿时间 为目标的收集器。")])]),a._v(" "),e("p",[a._v('采用的是"标记-清除算法",整个过程分为4步')]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("(1)初始标记 CMS initial mark \t\t标记GC Roots能关联到的对象 Stop The World---\x3e速度很快\n(2)并发标记 CMS concurrent mark \t进行GC Roots Tracing\n(3)重新标记 CMS remark \t\t\t\t修改并发标记因用户程序变动的内容 Stop The World\n4)并发清除 CMS concurrent sweep\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("blockquote",[e("p",[a._v("由于整个过程中，并发标记和并发清除，收集器线程可以与用户线程一起工作，所以总体上来 说，CMS收集器的内存回收过程是与用户线程一起并发地执行的。")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("优点：并发收集、低停顿\n缺点：产生大量空间碎片、并发阶段会降低吞吐量\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310210434471.png",alt:"image-20220310210434471"}})]),a._v(" "),e("h4",{attrs:{id:"_1-4-7-g1收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-7-g1收集器"}},[a._v("#")]),a._v(" 1.4.7 G1收集器")]),a._v(" "),e("ul",[e("li",[a._v("G1特点:")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("并行与并发\n分代收集（仍然保留了分代的概念）\n空间整合（整体上属于“标记-整理”算法，不会导致空间碎片）\n可预测的停顿（比CMS更先进的地方在于能让使用者明确指定一个长度为M毫秒的时间片段内，消耗在垃圾收集上的时间不得超过N毫秒）\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[a._v("使用G1收集器时，Java堆的内存布局与就与其他收集器有很大差别，它将整个Java堆划分为多个 大小相等的独立区域（Region），虽然还保留有新生代和老年代的概念，但新生代和老年代不再 是物理隔离的了，它们都是一部分Region（不需要连续）的集合。")]),a._v(" "),e("ul",[e("li",[a._v("工作过程分为以下几个阶段：")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("初始标记（Initial Marking） 标记一下GC Roots能够关联的对象，并且修改TAMS的值，需要暂停用户线程\n并发标记（Concurrent Marking） 从GC Roots进行可达性分析，找出存活的对象，与用户线程并发执行\n最终标记（Final Marking） 修正在并发标记阶段因为用户程序的并发执行导致变动的数据，需暂停用户线程\n筛选回收（Live Data Counting and Evacuation） 对各个Region的回收价值和成本进行排序，根据用户所期望的GC停顿时间制定回收计划\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br")])]),e("p",[e("img",{attrs:{src:"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310211903812.png",alt:"image-20220310211903812"}})]),a._v(" "),e("ul",[e("li",[a._v("判断是否需要使用G1收集器？")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("（1）50%以上的堆被存活对象占用\n（2）对象分配和晋升的速度变化非常大\n（3）垃圾回收时间比较长\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br")])]),e("h4",{attrs:{id:"_1-4-8-垃圾收集器分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-8-垃圾收集器分类"}},[a._v("#")]),a._v(" 1.4.8 垃圾收集器分类")]),a._v(" "),e("ul",[e("li",[a._v("串行收集器->Serial和Serial Old")])]),a._v(" "),e("p",[a._v("只能有一个垃圾回收线程执行，用户线程暂停。 适用于内存比较小的嵌入式设备 。")]),a._v(" "),e("ul",[e("li",[a._v("并行收集器[吞吐量优先]->Parallel Scanvenge、Parallel Old")])]),a._v(" "),e("p",[a._v("多条垃圾收集线程并行工作，但此时用户线程仍然处于等待状态。 适用于科学计算、后台处理等若交互场 景 。")]),a._v(" "),e("ul",[e("li",[a._v("并发收集器[停顿时间优先]->CMS、G1")])]),a._v(" "),e("p",[a._v("用户线程和垃圾收集线程同时执行(但并不一定是并行的，可能是交替执行的)，垃圾收集线程在执行的 时候不会停顿用户线程的运行。 适用于相对时间有要求的场景，比如Web 。")]),a._v(" "),e("h4",{attrs:{id:"_1-4-9-理解吞吐量和停顿时间"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-9-理解吞吐量和停顿时间"}},[a._v("#")]),a._v(" 1.4.9 理解吞吐量和停顿时间")]),a._v(" "),e("ul",[e("li",[a._v("停顿时间->垃圾收集器 进行 垃圾回收终端应用执行响应的时间")]),a._v(" "),e("li",[a._v("吞吐量->运行用户代码时间/(运行用户代码时间+垃圾收集时间)")])]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("停顿时间越短就越适合需要和用户交互的程序，良好的响应速度能提升用户体验；\n高吞吐量则可以高效地利用CPU时间，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的任务。\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br")])]),e("h4",{attrs:{id:"_1-4-10-如何选择合适的垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-10-如何选择合适的垃圾收集器"}},[a._v("#")]),a._v(" 1.4.10 如何选择合适的垃圾收集器")]),a._v(" "),e("p",[e("a",{attrs:{href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/collectors.html#sthref28",target:"_blank",rel:"noopener noreferrer"}},[a._v("Available Collectors (oracle.com)"),e("OutboundLink")],1)]),a._v(" "),e("ul",[e("li",[a._v("优先调整堆的大小让服务器自己来选择")]),a._v(" "),e("li",[a._v("如果内存小于100M，使用串行收集器")]),a._v(" "),e("li",[a._v("如果是单核，并且没有停顿时间要求，使用串行或JVM自己选")]),a._v(" "),e("li",[a._v("如果允许停顿时间超过1秒，选择并行或JVM自己选")]),a._v(" "),e("li",[a._v("如果响应时间最重要，并且不能超过1秒，使用并发收集器 G1收集")])]),a._v(" "),e("h4",{attrs:{id:"_1-4-11-如何开启需要的垃圾收集器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-11-如何开启需要的垃圾收集器"}},[a._v("#")]),a._v(" 1.4.11 如何开启需要的垃圾收集器")]),a._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("（1）串行\n    -XX：+UseSerialGC\n    -XX：+UseSerialOldGC\n（2）并行(吞吐量优先)：\n    -XX：+UseParallelGC\n    -XX：+UseParallelOldGC\n（3）并发收集器(响应时间优先)\n    -XX：+UseConcMarkSweepGC\n    -XX：+UseG1GC\n")])]),a._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[a._v("1")]),e("br"),e("span",{staticClass:"line-number"},[a._v("2")]),e("br"),e("span",{staticClass:"line-number"},[a._v("3")]),e("br"),e("span",{staticClass:"line-number"},[a._v("4")]),e("br"),e("span",{staticClass:"line-number"},[a._v("5")]),e("br"),e("span",{staticClass:"line-number"},[a._v("6")]),e("br"),e("span",{staticClass:"line-number"},[a._v("7")]),e("br"),e("span",{staticClass:"line-number"},[a._v("8")]),e("br"),e("span",{staticClass:"line-number"},[a._v("9")]),e("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);