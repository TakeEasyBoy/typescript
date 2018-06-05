/**
 * 语法特性
		类 Classes
		接口 Interfaces
		模块 Modules
		类型注解 Type annotations
		编译时类型检查 Compile time type checking
		Arrow 函数 (类似 C# 的 Lambda 表达式)

 */

// 定义一个接口,接口可以作为一个类型批注
interface Shape {
    name:string,
    width:number,
    height:number,
	color:string,
	text?:string//问号表示该属性不是必须的
}
// 定义一个area函数
function area1(shape:Shape) {
    var area = shape.width * shape.height;
    return `Im ${shape.name} with area ${area} cm!`
}
// 调用的时候需要将接口所有的参数进行赋值,否则会报错
console.log(area1({name:"正方形",width:120,height:200,color:'blue'}));

// 箭头函数表达式,同样作为绑定当前this作用域的功能
var shape = {
	name:'正方形',
	popup:function(){
		console.log(`这是内部的 popup() ${this.name}`);
		setTimeout(()=>{
			console.log(`inside settimeout ${this.name}`);
		},1000)
	}
}
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
	area:number;
	private color:string;
	// 构造函数中申明了public后.name会被编译为shape_som的一个属性
	constructor(public name:string,width:number,height:number) {
		this.area = width * height;
		this.color = 'pink'
	}
	shoutout(){
		return `这个颜色是${this.name},面积:${this.area}`
	}
}
var squear = new Shape_som('haha',120,220);
console.log(squear.shoutout());
// console.log(squear.color);color为private,因此只能在内部访问

/**
 * 继承:
 * 	   继承一个已存在的类并创建一个派生类，继承使用关键字 extends。
 */

 class Animal {
	 constructor(public name:string){}
	 move(distanse:number = 0){
		 console.log(`${this.name} moved ${distanse}`);
	 }
 }
 class Pig extends Animal{
	 constructor(name:string){super(name)}
	 move(distance = 66){
		 console.log("Pig------------");
		 super.move(distance)
	 }
 }
class Cock extends Animal{
	constructor(name:string){super(name)}
	move(distance = 55){
		console.log('Cokc----------');
		super.move(distance)
	}
}
let pig = new Pig('pig')
let cock = new Cock('cock')
pig.move();
cock.move(121);

/**
 * 枚举
 */
const enum op{
	ONE = 6,
	TWO,
	THREE,
	FOUR,
	FIVE
}
console.log(op.ONE);

/**
 * declare
 */
// interface JQuery {
//     text(content: string);
// }

// interface JQueryStatic {
//     get(url: string, callback: (data: string) => any);
//     (query: string): JQuery;
// }

// declare var $: JQueryStatic;

// $.get("http://mysite.org/divContent",
//       function (data: string) {
//           $("div").text(data);
//       }
// );
interface Point {
    x: number;
    y: number;
}

function getX(p: Point) {
    return p.x;
}

class CPoint {
    x: number;
    y: number;
    constructor(x: number,  y: number) {
        this.x = x;
        this.y = y;
    }
}

getX(new CPoint(0, 0));  // Ok, fields match

// getX({ x: 0, y: 0, color: "red" });  // Extra fields Ok

// getX({ x: 0 });  // Error: supplied parameter does not match./

/**
 * 基础类型
 */
let x : [any,number];
x = ['1111',123]
// 枚举
enum Color {Red = 1, Green = 2, Blue = 4};
let c: Color = Color.Green;
console.log(c);
// 类型断言,告诉编译器我知道我这个变量是干什么的,ts编译的时候就不需要在进行类型检查了
let som:any = '222';
let strlength:number = (<string>som).length
console.log(strlength);
// jsx中可以使用这种语法
let some:any = '123';
let strlegnt2:number = (some as string).length

/**
 * 解构
 */
let xy = [1,2,3,4]
let [f,s,...rest] = xy
console.log(f,s,rest);

/**
 * 接口细谈,接受labelObj中指定的参数
 */
function printlable(labelObj:{label:string}){
	console.log(labelObj.label);
}
let myObj = {size:12,label:"我是labbel"}
printlable(myObj);

/**
 * 额外的属性检查
 */
interface SquareConfig {
	color?:string;
	width?:number;
	[property:string]:any; // 如果没有生什么一个任意数量的其他类型 Type-checker会报错 SquareConfig中没有collor属性
}
function createSqe(config:SquareConfig):{color:string;area:number}{
    let newSquare = {color: "white", area: 100};
    if (config.color) {
        // Error: Property 'collor' does not exist on type 'SquareConfig'
        newSquare.color = config.collor;  // Type-checker会报错 SquareConfig中没有collor属性
    }
    if (config.width) {
       newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let squearOptions = {colorr:'red',width:120,color:"1231"};
let mysqr = createSqe(squearOptions)
