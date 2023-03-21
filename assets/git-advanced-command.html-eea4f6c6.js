import{_ as c,W as d,X as g,Y as r,Z as i,$ as t,a0 as a,a2 as l,a1 as e,C as n}from"./framework-a4c02b8f.js";const m={},p=e('<h1 id="工作区与暂存区" tabindex="-1"><a class="header-anchor" href="#工作区与暂存区" aria-hidden="true">#</a> 工作区与暂存区</h1><h2 id="工作区" tabindex="-1"><a class="header-anchor" href="#工作区" aria-hidden="true">#</a> 工作区</h2><div class="hint-container tip"><p class="hint-container-title">提示</p><p>工作区就是在你电脑上的Repository下的某一个工作目录，比如：F:\\Repository\\test01这个目录。test01这个目录就是工作区，或者你新建的任何一个目录，都是工作区（.git隐藏目录下并非工作区）</p></div>',3),h=e(`<h2 id="暂存区" tabindex="-1"><a class="header-anchor" href="#暂存区" aria-hidden="true">#</a> 暂存区</h2><p>Repository目录下有一个（.git隐藏目录），这个就是控制版本的版本控制库。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>（.git隐藏目录）存储了Git为我们创建的各种信息，包括版本信息，暂存区（这是最重要的），还有分支信息（Git已经为我们创建了一个master分支），还有一些配置信息等。</p></div><p>接下来在Repository目录下新建一个test.txt文件，在里面写入123456，然后进行下面的这些操作。</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_add_commit3.png" alt="git_add_commit3" tabindex="0" loading="lazy"><figcaption>git_add_commit3</figcaption></figure><p>继续在test.txt中添加一行数据，然后使用git status查看信息。git会提示你有文件需要git add 并且git commit。</p><p>继续下面的操作！---把同一个文件提交到同一个暂存区中，并且使用commit提交到一个分支中。</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_status_add_commit.png" alt="git_status_add_commit" tabindex="0" loading="lazy"><figcaption>git_status_add_commit</figcaption></figure><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_status_commit.png" alt="git_status_commit" tabindex="0" loading="lazy"><figcaption>git_status_commit</figcaption></figure><p>这次将所有文件提交到一个分支（master分支）中了，可以使用git log查看你提交的所有分支。</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_log4.png" alt="git_log4" tabindex="0" loading="lazy"><figcaption>git_log4</figcaption></figure><p>这样看起来很碍眼，而且版本较多的话，看起来的确不方便，所有推荐使用</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --pretty=oneline
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,13),u={href:"https://finen.top/git-basic-command/#more",target:"_blank",rel:"noopener noreferrer"},f=e(`<h1 id="撤销修改与删除文件操作" tabindex="-1"><a class="header-anchor" href="#撤销修改与删除文件操作" aria-hidden="true">#</a> 撤销修改与删除文件操作</h1><h2 id="撤销修改" tabindex="-1"><a class="header-anchor" href="#撤销修改" aria-hidden="true">#</a> 撤销修改</h2><h3 id="最简单的方法-手动修改" tabindex="-1"><a class="header-anchor" href="#最简单的方法-手动修改" aria-hidden="true">#</a> 最简单的方法：手动修改</h3><p>在你记得你修改了那些地方的情况下，直接手动撤销那些你不要的东西即可。</p><h3 id="使用之前所使用的命令进行版本回滚" tabindex="-1"><a class="header-anchor" href="#使用之前所使用的命令进行版本回滚" aria-hidden="true">#</a> 使用之前所使用的命令进行版本回滚</h3><p>具体命令如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log --pretty=oneline

git reset --hard HEAD^

git reset --hard HEAD~*

git reflog

git reset --hard 版本号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以使用这些办法进行你所需要的回滚。</p>`,8),_={id:"使用git-checkout-test-txt-一点要带文件名-不然会创建分支",tabindex:"-1"},x=i("a",{class:"header-anchor",href:"#使用git-checkout-test-txt-一点要带文件名-不然会创建分支","aria-hidden":"true"},"#",-1),b=e(`<p>git checkout --test.txt 分为两种状态</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout --test.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><ol><li>test.txt文件修改后，你没有使用git add命令对其进行提交到暂存区。使用git checkout --test.txt会回退到之前的一个版本。<strong>相当于回滚到你最后提交的那个版本。而刚刚修改的内容也将全部丢失。</strong></li></ol></blockquote><blockquote><ol start="2"><li>另一种情况就是你已经使用git add提交文件到暂存区了。那这样使用git checkout --test.txt 就会<strong>保存已经在暂存区的内容。而没有写入暂存区的内容则会全部丢失。</strong></li></ol></blockquote><p>接下来使用git进行操作查看。</p><p>首先在test.txt文件中添加一行数据 654321，然后使用git add命令提交到暂存区。</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_add2.png" alt="git_add2" tabindex="0" loading="lazy"><figcaption>git_add2</figcaption></figure><p>接着再在test.txt文件中添加一行数据 222222，然后我们不使用git add命令提交文件到暂存区。</p><p>最后我们使用git checkout --test.txt命令撤销修改，在查看文件。</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_checkout.png" alt="git_checkout" tabindex="0" loading="lazy"><figcaption>git_checkout</figcaption></figure><p>跟上面的结论是一样的。</p><h2 id="删除文件" tabindex="-1"><a class="header-anchor" href="#删除文件" aria-hidden="true">#</a> 删除文件</h2><h3 id="rm-命令-linux下的软删除命令" tabindex="-1"><a class="header-anchor" href="#rm-命令-linux下的软删除命令" aria-hidden="true">#</a> rm 命令（linux下的软删除命令）</h3><p>假如有人提交了tesxt02.txt的文件，但是这个文件缺失不需要的，我们可以使用rm test02.txt，然后在git commit就可以了。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>新建一个test02.txt 文件
git add test02.txt
git commit -m &quot;提交test02文件&quot;
rm test02.txt
git commit -m &quot;删除test02文件&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_add_commit4.png" alt="git_commit4" tabindex="0" loading="lazy"><figcaption>git_commit4</figcaption></figure><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/rm.png" alt="rm" tabindex="0" loading="lazy"><figcaption>rm</figcaption></figure><p>说明已经删除了文件并且已经commit了，当然假如你删除错误的话，你也可以回滚版本。</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_reflog2.png" alt="git_reflog" tabindex="0" loading="lazy"><figcaption>git_reflog</figcaption></figure><p>假如你已经使用rm test02.txt命令，但是却没有使用git commit命令呢？又改如何恢复文件？你可以使用下面的命令:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git checkout --test02.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>rm之前：</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_rm.png" alt="rm_before" tabindex="0" loading="lazy"><figcaption>rm_before</figcaption></figure><p>rm 之后：</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_rm2.png" alt="git_rm_after" tabindex="0" loading="lazy"><figcaption>git_rm_after</figcaption></figure><p>然后我们不使用git commit命令，使用git checkout -- test02.txt</p><p>使用git checkout -- test02.txt之后</p><figure><img src="https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_rm_after.png" alt="git_check_out" tabindex="0" loading="lazy"><figcaption>git_check_out</figcaption></figure><p>文件又恢复了，恢复多个文件也是同理。</p><hr><pre><code> 下面会涉及删除与撤销的操作!请继续浏览！
</code></pre><hr>`,32);function v(y,k){const s=n("ExternalLinkIcon"),o=n("font");return d(),g("div",null,[p,r("more"),h,i("p",null,[t("接下来，你可以使用"),i("a",u,[t("上一篇git基础教程"),a(s)]),t("讲过的方法对版本进行操作。基本命令请点击链接去查看...")]),f,i("h3",_,[x,t(" 使用git checkout -- test.txt "),a(o,{color:"red"},{default:l(()=>[t("一点要带文件名")]),_:1}),t("，不然会创建分支！")]),b])}const z=c(m,[["render",v],["__file","git-advanced-command.html.vue"]]);export{z as default};
