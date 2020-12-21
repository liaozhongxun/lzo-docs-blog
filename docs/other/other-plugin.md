---
title: 插件
---

## npm插件
### puer 
> 轻松开起本地服务器  

```shell
npm install puer -g
# 直接使用
puer --port xxxx 
```

### nodemon 
> node服务器改动时自动重启服务  

```shell
npm install nodemon -g
# 直接使用
nodemon server.js  
```

### apidoc 
> 根据指定注释格式生成api文档

[官网](https://apidocjs.com/#install)

```shell
npm install apidoc -g

# 注释格式
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */

# 直接使用 -i(生成文档的文件夹) -o(输出文件夹)
apidoc -i myapp/ -o apidoc/ -t mytemplate/

```
根目录下 apidoc.json 全局配置
```json
//apidoc.json
{
  "name": "example",
  "version": "0.1.0",
  "description": "apiDoc basic example",
  "title": "Custom apiDoc browser title",
  "url" : "https://api.github.com/v1"
}
```


### bower 
> 第三方插件下载工具,也是一个包管理器

```shell
npm install bower -g
# 直接使用
bower install xxxx
```

### json-server 生成 REST API
> 快速生成模拟可访问**REST** API接口,post请求时配置文件自动添加请求数据记录,并且每个接口都能使用GET、PPST、PUT(更新)、DELETE(删除)请求

REST API
- 同一个请求路径可以进行多个操作
- 请求方式可以可以用到GET、PPST、PUT、DELETE
- 浏览器的运行动作post、get、put、delete与CRUD统一
  - 新增 (create，使用 POST )
  - 读取 (read，使用 GET )
  - 更新 (update，使用 PUT )
  - 删除 (destroy，使用 DELETE)

非 REST API
- 请求方式与CRUD无关
- 一个路径只对应一个操作
- 一般只用GET/POST


[github地址](https://github.com/typicode/json-server#getting-started)

```shell
npm install -g json-server
# 根目录创建 db.json 配置接口数据
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}

# 生成接口并监听
json-server --watch db.json
```

### vuex-persistedstate
> vuex持久化

```shell
import createPersistedState from "vuex-persistedstate"

const store = new Vuex.Store({
    plugins: [createPersistedState()]
})
```
---
## web常用插件
### 
+ [日期时间(Day.js)](https://www.cnblogs.com/cjrfan/p/9154539.html)

## jQuery插件
### fullpage.js 
> 基于jQuery的全屏特效插件 [fullpage官网](http://fullpage.81hu.com/)  [bilibili视频](https://www.bilibili.com/video/BV1Ks411V7Kg?p=49)

```python
bower install fullpage.js

# 1、引入jQuery、fullpage.css、fullpage.js
# 2、指定全屏结构标签
<div id="fullpage">
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
    <div class="section">Some section</div>
</div>

# 3、js操作配置
$(document).ready(function(){
    $('#fullpage').fullpage({
       #xxxx
       #在当前屏幕离开之前执行下面方法
       onLeave: function(index,nextIndex,dir){
          '''
            当前屏索引、下一屏幕索引、方向
            滚动全屏动画效果方案:
                给所有屏幕的动画元素加上自定义属性(mat)储存动画class
                触发改方法的时候去掉当前屏动画
                给nextIndex中有动画的添加动画
          '''
          #清除动画
          $('[mat]').each(function(ind,ele){
              var mat = $(element).attr('mat');
              $(element).removeClass(mat)
          })
          #下屏添加动画,找到下一屏,找到屏中拥有amt属性的元素,遍历添加类
          $('#fullpage .section').eq(nextIndex - 1).find('[amt]').each(function(addi,addele){
              $(addele).addClass($(addele).attr('amt'))
          })
       }
    })
})
```



