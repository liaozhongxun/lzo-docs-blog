---
title: TypeScript 基础
---
## 安装
```shell
npm install -g typescript
# 查看版本
tsc -v
```
## 编译
### 手动直接编译
```shell
tsc file.ts
```

### vscode自动编译
```shell
# 1. 项目目录生成配置文件 
tsc --init

# 2. 修改配置文件参数 如:
"strict": false 
"outDir": "./js"

# 3.启动监视任务
终端 -> 运行任务 -> 监视xx项目 tsconfig.json
```
## ts语法
### 类型注解
>  这是一种轻量的为函数或者变量提添加的约束

```javascript
let age: number = 20;
function tsfun(str: string) {
    console.log(str);
}
//如果类型不对,编译时会报错
tsfun("str");

```

### 接口
> 接口是一种能力或一种约束
```javascript
//定义一个接口,如果类型不对||使用没有定义的属性||obj属性不够,ts会提示错误
interface Person {
    firsName: string;
    lastName: string;
    age: number;
}
function showName(person: Person) {
    return person.firsName + person.lastName + "," + person.age + "岁";
}
let obj = {
    firsName: "liao",
    lastName: "zhongxun",
    age: 22,
};
showName(obj);

```

### 类
```javascript
//定义一个类
class Person {
    firsName: string;
    lastName: string;
    fullName: string;
    constructor(firsName: string, lastName: string) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.fullName = this.firsName + this.lastName;
    }
}
//实例一个对象
const perso = new Person("liao", "zhongxun");
```

