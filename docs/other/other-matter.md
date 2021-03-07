---
title: 偏门问题
---

### js 浮点数计算偏差问题

> 两位小数: 同时乘以 100 变成整数,结果再根据运算符相对的减少倍数
> 四位小数: 同时乘以 10000 变成整数......

### 语法糖

> 指计算机语言中添加的某种语法，这种语法对语言的功能并没有影响，但是更方便程序员使用。通常来说使用语法糖能够增加程序的可读性(如 ts，scss)

### github.io 无法访问的问题

修改 dns 为 114.114.114.114

### 将网页创建桌面快捷方式

> chrome://apps/ -> 拖动收藏的网址到页面中 -> 图标上右键创建快捷方式

### 移动端 click 延迟处理

> 移动端 200-300ms 延迟可以使用 `fastclick`插件或将 click 事件替换`tab事件`来解决  
>  tap 事件不是原生的，zepto、微信小程序等都有封装

### STAR 法则

-   S: situation(项目背景)
-   T: task(任务目标)
-   A: action(采取的行动)
-   R: result(产生的结果)

### vue 快捷到了代码段

> vscode -> 首选项 -> 用户片段 -> 搜索 vue

设置

```json
{
    "Print to console": {
        "prefix": "demo",
        "body": [
            "<template>",
            "</template>",
            "<script lang='ts'>",
            "</script>",
            "<style lang='scss' scoped>",
            "</style>"
        ],
        "description": "Log output to console"
    }
}
```

新文件中直接输入 demo,回车
