const e=JSON.parse(`{"key":"v-0e779d90","path":"/md/java/jvm/JVM-1.html","title":"JVM前奏-JVM堆栈内存简析","lang":"en-US","frontmatter":{"author":"finen","post":true,"copyright":true,"comments":true,"title":"JVM前奏-JVM堆栈内存简析","date":"2021-04-16T00:00:00.000Z","category":["JVM"],"tag":["JVM"],"description":"1 官网 image-20220310000943157","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://www.moremind.cn/zh/md/java/jvm/JVM-1.html"}],["meta",{"property":"og:url","content":"https://www.moremind.cn/md/java/jvm/JVM-1.html"}],["meta",{"property":"og:site_name","content":"Moremind's Blog"}],["meta",{"property":"og:title","content":"JVM前奏-JVM堆栈内存简析"}],["meta",{"property":"og:description","content":"1 官网 image-20220310000943157"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-21T06:09:44.000Z"}],["meta",{"property":"article:author","content":"finen"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2021-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-21T06:09:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM前奏-JVM堆栈内存简析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-21T06:09:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"finen\\"}]}"]]},"headers":[{"level":2,"title":"1 官网","slug":"_1-官网","link":"#_1-官网","children":[{"level":3,"title":"1.1 JDK8","slug":"_1-1-jdk8","link":"#_1-1-jdk8","children":[]},{"level":3,"title":"1.2 The relation of JDK/JRE/JVM","slug":"_1-2-the-relation-of-jdk-jre-jvm","link":"#_1-2-the-relation-of-jdk-jre-jvm","children":[]}]},{"level":2,"title":"2 源码到类文件","slug":"_2-源码到类文件","link":"#_2-源码到类文件","children":[{"level":3,"title":"2.1 源码","slug":"_2-1-源码","link":"#_2-1-源码","children":[]},{"level":3,"title":"2.2 编译过程","slug":"_2-2-编译过程","link":"#_2-2-编译过程","children":[]},{"level":3,"title":"2.3 类文件(Class文件)","slug":"_2-3-类文件-class文件","link":"#_2-3-类文件-class文件","children":[]}]},{"level":2,"title":"3 类文件到虚拟机(类加载机制)","slug":"_3-类文件到虚拟机-类加载机制","link":"#_3-类文件到虚拟机-类加载机制","children":[{"level":3,"title":"3.1 装载(Load)","slug":"_3-1-装载-load","link":"#_3-1-装载-load","children":[]},{"level":3,"title":"3.2 链接(Link)","slug":"_3-2-链接-link","link":"#_3-2-链接-link","children":[]},{"level":3,"title":"3.3 初始化(Initialize)","slug":"_3-3-初始化-initialize","link":"#_3-3-初始化-initialize","children":[]},{"level":3,"title":"3.4 类加载机制图解","slug":"_3-4-类加载机制图解","link":"#_3-4-类加载机制图解","children":[]}]},{"level":2,"title":"4 类装载器ClassLoader","slug":"_4-类装载器classloader","link":"#_4-类装载器classloader","children":[{"level":3,"title":"4.1 分类","slug":"_4-1-分类","link":"#_4-1-分类","children":[]},{"level":3,"title":"4.2 图解","slug":"_4-2-图解","link":"#_4-2-图解","children":[]},{"level":3,"title":"4.3 加载原则","slug":"_4-3-加载原则","link":"#_4-3-加载原则","children":[]}]},{"level":2,"title":"5 运行时数据区(Run-Time Data Areas)","slug":"_5-运行时数据区-run-time-data-areas","link":"#_5-运行时数据区-run-time-data-areas","children":[{"level":3,"title":"5.1 官网概括","slug":"_5-1-官网概括","link":"#_5-1-官网概括","children":[]},{"level":3,"title":"5.2 图解","slug":"_5-2-图解","link":"#_5-2-图解","children":[]},{"level":3,"title":"5.3 常规理解","slug":"_5-3-常规理解","link":"#_5-3-常规理解","children":[]}]}],"git":{"createdTime":1679378984000,"updatedTime":1679378984000,"contributors":[{"name":"moremind","email":"hefengen@apache.org","commits":1}]},"readingTime":{"minutes":12.69,"words":3807},"filePathRelative":"md/java/jvm/JVM-1.md","localizedDate":"April 16, 2021","excerpt":"<h2> 1 官网</h2>\\n<figure><img src=\\"https://new-blog-1251602255.cos.ap-shanghai.myqcloud.com/img/image-20220310000943157.png\\" alt=\\"image-20220310000943157\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220310000943157</figcaption></figure>","autoDesc":true}`);export{e as data};
