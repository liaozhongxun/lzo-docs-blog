---
title: vue-cli与脚手架
---
### vue-cli 
[官网](https://cli.vuejs.org/zh/guide/)

安装
```
npm i -g @vue/cli
npm i -g @vue/cli@3.x

yarn global add @vue/cli
```
> 安装成功后能在命令行使用vue相关指令

删除
```
npm uninstall -g @vue/cli
yarn global remove @vue/cli
```
> @vue/cli是居于node的,如果删除不成功可以去node文件夹下直接删除vue相关文件

图形化管理界面
```
vue ui
```

### 创建vue项目
[相关网址](https://www.cnblogs.com/joe235/archive/2004/01/13/12448744.html)

#### 3.x
```
npm i -g @vue/cli
vue create 项目名称
npm run serve
```

#### 2.x
```
npm i -g @vue/cli
vue init webpack 项目名称
npm run dev
```