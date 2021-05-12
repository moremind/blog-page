/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "c01c8820be6cdd2e09b2633e764426fa"
  },
  {
    "url": "about/index.html",
    "revision": "9fbc58b89c364328d11f34b2d37fbac6"
  },
  {
    "url": "archives/index.html",
    "revision": "09e1ed8f324a36fa90a4c2c258e6301b"
  },
  {
    "url": "assets/css/0.styles.331bc503.css",
    "revision": "3a0b73319a40162bf882816a833751d6"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.af5e15a9.js",
    "revision": "0ce59bc7e0d1c8b5dde3eb6034a5e407"
  },
  {
    "url": "assets/js/10.3d57a2e0.js",
    "revision": "9858edf8b9b443af3c315a9711464d5a"
  },
  {
    "url": "assets/js/11.32858d9c.js",
    "revision": "9e41f497e1dd54a1c8fe9112c1f9ebec"
  },
  {
    "url": "assets/js/12.cef9d203.js",
    "revision": "bacf4dd0f3e93cfdb7bc6fb6ac9b3feb"
  },
  {
    "url": "assets/js/13.02beb1f0.js",
    "revision": "e26dd26aa61f02519466fe2e5278a694"
  },
  {
    "url": "assets/js/14.7efc03c9.js",
    "revision": "3bbe441cc5195b8c5d24cac9452558bd"
  },
  {
    "url": "assets/js/15.6bbbab3f.js",
    "revision": "e65e285db26076ac0b88d5d5a87a7235"
  },
  {
    "url": "assets/js/16.f90edb71.js",
    "revision": "2928b69c5693e98c69766ee1250aa0af"
  },
  {
    "url": "assets/js/17.0d4d6c13.js",
    "revision": "0329487da3232e5298f92013bb761335"
  },
  {
    "url": "assets/js/18.76dd8979.js",
    "revision": "cf0d4b442d754bdfdef642df9417c190"
  },
  {
    "url": "assets/js/19.7da82e6f.js",
    "revision": "145836854f6b99b3d1734fb889630bb6"
  },
  {
    "url": "assets/js/20.55ee1642.js",
    "revision": "a7af8d26565d7ec069089ec0234e3cb9"
  },
  {
    "url": "assets/js/21.088a02d1.js",
    "revision": "f3a10d42ab4e68705bb9cba53652a065"
  },
  {
    "url": "assets/js/22.73d5a697.js",
    "revision": "ad5fb00a01543f07bb60a7718a3b4435"
  },
  {
    "url": "assets/js/23.829e24c3.js",
    "revision": "40a0f32ca2e8405ce5ef6176663634bb"
  },
  {
    "url": "assets/js/24.2f258433.js",
    "revision": "681345ce9fe7081fdc861cef67d74fc8"
  },
  {
    "url": "assets/js/25.0a52df22.js",
    "revision": "ad6cd7345f631fe9fc656d3e3e9fc7e7"
  },
  {
    "url": "assets/js/26.1c66cc2f.js",
    "revision": "f4941f04c15531018072d27c6caa13d0"
  },
  {
    "url": "assets/js/27.aa781144.js",
    "revision": "385c2e9ff6d2e2f027a1d69954ec3cb8"
  },
  {
    "url": "assets/js/28.b2cf7947.js",
    "revision": "fb385b0a543d78654ac2f09e4fd8ef12"
  },
  {
    "url": "assets/js/29.b61b1598.js",
    "revision": "52a87a98a9e3514ebcffa33aaa398370"
  },
  {
    "url": "assets/js/3.655fda8f.js",
    "revision": "3416ff54f706cb3e17cb17063f7e967a"
  },
  {
    "url": "assets/js/30.ba0ae8b1.js",
    "revision": "99af92a55840232f340ac04230588be9"
  },
  {
    "url": "assets/js/31.7637d043.js",
    "revision": "2d9699e14f9828ab450ecbd9bf1868d6"
  },
  {
    "url": "assets/js/32.e552a016.js",
    "revision": "61377c19003d18fb45ef093b66cf6aeb"
  },
  {
    "url": "assets/js/33.334376b0.js",
    "revision": "fecea4906870823c6c98dfc3d9da81da"
  },
  {
    "url": "assets/js/34.08c95f99.js",
    "revision": "8698e16f4ca29850e683319d9f9e9fc5"
  },
  {
    "url": "assets/js/35.76b6b95d.js",
    "revision": "d15a366b9c99ce765ac6fcdf06c9ca6d"
  },
  {
    "url": "assets/js/36.539b6d80.js",
    "revision": "c9fc6885db6f5fb6c6584faa7a1be01d"
  },
  {
    "url": "assets/js/37.850783a5.js",
    "revision": "4852bcbe83a7e964e57f277977dfbac8"
  },
  {
    "url": "assets/js/38.06c33708.js",
    "revision": "95440c341d1810ae30f71a260d98f610"
  },
  {
    "url": "assets/js/39.85fc61d5.js",
    "revision": "172c8537b487cc0a75bee5a41c276060"
  },
  {
    "url": "assets/js/4.12c21fd1.js",
    "revision": "922df52f78746e56fd923ded429fb1df"
  },
  {
    "url": "assets/js/40.cdc93796.js",
    "revision": "d4fb4f5183bfb045e04ce42e65638c9e"
  },
  {
    "url": "assets/js/41.be79357e.js",
    "revision": "6077d38d66c6dfc99136ebfa950be765"
  },
  {
    "url": "assets/js/42.e1ea76e5.js",
    "revision": "ebb3938ab96618992786934984d38a8f"
  },
  {
    "url": "assets/js/43.06bf748b.js",
    "revision": "c63de46a074ef75ebbe0eacda554450b"
  },
  {
    "url": "assets/js/44.ebd514b5.js",
    "revision": "d4baf6441280f16733542b1be271ade6"
  },
  {
    "url": "assets/js/45.12908515.js",
    "revision": "dfed0a9228863ae835928011619a3df3"
  },
  {
    "url": "assets/js/46.78fb0130.js",
    "revision": "c87fd61edeaad21da969bba0a2508a13"
  },
  {
    "url": "assets/js/47.1a3b6cfd.js",
    "revision": "004ecd204076c65bc05e4fe4336a0d00"
  },
  {
    "url": "assets/js/48.ef04cdb5.js",
    "revision": "9e9fbca2b8ad401de78c5d574f789a8b"
  },
  {
    "url": "assets/js/49.763fd944.js",
    "revision": "9aa18ec118855d0a8e968db37a4a5783"
  },
  {
    "url": "assets/js/5.e50a6b6f.js",
    "revision": "5bd5c9931c3026fe2cac6e1d5691e9f8"
  },
  {
    "url": "assets/js/50.c8a7a24d.js",
    "revision": "a299d8b23ed20edf8fa035b3f9e59518"
  },
  {
    "url": "assets/js/51.aaa9e6c7.js",
    "revision": "72fa9167f1de81ef44db4e176dff6bbc"
  },
  {
    "url": "assets/js/52.7d3a85df.js",
    "revision": "9de00fcd1216084f70164cb03743f05d"
  },
  {
    "url": "assets/js/53.00784a7d.js",
    "revision": "93982cbde77d1657577131456800e47e"
  },
  {
    "url": "assets/js/54.bd3845dd.js",
    "revision": "d28658d81800fd8022e289816cda47a9"
  },
  {
    "url": "assets/js/55.10a67e4b.js",
    "revision": "4a63d59368cfd3af19d5de0038d91af8"
  },
  {
    "url": "assets/js/56.eb909b5a.js",
    "revision": "dd5802aef81f6b95d7f3cdd77d8c8304"
  },
  {
    "url": "assets/js/57.4b821666.js",
    "revision": "c462cc42446e6406cb4c4e9ba6f89a1f"
  },
  {
    "url": "assets/js/58.1db8af1f.js",
    "revision": "f7a00fb1b89d0dbcb213931c1cc18623"
  },
  {
    "url": "assets/js/59.d3045373.js",
    "revision": "e9f78d967b3b9a0226d55c7c307e23f8"
  },
  {
    "url": "assets/js/6.f25d4964.js",
    "revision": "7eca420aaad98fd04cc5babffcb6889a"
  },
  {
    "url": "assets/js/60.e1ccc619.js",
    "revision": "6310fa973136d8afb2498d9cde777cf7"
  },
  {
    "url": "assets/js/61.eca4de24.js",
    "revision": "88fa1828e22d396ec679688543913a1e"
  },
  {
    "url": "assets/js/62.be7238a5.js",
    "revision": "fc6eb2d45ab228aaf99cabece79c656d"
  },
  {
    "url": "assets/js/63.a6ace044.js",
    "revision": "cb68bb210650302e1e453204f9351d5c"
  },
  {
    "url": "assets/js/64.bbd88e61.js",
    "revision": "e7f9bed86e4c0d3f3e0bef69121f29c9"
  },
  {
    "url": "assets/js/65.1f6c1848.js",
    "revision": "cee8effd7788faa02ed2f78f2e73c78a"
  },
  {
    "url": "assets/js/66.d22e96e8.js",
    "revision": "f6950c2e23d75319360b07e5cdb29bb8"
  },
  {
    "url": "assets/js/67.80ad6427.js",
    "revision": "212bef1fae27810453e8c091e8b11ed5"
  },
  {
    "url": "assets/js/68.130aa1f6.js",
    "revision": "3be43abce16988b1581791f748e34675"
  },
  {
    "url": "assets/js/69.4b778299.js",
    "revision": "85788f85a679968be146f4a7fe3c47a9"
  },
  {
    "url": "assets/js/7.9c54e368.js",
    "revision": "4a82fc31063b8143d72a3d46bf4801a5"
  },
  {
    "url": "assets/js/70.edcac904.js",
    "revision": "919e035c5c5455a0e359d0e917f32ace"
  },
  {
    "url": "assets/js/71.90aa842c.js",
    "revision": "794907f63673c8f7cc94d0c7e0f8d498"
  },
  {
    "url": "assets/js/72.4cb8aeae.js",
    "revision": "e5d1eeb30b66829bfe7a76e9d9d974d3"
  },
  {
    "url": "assets/js/73.6f272f7b.js",
    "revision": "f7dc32b2dc2bc22374842351f3c2697f"
  },
  {
    "url": "assets/js/74.d36a7a16.js",
    "revision": "8f69a97d0ea3209757e30c639bbb36b9"
  },
  {
    "url": "assets/js/75.362400fa.js",
    "revision": "02cbbe1bc1203021b56b9255a3e6beaa"
  },
  {
    "url": "assets/js/76.140673a6.js",
    "revision": "c6e89748451cd2ebd67c2181e0df2a5b"
  },
  {
    "url": "assets/js/77.5f1336bf.js",
    "revision": "633cce9271b8011aec05f48d847ce729"
  },
  {
    "url": "assets/js/78.6105e050.js",
    "revision": "99dd6bb18a5f341d40fd107552352864"
  },
  {
    "url": "assets/js/79.dd680c04.js",
    "revision": "d38e8d2ccbca378076498f3583aeeadc"
  },
  {
    "url": "assets/js/8.786d8198.js",
    "revision": "404345fc1fc0ca020191fd57407c3488"
  },
  {
    "url": "assets/js/80.ebfb944f.js",
    "revision": "f799ecb0ea4dc69b3e311235ba825aed"
  },
  {
    "url": "assets/js/81.892d344c.js",
    "revision": "7d9d75a6b6a5b335fd1fd659c97baa63"
  },
  {
    "url": "assets/js/9.b0b77105.js",
    "revision": "b784c495df5c23fe3d336cdcf279adee"
  },
  {
    "url": "assets/js/app.8657dc36.js",
    "revision": "cc9edd5fb83f22c0329e2ce3598ded25"
  },
  {
    "url": "blog/algorithm/index.html",
    "revision": "51b523a5c2c76b38e4ff7f00251fb1ee"
  },
  {
    "url": "blog/algorithm/leetcode-07-solution.html",
    "revision": "88b36382a7733a219a63f781e288f76c"
  },
  {
    "url": "blog/algorithm/leetcode-09-solution.html",
    "revision": "ffaa348c321de7d1d2e4f9c6e16a99a4"
  },
  {
    "url": "blog/frontend/index.html",
    "revision": "419830c19108e69c2fde385185dbbcd3"
  },
  {
    "url": "blog/frontend/wxapp.html",
    "revision": "39a52d2b03d575494ddbeb71246c14bb"
  },
  {
    "url": "blog/java/index.html",
    "revision": "d4e37b82e06ac1a3a48ab10aff2f09be"
  },
  {
    "url": "blog/java/java-jitwatch.html",
    "revision": "198e21d087464a7cac02b07d09cc9aa9"
  },
  {
    "url": "blog/java/java/arraydeque的使用.html",
    "revision": "036c3f8c566aeb9fba0aa7cc3cde15fc"
  },
  {
    "url": "blog/java/java/java对象拷贝.html",
    "revision": "0858af009eff0c032c7a12d7b0ccc08f"
  },
  {
    "url": "blog/java/java/到底什么是线程安全和线程不安全.html",
    "revision": "209d1ac68bb5c730c8c04ebf39735a28"
  },
  {
    "url": "blog/java/java/实用的java编程技巧之命名攻略.html",
    "revision": "4ac666ad447d50ba6833af6369b1a06f"
  },
  {
    "url": "blog/java/maven/maven对springboot项目配置文件-依赖分离打包.html",
    "revision": "546ba3dc648d0c4baa993eb7565e2435"
  },
  {
    "url": "blog/java/mybatis/mybatis-cache.html",
    "revision": "7d0de43b6841ac4788f1e93f505bc61a"
  },
  {
    "url": "blog/java/mybatis/mybatis-dynamicSQL.html",
    "revision": "2c1023cfa61d2631ffcaffae9cbc0526"
  },
  {
    "url": "blog/java/mybatis/mybatis-param-process.html",
    "revision": "cfc21441dbc7d1de8b0423e22a5970dc"
  },
  {
    "url": "blog/java/mybatis/mybatis-select.html",
    "revision": "d064c54c490854205d4c8e58d7586e5b"
  },
  {
    "url": "blog/java/netty/netty-基本组件.html",
    "revision": "737c96aeea94b49d81dbe848eb784e98"
  },
  {
    "url": "blog/java/problem-record/问题记录-pkix-path-building-failed问题.html",
    "revision": "4718a6979c97a5f2de7176bc7a2c695e"
  },
  {
    "url": "blog/java/spring/spring-aop思想.html",
    "revision": "0a9ad5b16504ddbbd8d1b071627477ef"
  },
  {
    "url": "blog/java/spring/spring-bean.html",
    "revision": "49faca22d72fc432506629a2b73c25d4"
  },
  {
    "url": "blog/java/spring/spring-jdbc-transaction.html",
    "revision": "8a8697bc553460c0b8234b8835713538"
  },
  {
    "url": "blog/java/springboot/auto-configuration.html",
    "revision": "ce29dfc55ebff6b2a4e23ab3482c3411"
  },
  {
    "url": "blog/java/springboot/conf-file-loading.html",
    "revision": "62ee7d2a8d8d884a2b8f6151680fc762"
  },
  {
    "url": "blog/java/springboot/conf-file.html",
    "revision": "3618ba55897d9fc5c2707c4b3afdba5e"
  },
  {
    "url": "blog/java/springboot/principle.html",
    "revision": "f4b207dfd9c5af382c794024bc734735"
  },
  {
    "url": "blog/java/springboot/profile-file.html",
    "revision": "9fefb2e4464cd0dcf1e43610e37e5400"
  },
  {
    "url": "blog/java/springboot/spring-boot.html",
    "revision": "3015f4d7248fef7dafe8788f2dcce16d"
  },
  {
    "url": "blog/java/springboot/springboot-springboot-log4j2.html",
    "revision": "40fa7fcdbd92526d627e5c344a6713c1"
  },
  {
    "url": "blog/java/springboot/springboot-web-错误处理.html",
    "revision": "dbff47047558ca66f6e4fb2e62355a37"
  },
  {
    "url": "blog/java/springboot/springboot-web开发基础.html",
    "revision": "199c99a3e59526508d23c32491920976"
  },
  {
    "url": "blog/java/springboot/springboot-web日志系统.html",
    "revision": "0e4ec1b761cd826f015ef3cbab73c6de"
  },
  {
    "url": "blog/java/springboot/springboot-日志系统.html",
    "revision": "371871e202ba8337b82a2435af6c43c5"
  },
  {
    "url": "blog/java/springboot/springboot整合篇-springboot整合websocket.html",
    "revision": "e95f22c406d73376732644faaf840174"
  },
  {
    "url": "blog/java/springmvc/springmvc-interceptor.html",
    "revision": "d8857186b7d570ed997831e7800d6fa9"
  },
  {
    "url": "blog/java/springmvc/springmvc基本知识点.html",
    "revision": "5859652ed42e4e637f7fb254eff12614"
  },
  {
    "url": "blog/linux/index.html",
    "revision": "cda6b1a7e46b47f24b40f1d4bdf52594"
  },
  {
    "url": "blog/linux/linux-manjaro.html",
    "revision": "2be077364f40c79a2c60afb02d9c03d0"
  },
  {
    "url": "blog/linux/linux-nginx-basic-command.html",
    "revision": "990c03313cee7c5a1b189460df478663"
  },
  {
    "url": "blog/linux/linux-python2-python3-setup-use.html",
    "revision": "5868d85f966973bd0de03abeb48509e2"
  },
  {
    "url": "blog/linux/linux-setup-usual-software.html",
    "revision": "e122697db93a83641c29d625d7de66f9"
  },
  {
    "url": "blog/linux/linux-ubuntu-pip-ssl-module-not-setup.html",
    "revision": "03999432036259559d475c18d2ceb2a7"
  },
  {
    "url": "blog/linux/linux-use-root-accout-login.html",
    "revision": "32085106151db768cd657a0af09e298b"
  },
  {
    "url": "blog/others/git/git-advanced-command.html",
    "revision": "975f5378bbe91d8ee0f9ec841aa4f739"
  },
  {
    "url": "blog/others/git/git-branch-command.html",
    "revision": "4b7da461917d162b73a1c489fa2794d9"
  },
  {
    "url": "blog/others/git/git-cooperate-develop-command.html",
    "revision": "346999781608fac0144e8008bbbce86f"
  },
  {
    "url": "blog/others/git/git-remote-command.html",
    "revision": "85c6df41e040875e2bbb2bc1683e6b87"
  },
  {
    "url": "blog/others/git/index.html",
    "revision": "02d0df73e5d434bc4fe598c56214d5e8"
  },
  {
    "url": "blog/others/life-record/2018.html",
    "revision": "9d7c82a2ff5c89ec901fbf95d653c659"
  },
  {
    "url": "blog/others/life-record/2019.html",
    "revision": "e464b79e751a5e115a4100a44bf0dcce"
  },
  {
    "url": "blog/others/life-record/index.html",
    "revision": "1c4846198b6ef7f0a04c1331204e47f3"
  },
  {
    "url": "blog/others/life-record/三个月计划-要求.html",
    "revision": "14e52284bf9785cd6634ca3254a31711"
  },
  {
    "url": "blog/others/life-record/最近一点时间的感慨.html",
    "revision": "60f7cd2ea13c7d2fa0d8a6360012481b"
  },
  {
    "url": "blog/others/server/index.html",
    "revision": "a47b233b9770c5e3222ad6f17992f480"
  },
  {
    "url": "blog/others/server/nginx.html",
    "revision": "fe11352e1ee05db3c2a7d158691cfdf2"
  },
  {
    "url": "blog/others/wheel/index.html",
    "revision": "b17cbbffb8906f57285be82edf6897a7"
  },
  {
    "url": "blog/others/wheel/qduoj-development-record.html",
    "revision": "69b1bb234855a13642d3fff31a6768da"
  },
  {
    "url": "blog/others/wheel/vuepress.html",
    "revision": "d3bccaab513c87c0344ad6345f588689"
  },
  {
    "url": "blog/python/index.html",
    "revision": "1729ce7778d4a89b324f26dc0bcada33"
  },
  {
    "url": "blog/python/python-crawling-toutiao-picture.html",
    "revision": "a7749ec6f50d8d1ebaaf580f0f62bb50"
  },
  {
    "url": "blog/python/python-spider.html",
    "revision": "6c678c0affe04bf89fde1bd06782d397"
  },
  {
    "url": "blog/python/selenium-api-docs.html",
    "revision": "85a43e3400b6b9f325af748b7583dd3e"
  },
  {
    "url": "friends/index.html",
    "revision": "b6e472814615ae3ca75a6e416655933b"
  },
  {
    "url": "hero.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "79d4437a54e31342c27f5624020c100e"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "6b7bc3964214c9138a16d4e5b9837420"
  },
  {
    "url": "logo.png",
    "revision": "022fa4feb096e95c1b14ed44cc3f2336"
  },
  {
    "url": "post/index.html",
    "revision": "d1ad40e36dcf74d59d843b5f6e38b74a"
  },
  {
    "url": "tags/index.html",
    "revision": "c376e9a99ba599d07d9d83015e3fb460"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
