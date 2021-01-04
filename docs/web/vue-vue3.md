---
title: vue3
---
## 基础信息
### 对比vue2
- vue3源码采用typescript开发,对typescript支持友好
- 源码体积优化，移除部分api,采用tree-shaking
- 数据劫持优化:vue3采用proxy,大大提升性能(vue2数据采用 Object.defineProperty)
- 编译优化:vue3采用静态模板分析、重写diff算法
- CompositionAPI:整合业务代码逻辑，提取公共算法
- 自定义渲染器:可以用来创建自定义渲染器改写vue底层渲染逻辑
- 新增  Fragment、Teleport、Suspense组件
- template 下可以放多个标签，vue在内部进行处理