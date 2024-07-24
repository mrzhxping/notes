import{_ as s,c as n,o as e,e as a}from"./app-BzSKhqNe.js";const l={},i=a(`<p>—— Mac &quot;上的应用商店&quot;，包管理器； 安装、管理包很方便</p><p>官网：<a href="https://brew.sh" target="_blank" rel="noopener noreferrer">https://brew.sh</a></p><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><p>1、官方安装     <div size="2" color="#CCCCCC">(命令可能执行会很慢，建议开起命令行代理)</div></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">/bin/bash -c &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>2、国内大佬安装脚本</p><p>     有很多，没有亲测 具体请百度</p><h3 id="常用命令" tabindex="-1"><a class="header-anchor" href="#常用命令"><span>常用命令</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre class="language-text"><code><span class="line">// 搜索包</span>
<span class="line">brew search mysql</span>
<span class="line"></span>
<span class="line">// 安装包</span>
<span class="line">brew install mysql</span>
<span class="line"></span>
<span class="line">// 查看包信息，比如目前的版本，依赖，安装后注意事项等</span>
<span class="line">brew info mysql</span>
<span class="line"></span>
<span class="line">// 卸载包</span>
<span class="line">brew uninstall wget</span>
<span class="line"></span>
<span class="line">// 显示已安装的包</span>
<span class="line">brew list</span>
<span class="line"></span>
<span class="line">// 查看brew的帮助</span>
<span class="line">brew –help</span>
<span class="line"></span>
<span class="line">// 更新， 这会更新 Homebrew 自己</span>
<span class="line">brew update</span>
<span class="line"></span>
<span class="line">// 检查过时（是否有新版本），这会列出所有安装的包里，哪些可以升级</span>
<span class="line">brew outdated</span>
<span class="line">brew outdated mysql</span>
<span class="line"></span>
<span class="line">// 升级所有可以升级的软件们</span>
<span class="line">brew upgrade</span>
<span class="line">brew upgrade mysql</span>
<span class="line"></span>
<span class="line">// 清理不需要的版本极其安装包缓存</span>
<span class="line">brew cleanup</span>
<span class="line">brew cleanup mysql</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[i];function c(d,p){return e(),n("div",null,r)}const v=s(l,[["render",c],["__file","brew.html.vue"]]),m=JSON.parse('{"path":"/code/mac/brew.html","title":"Brew","lang":"zh-CN","frontmatter":{"title":"Brew"},"headers":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}],"git":{"updatedTime":1721629674000,"contributors":[{"name":"Mr.zhxping","email":"mrzhxping@gmail.com","commits":1}]},"filePathRelative":"code/mac/brew.md"}');export{v as comp,m as data};
