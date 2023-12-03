// Primitive Data Types

// 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100;
const scorevalue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123');
const anotherid = Symbol('123');
console.log(id === anotherid);

const bigNo = 65465454455445n;


// Refrence (Non-Primitive) Data Types
// Array, Objects, Functions
const bikes = ["Duke","BMW","Bullet"];
let myObj = {
    name : "Rohit",
    age: 22,
}

const myfun = function(){
    console.log("Hello");
}

console.log(typeof outsideTemp)
console.log(typeof myfun)
