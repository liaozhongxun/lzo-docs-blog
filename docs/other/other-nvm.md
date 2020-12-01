---
title: nvm
date: 2016-12-10 14:00:57
tags: 
    - 标记语言
---
window的node管理器
[下载地址](https://github.com/coreybutler/nvm-windows/releases/tag/1.1.7)

##### 查看版本

```shell
nvm list //查找电脑上的node版本
nvm list available //查看网络可以安装的版本
```

##### 安装

```shell
nvm install <version> //版本号 如: 12.10.0
```

##### 切换版本

```shell
nvm use <version>
```

##### 卸载

```shell
nvm uninstall <version>
```



##### 开启关闭

```shell
nvm off                     //禁用node.js版本管理(不卸载任何东西)
nvm on                      //启用node.js版本管理
```

##### 其他

```shell
nvm ls 列出所有版本
nvm current显示当前版本
nvm alias <name> <version> ## 给不同的版本号添加别名
nvm unalias <name> ## 删除已定义的别名
nvm proxy 查看设置与代理
nvm root [path] 设置和查看root路径
nvm version 查看当前的版本
...
```



