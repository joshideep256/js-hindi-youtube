//primitive

// 7 types:string,number,boolean,null,undefined,object,symbol,BigInt

const score = 100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id===anotherId);

const bigNumber=1278417146723515552n

//Reference (Non primitive)

//Array,Objects,Functions

const heros=["shaktiman","naagraj","doga"];
let myObj ={
    name:"hitesh",
    age:22,
}

const myFunction=function(){
    console.log("hello world");
}

console.log(typeof myFunction)//object function