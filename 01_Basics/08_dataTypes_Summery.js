//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt
// it is call by value



// it dont have special datatype for . values
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  // it completely empty
let userEmail;   // undefined



const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);  // false : written value are different

// const bigNumber = 3456543576654356754n //n for bigint



// Reference (Non primitive)

// Array, Objects, Functions
// all reference typeof is object
const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}


// it is used for seeing datatype of any id
console.log(typeof anotherId);


// always typeof null is object


// see the following documentation
// https://262.ecma-international.org/5.1/#sec-11.4.3