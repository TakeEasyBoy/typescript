/**
 * 语法特性
        类 Classes
        接口 Interfaces
        模块 Modules
        类型注解 Type annotations
        编译时类型检查 Compile time type checking
        Arrow 函数 (类似 C# 的 Lambda 表达式)

 */
// 定义一个area函数
function area1(shape) {
    var area = shape.width * shape.height;
    return `Im ${shape.name} with area ${area} cm!`;
}
// 调用的时候需要将接口所有的参数进行赋值,否则会报错
console.log(area1({ name: "正方形", width: 120, height: 200, color: 'blue' }));
// 箭头函数表达式,同样作为绑定当前this作用域的功能
var shape = {
    name: '正方形',
    popup: function () {
        console.log(`这是内部的 popup() ${this.name}`);
        setTimeout(() => {
            console.log(`inside settimeout ${this.name}`);
        }, 1000);
    }
};
shape.popup();
/**
 * 类
    TypeScript支持集成了可选的类型批注支持的ECMAScript 6的类。
    Public 成员可以在任何地方访问， private 成员只允许在类中访问。
    class Shape_2 {
    area:number;
    color:string;//
    constructor(public name:string,width:number,height:number) {
        this.area = width * height;
        this.color = 'pink'
    }
    shoutout(){
        return `这个颜色是${this.name},面积:${this.name}`
    }
}
 */
class Shape_som {
    // 构造函数中申明了public后.name会被编译为shape_som的一个属性
    constructor(name, width, height) {
        this.name = name;
        this.area = width * height;
        this.color = 'pink';
    }
    shoutout() {
        return `这个颜色是${this.name},面积:${this.area}`;
    }
}
var squear = new Shape_som('haha', 120, 220);
console.log(squear.shoutout());
// console.log(squear.color);color为private,因此只能在内部访问
/**
 * 继承:
 * 	   继承一个已存在的类并创建一个派生类，继承使用关键字 extends。
 */
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distanse = 0) {
        console.log(`${this.name} moved ${distanse}`);
    }
}
class Pig extends Animal {
    constructor(name) { super(name); }
    move(distance = 66) {
        console.log("Pig------------");
        super.move(distance);
    }
}
class Cock extends Animal {
    constructor(name) { super(name); }
    move(distance = 55) {
        console.log('Cokc----------');
        super.move(distance);
    }
}
let pig = new Pig('pig');
let cock = new Cock('cock');
pig.move();
cock.move(121);
console.log(6 /* ONE */);
function getX(p) {
    return p.x;
}
class CPoint {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
getX(new CPoint(0, 0)); // Ok, fields match
// getX({ x: 0, y: 0, color: "red" });  // Extra fields Ok
// getX({ x: 0 });  // Error: supplied parameter does not match./
/**
 * 基础类型
 */
let x;
x = ['1111', 123];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 4] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
console.log(c);
// 类型断言,告诉编译器我知道我这个变量是干什么的,ts编译的时候就不需要在进行类型检查了
let som = '222';
let strlength = som.length;
console.log(strlength);
// jsx中可以使用这种语法
let some = '123';
let strlegnt2 = some.length;
/**
 * 解构
 */
let xy = [1, 2, 3, 4];
let [f, s, ...rest] = xy;
console.log(f, s, rest);
/**
 * 接口细谈,接受labelObj中指定的参数
 */
function printlable(labelObj) {
    console.log(labelObj.label);
}
let myObj = { size: 12, label: "我是labbel" };
printlable(myObj);
function createSqe(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        // Error: Property 'collor' does not exist on type 'SquareConfig'
        newSquare.color = config.collor; // Type-checker会报错 SquareConfig中没有collor属性
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let squearOptions = { colorr: 'red', width: 120, color: "1231" };
let mysqr = createSqe(squearOptions);
//# sourceMappingURL=hello.js.map