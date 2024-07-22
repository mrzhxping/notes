---
title: Brew
---

—— Mac "上的应用商店"，包管理器；  安装、管理包很方便

官网：<https://brew.sh>


### 安装

1、官方安装 &nbsp;&nbsp;&nbsp;&nbsp;<div size=2 color=#CCCCCC >(命令可能执行会很慢，建议开起命令行代理)</div>

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


2、国内大佬安装脚本

&nbsp;&nbsp;&nbsp;&nbsp; 有很多，没有亲测 具体请百度

### 常用命令
```
// 搜索包
brew search mysql

// 安装包
brew install mysql

// 查看包信息，比如目前的版本，依赖，安装后注意事项等
brew info mysql

// 卸载包
brew uninstall wget

// 显示已安装的包
brew list

// 查看brew的帮助
brew –help

// 更新， 这会更新 Homebrew 自己
brew update

// 检查过时（是否有新版本），这会列出所有安装的包里，哪些可以升级
brew outdated
brew outdated mysql

// 升级所有可以升级的软件们
brew upgrade
brew upgrade mysql

// 清理不需要的版本极其安装包缓存
brew cleanup
brew cleanup mysql
```
