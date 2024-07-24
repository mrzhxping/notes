---
title: Git常用操作
---

# 一些Git常用操作

## 修改历史邮箱和用户名

### 1、拉取要修改的分支
把要修改的所有分支全部拉取到本地，修改只会修改已拉取到本地分支的记录

### 2、修改命令

1. 该命令使用邮箱匹配，可根据需要自行修改匹配规则；
2. 一定要将命令中的`旧邮箱` `新用户名` `新邮箱`修改成自己需要的参数；
3. 看到有`rewrite`的则表示该分支有修改成功；
4. 可以使用`git log`查看具体记录；

```shell {2-4}
git filter-branch -f --env-filter '
OLD_EMAIL="旧邮箱"
CORRECT_NAME="新用户名"
CORRECT_EMAIL="新邮箱"
if [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_COMMITTER_NAME="$CORRECT_NAME"
    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"
fi
if [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]
then
    export GIT_AUTHOR_NAME="$CORRECT_NAME"
    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"
fi
' --tag-name-filter cat -- --branches --tags
```

### 3、强推

```shell
git push origin --force --all
```

### 4、其他

- 执行失败时先清除缓存

```shell
git filter-branch -f --index-filter 'git rm --cached --ignore-unmatch Rakefile' HEAD
```

## 修改历史commit描述

::: danger 注意
此方法修改历史记录commit描述信息会把修改的那条提交后所有的提交记录时间同时修改
:::

## id

## 修改

