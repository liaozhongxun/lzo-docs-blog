---
title: npm与node
---
## npm 基础使用
### npm与node
> 现在下载安装node一般都有集成npm,安装node成功后直接就能在命令行使用npm包管理工具了
[node官网下载](https://nodejs.org/en/download/)

### npm初始化项目
```shell
npm init -y //生成package.json

```

### npm安装包
```shell
npm install module-name --global | -g      //全局安装
npm install module-name --save | -S      //自动把模块和版本号添加到dependencies(生产环境)部分
npm install module-name --save-dev | -D   //自动把模块和版本号添加到devDependencies(开发环境)部分

npm install||i //项目中 npm install 下载当前目录下package.json的所有包
npm i --production //只安装生成环境的包

npm list //依赖树

npm view jquery versions //查看插件的所有版本 通过 jquery@x.x.x 安装指定版本

npm updata //将配置文件中各个插件未锁定的版本位更新到最新
版本符号:
^x.x.x 开头，锁定主版本
~x.x.x 开头，锁定主版本和次版本
x.x.x  全部锁定
*      升级最新版本

npm outdated //查看过期包 

npm cache clean --force //清除npm缓存，安装错误之后建议清一下再装

npm config get registry  //查看当前源
npm config set registry https://registry.npm.taobao.org/  //设置淘宝源

```
> 安装生产环境依赖的模块，即项目运行时的模块，例如react，react-dom,vue,jQuery等类库或者框架
> 安装开发环境依赖的模块，即项目开发时的模块，例如babel、webpack等

### 自定义npm包
1. npmjs.com 注册账户
2. 包的目录下npm adduser，输入用户名、密码、邮箱（源是https://registry.npmjs.org/才行）
3. npm publish

## npm脚本

```json
{
    "scripts":{ 
        "start":"node -v", //值可设置一切命令行可运行的命令
        "test1":"node ./script.js & ./node script2.js", //并行执行
        "test2":"node ./script.js && ./node script2.js", //串行执行 script.js执行完才会执行2
        "test3":"echo $npm_package_config_env", //命令行中使用config定义的变量
    },
    "config": {
        "env": "envvalue" //通过脚步运行js文件才能同过 process.env.npm_package_config_env 获取到
    },
}
npm run test1 //运行（start、test等可以简写不需要run）
npm start
npm test
```