---
title: nodejs基础
---

> 终端直接输入 node 进入可以运行 node 代码的换叫 REPL 环境

核心模块(node 软件提供的)
第三方模块
自定义模块

## 基础操作

### 模块操作

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
