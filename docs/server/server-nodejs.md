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

[参考资料](https://www.bilibili.com/video/BV1Ci4y1L7gk?p=7)
