import{_ as o,W as s,X as d,Z as e,$ as a,a0 as t,a1 as n,C as r}from"./framework-a4c02b8f.js";const h={},c=n('<h1 id="java-字节码反编译成汇编" tabindex="-1"><a class="header-anchor" href="#java-字节码反编译成汇编" aria-hidden="true">#</a> Java 字节码反编译成汇编</h1><blockquote><p>本位以windows环境为前提，JDK版本为Oracle Sun JDK8-64位</p></blockquote><h2 id="hsdis环境准备" tabindex="-1"><a class="header-anchor" href="#hsdis环境准备" aria-hidden="true">#</a> Hsdis环境准备</h2><h3 id="_1-下载hsdis-amd64-dylib" tabindex="-1"><a class="header-anchor" href="#_1-下载hsdis-amd64-dylib" aria-hidden="true">#</a> 1.下载hsdis-amd64.dylib</h3>',4),l={href:"https://github.com/evolvedmicrobe/benchmarks/blob/master/hsdis-amd64.dylib",target:"_blank",rel:"noopener noreferrer"},p=e("h3",{id:"_2-下载hsdis-amd64-dll",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-下载hsdis-amd64-dll","aria-hidden":"true"},"#"),a(" 2.下载hsdis-amd64.dll")],-1),g={href:"https://github.com/atzhangsan/file_loaded",target:"_blank",rel:"noopener noreferrer"},m=n('<h3 id="_3-配置hsdis-amd64-dylib和hsdis-amd64-dll" tabindex="-1"><a class="header-anchor" href="#_3-配置hsdis-amd64-dylib和hsdis-amd64-dll" aria-hidden="true">#</a> 3.配置hsdis-amd64.dylib和hsdis-amd64.dll</h3><p>a.将下载好的hsdis-amd64.dll文件放置在JDK路径下<code>\\jre\\bin</code>目录下。</p><blockquote><p>e.g. C:\\Program Files\\Java\\jdk1.8.0_161\\jre\\bin</p></blockquote><p>b.将下载好的hsdis-amd64.dylib文件放置在JDK路径下的<code>\\jre\\lib</code>目录下。</p><blockquote><p>e.g. C:\\Program Files\\Java\\jdk1.8.0_161\\jre\\lib</p></blockquote><h3 id="_4-测试验证是否配置成功" tabindex="-1"><a class="header-anchor" href="#_4-测试验证是否配置成功" aria-hidden="true">#</a> 4.测试验证是否配置成功</h3><p>使用命令<code>java -XX:+UnlockDiagnosticVMOptions -XX:+PrintAssembly -version</code>验证是否配置成功。如果出现如下所示则说明配置成功。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414230849483.png" alt="image-20210414230849483" tabindex="0" loading="lazy"><figcaption>image-20210414230849483</figcaption></figure><h3 id="_5-自行构建hsdis-如果你有兴趣的话" tabindex="-1"><a class="header-anchor" href="#_5-自行构建hsdis-如果你有兴趣的话" aria-hidden="true">#</a> 5.自行构建hsdis(如果你有兴趣的话)</h3><p>如果你有兴趣自行编译hsdis的话，可以参考如下的几个链接，然后把编译好的文件放在jdk的jre目录下的如上所<code>3</code>述路径。</p>',10),b={href:"http://www.chrisnewland.com/building-hsdis-on-linux-amd64-on-debian-369",target:"_blank",rel:"noopener noreferrer"},u={href:"http://psy-lob-saw.blogspot.com/2013/01/java-print-assembly.html",target:"_blank",rel:"noopener noreferrer"},_=e("h2",{id:"jitwatch环境",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#jitwatch环境","aria-hidden":"true"},"#"),a(" JITWatch环境")],-1),f=e("h3",{id:"_1-下载jitwatch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-下载jitwatch","aria-hidden":"true"},"#"),a(" 1.下载JITWatch")],-1),w={href:"https://github.com/AdoptOpenJDK/jitwatch/releases",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"如果你有兴趣的话，当然也可以参考官方文档进行编译。",-1),j=e("p",null,"JITWatch链接如下：",-1),k={href:"https://github.com/AdoptOpenJDK/jitwatch",target:"_blank",rel:"noopener noreferrer"},x=n(`<p>编译命令如下：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ant编译：
ant clean compile <span class="token builtin class-name">test</span> run
maven编译：
mvn clean compile <span class="token builtin class-name">test</span> exec:java
gradle编译：
gradlew clean build run
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-配置运行jitwatch" tabindex="-1"><a class="header-anchor" href="#_2-配置运行jitwatch" aria-hidden="true">#</a> 2.配置运行JITWatch</h3><p>a.启动，使用<code>java -jar jitwatch-ui-1.4.0-shaded-win.jar</code>启动jitwatch，启动成功后如下所示</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414232505669.png" alt="image-20210414232505669" tabindex="0" loading="lazy"><figcaption>image-20210414232505669</figcaption></figure><p>b.配置，点击<code>sandbox</code>按钮打开窗口，再点击<code>Configure Sandbox</code>按钮，配置如下几个参数</p><blockquote><p>1.java classes目录</p><p>2.java 运行目录为你本地的配置使用的JDK路径</p><p>3.java运行参数，添加hsdis的运行参数配置</p></blockquote><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414233652204.png" alt="image-20210414233652204" tabindex="0" loading="lazy"><figcaption>image-20210414233652204</figcaption></figure><p>c.运行，点击<code>open</code>按钮打开需要编译的java代码，点击<code>Run</code>按钮运行得到下图所示</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414232726380.png" alt="image-20210414232726380" tabindex="0" loading="lazy"><figcaption>image-20210414232726380</figcaption></figure><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414234418226.png" alt="image-20210414234418226" tabindex="0" loading="lazy"><figcaption>image-20210414234418226</figcaption></figure><h3 id="_3-jitwatch简单使用" tabindex="-1"><a class="header-anchor" href="#_3-jitwatch简单使用" aria-hidden="true">#</a> 3.JITwatch简单使用</h3><h4 id="模块化查看字节码和汇编码" tabindex="-1"><a class="header-anchor" href="#模块化查看字节码和汇编码" aria-hidden="true">#</a> 模块化查看字节码和汇编码</h4><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414234700267.png" alt="image-20210414234700267" tabindex="0" loading="lazy"><figcaption>image-20210414234700267</figcaption></figure><h4 id="使用toplist查看资源占用率" tabindex="-1"><a class="header-anchor" href="#使用toplist查看资源占用率" aria-hidden="true">#</a> 使用topList查看资源占用率</h4><p>在JITWatch窗口点击<code>TopList</code>按钮，即可查看资源占用率。</p><figure><img src="https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20210414235239556.png" alt="image-20210414235239556" tabindex="0" loading="lazy"><figcaption>image-20210414235239556</figcaption></figure><h4 id="更多资料" tabindex="-1"><a class="header-anchor" href="#更多资料" aria-hidden="true">#</a> 更多资料</h4>`,18),y={href:"https://www.chrisnewland.com/images/jitwatch/HotSpot_Profiling_Using_JITWatch.pdf",target:"_blank",rel:"noopener noreferrer"},J={href:"https://github.com/AdoptOpenJDK/jitwatch/wiki",target:"_blank",rel:"noopener noreferrer"},q=e("h2",{id:"参考文章",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考文章","aria-hidden":"true"},"#"),a(" 参考文章")],-1),D={href:"https://blog.csdn.net/hengyunabc/article/details/26898657",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/AdoptOpenJDK/jitwatch/wiki",target:"_blank",rel:"noopener noreferrer"},K={href:"https://cloud.tencent.com/developer/support-plan?invite_code=17nuh698omdi4",target:"_blank",rel:"noopener noreferrer"};function T(W,O){const i=r("ExternalLinkIcon");return s(),d("div",null,[c,e("blockquote",null,[e("p",null,[a("下载地址如下："),e("a",l,[a("https://github.com/evolvedmicrobe/benchmarks/blob/master/hsdis-amd64.dylib"),t(i)])])]),p,e("blockquote",null,[e("p",null,[a("下载地址如下："),e("a",g,[a("https://github.com/atzhangsan/file_loaded"),t(i)])])]),m,e("p",null,[a("1."),e("a",b,[a("http://www.chrisnewland.com/building-hsdis-on-linux-amd64-on-debian-369"),t(i)])]),e("p",null,[a("2."),e("a",u,[a("http://psy-lob-saw.blogspot.com/2013/01/java-print-assembly.html"),t(i)])]),_,f,e("blockquote",null,[e("p",null,[a("下载路径如下："),e("a",w,[a("https://github.com/AdoptOpenJDK/jitwatch/releases"),t(i)])])]),v,j,e("blockquote",null,[e("p",null,[e("a",k,[a("https://github.com/AdoptOpenJDK/jitwatch"),t(i)])])]),x,e("p",null,[a("1."),e("a",y,[a("https://www.chrisnewland.com/images/jitwatch/HotSpot_Profiling_Using_JITWatch.pdf"),t(i)])]),e("p",null,[a("2."),e("a",J,[a("https://github.com/AdoptOpenJDK/jitwatch/wiki"),t(i)])]),q,e("p",null,[a("1.利用hsdis和JITWatch查看分析HotSpot JIT compiler生成的汇编代码."),e("a",D,[a("https://blog.csdn.net/hengyunabc/article/details/26898657"),t(i)])]),e("p",null,[a("2.JITWatch Wiki."),e("a",I,[a("https://github.com/AdoptOpenJDK/jitwatch/wiki"),t(i)])]),e("blockquote",null,[e("p",null,[a("我的博客即将同步至腾讯云+社区，邀请大家一同入驻："),e("a",K,[a("https://cloud.tencent.com/developer/support-plan?invite_code=17nuh698omdi4"),t(i)])])])])}const A=o(h,[["render",T],["__file","java-jitwatch.html.vue"]]);export{A as default};
