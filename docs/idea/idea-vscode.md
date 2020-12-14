---
title: VsCode 编辑器
---

## 基础运用

```javascript
/**  快速注释
光标定义到变量 -> 右键重命名符号(F2) -> 改名回车 全部引用都会一起改变
```

## 插件

### 格式化插件

- Prettier - Code formatter (vue 中可能需要安装**vetur**配合才能生效)

> 首选项->设置 搜索 formmat On Save 勾选 保存代码自动格式化(如果格式化插件可用的话); 快捷键：**alt+shift+p**

### 找括号

- Bracket Pair Colorizer 2

> 可以清楚看到多层括号层级关系，并行 js 中对层级划分

### 自动更改 HTML 配对标签 1

- Auto Rename Tag

### 自动补全

- Path Intellisense

### 通过类找到样式定义地址

- CSS Peek

> 选择 class **F12**显示（vue 中无法找到组件内的类）

### 美化

- vscode-icon (设置文件夹与文件的图标)

### Emmet 快速生成 html 代码

- Mithril Emmet

语法：

```javascript
(div.headev>div.tags$.tags{tag$}*3)+(div.main>div.center>div.left{left}+div.right{right}>div.top{top}+div.bottom{bottom})+(dev.footer>a[href="javascript:"]{连接$}*10)
```

### 基础常用
- Chinese (Simplified) Language Pack for Visual Studio Code   (中文汉化包)
- Vetur (vue必装)
- EditorConfig (是一种被各种编辑器广泛支持的配置 .editorconfig)
- live-server (可运行的静态文件右键直接开启服务 电脑上也要全局安装)
- Better Comments (! * todo //美化注释)
- Autoprefixer  2.2.0 (前缀 shift+ctrl+p 选择 autoprefixer CSS,电脑上也要全局安装)
- Code Runner (右键运行各种服务端代码)


## 快捷键

[参考资料](https://www.cnblogs.com/jpfss/p/10956650.html)

## editorconfig 配置

[参考资料](https://juejin.cn/post/6860440041039069191#heading-10)

## Markdown
- Markdown All in One (markdown快捷键与格式化)
- Markdown Preview Enhanced (markdown预览)

