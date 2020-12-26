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

### 图片上传
> 原理:将图片、音乐等要上传的东西转换文数据流,通过ajax或form表单传到服务器，服务器接收这些数据后再写入文件系统之中

1. 安装multer模块
```shell
npm install multer
```
2. 使用
```javascript
var multer = require('multer');
```
3. 设置路径与文件名
```javascript
var storage = multer.diskStorage({

})
```
### api接口
- url
- 方法
- 参数
- 结果
### node 跨域 cors中间件处理

### 身份验证
http请求 无状态 服务器、客户端相互不认识

基本思路:
1. 某个用户登录成功后,将用户相关信息加密,生成一个字符串给前端（通过cookie自动传）
2. 这个用户调用其他接口时，将加密字符串传给服务器，后端通过这些字符判断用户的身份（通过cookie自动传）
3. 再根据这个用户的权限进行验证，是否可以操作

#### 方案一、session + cookie
相关插件:
-  cookie-parser 解析cookie
-  express-session 

#### 方案二、[jwt](http://jwt.io) （json web token）
使用步骤:
- 用户登录 服务器产生一个token(加密字符串)发送给前端
- 前端将token进行保存  
- 前端发起数据请求通过 headers 携带 token
- 服务器验证token是否合法,如果合法继续操作否则终止操作  
- token应用场景:无状态请求、保存用户登录状态、第三方登录...  

非对称加密:通过私钥产生token、通过公钥解密token

对称加密   
插件  
- jsonwebtoken
  
```javascript
const jwt = require("jsonwebtoken");
const scrict = "jfjdsajfdsajfdsa"; //私钥

let playload = {
    //传递的数据
    us: 123,
    ps: 456,
};

function creatToken(playload) {
    //产生token
    playload.ctime = Date.now();
    playload.exp = 1000 * 60 * 30; //30分钟过期
    // 签名 默认hs256加密方式
    return jwt.sign(playload, scrict);
}

function checkToken(token) {
    return new Promise((resovle, reject) => {
        //验证
        jwt.verify(token, scrict, (err, data) => {
            if (err) {
                reject("token 验证失败");
            }
            //ctime + exp < Data().now 说明超时了 
            resolve(data);
        });
    });
}

module.exports = {
    creatToken,
    checkToken,
};

```


[参考资料](https://www.bilibili.com/video/BV1Ci4y1L7gk?p=7)
