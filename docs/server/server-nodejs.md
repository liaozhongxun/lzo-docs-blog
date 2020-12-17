---
title: nodejs基础
---

> 终端直接输入 node 进入可以运行 node 代码的换叫 REPL 环境



## 基础操作

### 三大特点:

-   事件驱动
-   非阻塞 I(input)/O(output) 输入输出流
-   基于 chrome V8 runtime 轻量高效

### 运行环境
+ 浏览器
  - 基本语法 
  - DOM
  - BOM
  - Ajax
  - 系统文件数据库(处于安全性考虑 不能实现)
+ 服务器
  - 基本语法
  - 操作数据库
  - 操作本地文件

### 模块化
+ 核心模块(node 软件提供的)
+ 第三方模块(用npm安装)
  + nodemailer
  
+ 自定义模块(一个js文件就是一个模块)

#### 模块操作

```javascript
const os = require("os"); //导入模块

// 默认导出
module.exports = function () {
    console.log(os.freemem());
};
//导入
const req = require("./node");
req();

// 多个导出
module.exports.export1 = function () {
    console.log("export1");
};
module.exports.export2 = function () {
    console.log("export2");
};
//导入
const { export1, export2 } = require("./node");
export1();
```
### 爬虫
1. 获取目标网站 (http.get)
2. 分析网站内容 (cheerio 通过jq选择器获取想要的内容 或直接用正则匹配)
3. 获取有效信息 下载或其他操作

### express
[官网](https://www.expressjs.com.cn/)
#### api
+ ip
+ 端口号
+ pathname
+ method
+ 接收用户的参数

### 什么是服务器
+ 服务器
  + 服务器的本质就是一台电脑
  + 服务器软件(如:PHP的apach、Java的tomcat、微软的iis、ngnix、node等)
  + 得到服务器IP和端口号
+ 局域网：服务器通过网线或无线相连接,每个电脑都会有一个IP
+ 外网
+ IP:找到服务器主机的位置
+ 端口号:找到主机中某个程序的位置

### 中间件middlewear
+ 内置中间件(静态资源目录 static)
+ 自定义中间件(全局 局部)
+ 第三方中间件 (如 body-parser)

注意next()
### 静态资源目录 static
> 指定一个目录,目录可以被访问 类似Apache 的www


[参考资料](https://www.bilibili.com/video/BV1Ci4y1L7gk?p=7)
