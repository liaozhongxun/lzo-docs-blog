---
title: 自动化构建工具 webpack
---
> 一切都是模块   
> 指定一个入口，关联.hbs、.js、.jpg、sass...等个种模块和依赖串在一起  
> 编译成浏览器认识的目标文件.js、.css、jpg、png(static assets)    
> web(浏览器) pack(打包) 就是一个模块打包的工具
> webpack 是一个的基于nodejs平台开发的工程化工具

[webpack4 官网](https://v4.webpack.docschina.org/)
[webpack4 官方插件](https://v4.webpack.docschina.org/plugins/)

步骤:
+ 安装webpack 、 webpack-cli
+ 需要html入口: 安装 html-webpack-plugin
+ 需要服务：webpack-dev-server
+ 需要复制: copy-webpack-plugin