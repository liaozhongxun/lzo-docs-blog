---
title: npm与node
---
npm与node
> 现在下载安装node一般都有集成npm,安装node成功后直接就能在命令行使用npm包管理工具了
[node官网下载](https://nodejs.org/en/download/)

npm初始化项目
```shell
npm init -y //生成package.json
...
```

npm安装包
```shell
npm install module-name -save | -S      //自动把模块和版本号添加到dependencies(生产环境)部分
npm install module-name -save-dev | -D   //自动把模块和版本号添加到devDependencies(开发环境)部分

npm install //项目中 npm install 下载当前目录下package.json的所有包
npm i
```
> 安装生产环境依赖的模块，即项目运行时的模块，例如react，react-dom,vue,jQuery等类库或者框架
> 安装开发环境依赖的模块，即项目开发时的模块，例如babel、webpack等