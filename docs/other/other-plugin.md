---
title: 插件
---

## npm插件
### puer 
> 轻松开起本地服务器  

```shell
npm install puer -g
//直接使用
puer --port xxxx 
```

### nodemon 
> node服务器改动时自动重启服务  

```shell
npm install nodemon -g
//直接使用
nodemon server.js  
```

### bower 
> 第三方插件下载工具,也是一个包管理器

```shell
npm install bower -g
//直接使用
bower install xxxx
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



