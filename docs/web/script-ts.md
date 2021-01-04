---
title: TypeScript 基础
---
## 安装
```shell
npm install -g typescript
# 查看版本
tsc -v

# vscode直接右键运行ts文件
npm install -g ts-node
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
>  这是一种轻量的为函数或者变量提添加的约束，冒号后面的都是类型

```javascript
let age: number = 20;
function tsfun(str: string) {
    console.log(str);
}
//如果类型不对,编译时会报错
tsfun("str");

```
### 基础数据类型
```javascript
let a: string = "str";
let b: number = 20;
let c: boolean = true;
let d: string | number = 20; //联合类型

let arr: number[] = [1, 2, 3]; //数组 只能放数字
let tuple: [string, number] = ["str", 20]; //元组：固定元素与类型
let e: null = null;
let f: undefined = undefined;

//枚举
enum USER_ENUM {
    USER,
    ADMIN,
    THREE = "three",
}
console.log(USER_ENUM.USER); //0
console.log(USER_ENUM.ADMIN); //1
console.log(USER_ENUM.THREE); //three

//any 都可以类型
const arr2: any = ["1", 2];

//object 非基础数据类型
const create = (obj: object) => {};
create([]);
create({});
create(() => {});


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

//====================================
//定义一个接口,用来描述对象形状的interface类型
interface Person {
    readonly firsName: string; //名称定义好后不能随意更改
    lastName: string;
    age?: number; //可填可不填
}
let per1: Person = {
    firsName: "liao",
    lastName: "zhongxun",
};

//类型断言,使Person中不存在的key属性不会报错
let per2: Person = {
    ...per1,
    key: ["xxx", 12],
} as Person;

//接口扩展
interface Persion2 extends Person {
    type: string;
    [key: string]: any; //任意类型,创建对象时使Persion2中不存在的key属性不会报错
}
let per3: Persion2 = {
    ...per1,
    type: "extend",
    a: "2",
    c: ["xxx", 12],
};



```

### 函数
> test(变量,变量): 返回值{}
```javascript
//函数 参数、返回值
function test(a: string, b: string): string {
    return a + b;
}

//声明一个类型:一般在定义联合类型或定义临时变量时可以使用
type Sum = (a: string, b: string) => string;

//interface 声明类型可以继承,可以被类来实现
// interface Sum {
//     (a: string, b: string): string;
// }

let test2: Sum = (a: string, b: string): string => a + b;
//test2类型 (a: string, b: string) =>string,vscode鼠标移入会自动推导出来

```
### 泛型
> 泛型，在代码执行是传入类型，来确定结果
```javascript
function createArray<T>(value: T): T[] {
    return [value];
}
//let caarr = createArray<number>(1); //固定了类型一定要传number
let caarr = createArray("1"); //传什么类型T就自动推导成什么类型

//多个泛型实现反转
let swap = <T, K>(tuple: [T, K]): [K, T] => {
    return [tuple[1], tuple[0]];
};

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

