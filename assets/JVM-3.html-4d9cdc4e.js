import{_ as n,W as l,X as d,Z as e,$ as r,a0 as s,a1 as a,C as t}from"./framework-a4c02b8f.js";const c={},o=a(`<h2 id="_1-garbage-collect-垃圾回收" tabindex="-1"><a class="header-anchor" href="#_1-garbage-collect-垃圾回收" aria-hidden="true">#</a> 1 Garbage Collect(垃圾回收)</h2><p>GC Root:虚拟机栈中的本地变量、static成员、常量引用、本地方法栈[Thread C]中的变量</p><p>类加载器：如果它找到一条路线，能到到达某个对象，也不能称为垃圾。</p><p>Thread:Java进程(线程)</p><h3 id="_1-1-如何确定一个对象是垃圾" tabindex="-1"><a class="header-anchor" href="#_1-1-如何确定一个对象是垃圾" aria-hidden="true">#</a> 1.1 如何确定一个对象是垃圾？</h3><h4 id="_1-1-1-引用计数法" tabindex="-1"><a class="header-anchor" href="#_1-1-1-引用计数法" aria-hidden="true">#</a> 1.1.1 引用计数法</h4><p>对于某个对象而言，只要应用程序中持有该对象的引用，就说明该对象不是垃圾，如果一个对象没有任 何指针对其 引用，它就是垃圾。</p><blockquote><p>弊端 :如果AB相互持有引用，导致永远不能被回收。</p></blockquote><h4 id="_1-1-2-可达性分析" tabindex="-1"><a class="header-anchor" href="#_1-1-2-可达性分析" aria-hidden="true">#</a> 1.1.2 可达性分析</h4><p>通过GC Root的对象，开始向下寻找，看某个对象是否可达</p><blockquote><p>能作为GC Root:类加载器、Thread、虚拟机栈的本地变量表、static成员、常量引用、本地方法 栈的变量等。</p></blockquote><h3 id="_1-2-垃圾收集算法" tabindex="-1"><a class="header-anchor" href="#_1-2-垃圾收集算法" aria-hidden="true">#</a> 1.2 垃圾收集算法</h3><h4 id="_1-2-1-标记-清除-mark-sweep" tabindex="-1"><a class="header-anchor" href="#_1-2-1-标记-清除-mark-sweep" aria-hidden="true">#</a> 1.2.1 标记-清除(Mark-Sweep)</h4><ul><li>标记</li></ul><p>找出内存中需要回收的对象，并且把它们标记出来</p><blockquote><p>此时堆中所有的对象都会被扫描一遍，从而才能确定需要回收的对象，比较耗时</p></blockquote><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004158070.png" alt="image-20220310004158070" tabindex="0" loading="lazy"><figcaption>image-20220310004158070</figcaption></figure><ul><li>清除</li></ul><p>清除掉被标记需要回收的对象，释放出对应的内存空间</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004225334.png" alt="image-20220310004225334" tabindex="0" loading="lazy"><figcaption>image-20220310004225334</figcaption></figure><p>缺点：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>标记清除之后会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。
(1)标记和清除两个过程都比较耗时，效率不高
(2)会产生大量不连续的内存碎片，空间碎片太多可能会导致以后在程序运行过程中需要分配较大对象时，无法找到足够的连续内存而不得不提前触发另一次垃圾收集动作。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-2-2-复制-copying" tabindex="-1"><a class="header-anchor" href="#_1-2-2-复制-copying" aria-hidden="true">#</a> 1.2.2 复制(Copying)</h4><p>将内存划分为两块相等的区域，每次只使用其中一块，如下图所示：</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/jvm-copy-alg.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当其中一块内存使用完了，就将还存活的对象复制到另外一块上面，然后把已经使用过的内存空间一次 清除掉。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004442121.png" alt="image-20220310004442121" tabindex="0" loading="lazy"><figcaption>image-20220310004442121</figcaption></figure><p>缺点: 空间利用率降低。</p><h4 id="_1-2-3-标记-整理-mark-compact" tabindex="-1"><a class="header-anchor" href="#_1-2-3-标记-整理-mark-compact" aria-hidden="true">#</a> 1.2.3 标记-整理(Mark-Compact)</h4><p>标记过程仍然与&quot;标记-清除&quot;算法一样，但是后续步骤不是直接对可回收对象进行清理，而是让所有存活 的对象都向一端移动，然后直接清理掉端边界以外的内存。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004604646.png" alt="image-20220310004604646" tabindex="0" loading="lazy"><figcaption>image-20220310004604646</figcaption></figure><p>让所有存活的对象都向一端移动，清理掉边界意外的内存。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/Mark-Compact-alg.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_1-3-分代收集算法" tabindex="-1"><a class="header-anchor" href="#_1-3-分代收集算法" aria-hidden="true">#</a> 1.3 分代收集算法</h3><p><strong>Young区：复制算法</strong>(对象在被分配之后，可能生命周期比较短，Young区复制效率比较高)</p><p><strong>Old区：标记清除或标记整理</strong>(Old区对象存活时间比较长，复制来复制去没必要，不如做个标记再清理)</p><h3 id="_1-4-垃圾收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-垃圾收集器" aria-hidden="true">#</a> 1.4 垃圾收集器</h3><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310004914409.png" alt="image-20220310004914409" tabindex="0" loading="lazy"><figcaption>image-20220310004914409</figcaption></figure><h4 id="_1-4-1-serial收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-1-serial收集器" aria-hidden="true">#</a> 1.4.1 Serial收集器</h4><p>Serial收集器是最基本、发展历史最悠久的收集器，曾经（在JDK1.3.1之前）是虚拟机新生代收集的唯 一选择。</p><p>它是一种单线程收集器，不仅仅意味着它只会使用一个CPU或者一条收集线程去完成垃圾收集工作，更 重要的是其在进行垃圾收集的时候需要暂停其他线程。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310204357425.png" alt="image-20220310204357425" tabindex="0" loading="lazy"><figcaption>image-20220310204357425</figcaption></figure><h4 id="_1-4-2-parnew收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-2-parnew收集器" aria-hidden="true">#</a> 1.4.2 ParNew收集器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>优点：在多CPU时，比Serial效率高。
缺点：收集过程暂停所有应用程序线程，单CPU时比Serial效率差。
算法：复制算法
适用范围：新生代
应用：运行在Server模式下的虚拟机中首选的新生代收集器
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/ParNew-gc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="_1-4-3-parallel-scavenge收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-3-parallel-scavenge收集器" aria-hidden="true">#</a> 1.4.3 Parallel Scavenge收集器</h4><p>Parallel Scavenge收集器是一个新生代收集器，它也是使用复制算法的收集器，又是并行的多线程收集 器，看上去和ParNew一样，但是<strong>Parallel Scanvenge更关注系统的吞吐量 。</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>吞吐量=运行用户代码的时间/(运行用户代码的时间+垃圾收集时间)
比如虚拟机总共运行了100分钟，垃圾收集时间用了1分钟，吞吐量=(100-1)/100=99%。
若吞吐量越大，意味着垃圾收集的时间越短，则用户代码可以充分利用CPU资源，尽快完成程序的运算任务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>-XX:MaxGCPauseMillis控制最大的垃圾收集停顿时间，
-XX:GCTimeRatio直接设置吞吐量的大小。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-4-serial-old收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-4-serial-old收集器" aria-hidden="true">#</a> 1.4.4 Serial Old收集器</h4><p>Serial Old收集器是Serial收集器的老年代版本，也是一个单线程收集器，不同的是<strong>采用&quot;标记-整理算 法&quot;</strong>，运行过程和Serial收集器一样。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310205235758.png" alt="image-20220310205235758" tabindex="0" loading="lazy"><figcaption>image-20220310205235758</figcaption></figure><h4 id="_1-4-5-parallel-old收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-5-parallel-old收集器" aria-hidden="true">#</a> 1.4.5 Parallel Old收集器</h4><p>Parallel Old收集器是Parallel Scavenge收集器的老年代版本，<strong>使用多线程和&quot;标记-整理算法&quot;进行垃圾 回收。</strong></p><h4 id="_1-4-6-cms收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-6-cms收集器" aria-hidden="true">#</a> 1.4.6 CMS收集器</h4><p><strong>CMS(Concurrent Mark Sweep)收集器是一种以获取最短回收停顿时间 为目标的收集器。</strong></p><p>采用的是&quot;标记-清除算法&quot;,整个过程分为4步</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(1)初始标记 CMS initial mark 		标记GC Roots能关联到的对象 Stop The World---&gt;速度很快
(2)并发标记 CMS concurrent mark 	进行GC Roots Tracing
(3)重新标记 CMS remark 				修改并发标记因用户程序变动的内容 Stop The World
4)并发清除 CMS concurrent sweep
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>由于整个过程中，并发标记和并发清除，收集器线程可以与用户线程一起工作，所以总体上来 说，CMS收集器的内存回收过程是与用户线程一起并发地执行的。</p></blockquote><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>优点：并发收集、低停顿
缺点：产生大量空间碎片、并发阶段会降低吞吐量
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310210434471.png" alt="image-20220310210434471" tabindex="0" loading="lazy"><figcaption>image-20220310210434471</figcaption></figure><h4 id="_1-4-7-g1收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-7-g1收集器" aria-hidden="true">#</a> 1.4.7 G1收集器</h4><ul><li>G1特点:</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>并行与并发
分代收集（仍然保留了分代的概念）
空间整合（整体上属于“标记-整理”算法，不会导致空间碎片）
可预测的停顿（比CMS更先进的地方在于能让使用者明确指定一个长度为M毫秒的时间片段内，消耗在垃圾收集上的时间不得超过N毫秒）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用G1收集器时，Java堆的内存布局与就与其他收集器有很大差别，它将整个Java堆划分为多个 大小相等的独立区域（Region），虽然还保留有新生代和老年代的概念，但新生代和老年代不再 是物理隔离的了，它们都是一部分Region（不需要连续）的集合。</p><ul><li>工作过程分为以下几个阶段：</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>初始标记（Initial Marking） 标记一下GC Roots能够关联的对象，并且修改TAMS的值，需要暂停用户线程
并发标记（Concurrent Marking） 从GC Roots进行可达性分析，找出存活的对象，与用户线程并发执行
最终标记（Final Marking） 修正在并发标记阶段因为用户程序的并发执行导致变动的数据，需暂停用户线程
筛选回收（Live Data Counting and Evacuation） 对各个Region的回收价值和成本进行排序，根据用户所期望的GC停顿时间制定回收计划
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/G1-gc.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>判断是否需要使用G1收集器？</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）50%以上的堆被存活对象占用
（2）对象分配和晋升的速度变化非常大
（3）垃圾回收时间比较长
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-8-垃圾收集器分类" tabindex="-1"><a class="header-anchor" href="#_1-4-8-垃圾收集器分类" aria-hidden="true">#</a> 1.4.8 垃圾收集器分类</h4><ul><li>串行收集器-&gt;Serial和Serial Old</li></ul><p>只能有一个垃圾回收线程执行，用户线程暂停。 适用于内存比较小的嵌入式设备 。</p><ul><li>并行收集器[吞吐量优先]-&gt;Parallel Scanvenge、Parallel Old</li></ul><p>多条垃圾收集线程并行工作，但此时用户线程仍然处于等待状态。 适用于科学计算、后台处理等若交互场 景 。</p><ul><li>并发收集器[停顿时间优先]-&gt;CMS、G1</li></ul><p>用户线程和垃圾收集线程同时执行(但并不一定是并行的，可能是交替执行的)，垃圾收集线程在执行的 时候不会停顿用户线程的运行。 适用于相对时间有要求的场景，比如Web 。</p><h4 id="_1-4-9-理解吞吐量和停顿时间" tabindex="-1"><a class="header-anchor" href="#_1-4-9-理解吞吐量和停顿时间" aria-hidden="true">#</a> 1.4.9 理解吞吐量和停顿时间</h4><ul><li>停顿时间-&gt;垃圾收集器 进行 垃圾回收终端应用执行响应的时间</li><li>吞吐量-&gt;运行用户代码时间/(运行用户代码时间+垃圾收集时间)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>停顿时间越短就越适合需要和用户交互的程序，良好的响应速度能提升用户体验；
高吞吐量则可以高效地利用CPU时间，尽快完成程序的运算任务，主要适合在后台运算而不需要太多交互的任务。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_1-4-10-如何选择合适的垃圾收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-10-如何选择合适的垃圾收集器" aria-hidden="true">#</a> 1.4.10 如何选择合适的垃圾收集器</h4>`,81),g={href:"https://docs.oracle.com/javase/8/docs/technotes/guides/vm/gctuning/collectors.html#sthref28",target:"_blank",rel:"noopener noreferrer"},u=a(`<ul><li>优先调整堆的大小让服务器自己来选择</li><li>如果内存小于100M，使用串行收集器</li><li>如果是单核，并且没有停顿时间要求，使用串行或JVM自己选</li><li>如果允许停顿时间超过1秒，选择并行或JVM自己选</li><li>如果响应时间最重要，并且不能超过1秒，使用并发收集器 G1收集</li></ul><h4 id="_1-4-11-如何开启需要的垃圾收集器" tabindex="-1"><a class="header-anchor" href="#_1-4-11-如何开启需要的垃圾收集器" aria-hidden="true">#</a> 1.4.11 如何开启需要的垃圾收集器</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>（1）串行
    -XX：+UseSerialGC
    -XX：+UseSerialOldGC
（2）并行(吞吐量优先)：
    -XX：+UseParallelGC
    -XX：+UseParallelOldGC
（3）并发收集器(响应时间优先)
    -XX：+UseConcMarkSweepGC
    -XX：+UseG1GC
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function h(m,p){const i=t("ExternalLinkIcon");return l(),d("div",null,[o,e("p",null,[e("a",g,[r("Available Collectors (oracle.com)"),s(i)])]),u])}const b=n(c,[["render",h],["__file","JVM-3.html.vue"]]);export{b as default};
