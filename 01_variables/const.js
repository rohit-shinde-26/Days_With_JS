// The const keyword was introduced in ES6 (2015)
// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope

// Cannot be Reassigned
// const PI = 3.141592653589793;
// PI = 3.14;      // This will give an error
// PI = PI + 10;   // This will also give an error

// Incorrect
// const PI;
// PI = 3.14159265359;+


// -------------------------------------------------------------------------------------------------------
// Use const when you declare:

// A new Array
// A new Object
// A new Function
// A new RegExp

// --------------------------------------------------------------------------------------------------------
// Constant Arrays
// You can change the elements of a constant array:
// You can create a constant array:
const bike = ["MT15", "Pulser", "TATA"];

// You can change an element:
bike[0] = "Himalaya";

// You can add an element:
bike.push("BMW");
console.log(bike);


//But you can NOT reassign the array:
// const cars = ["Saab", "Volvo", "BMW"];
// cars = ["Toyota", "Volvo", "Audi"];    // ERROR


// Constant Objects
// You can change the properties of a constant object:

// Example
// You can create a const object:
const car = {type:"Seedan", model:"500", color:"white"};
 
// You can change a property:
car.color = "red";

// You can add a property:
car.owner = "Sarthak";
console.log(car);


// ------------------------------------
// All about variables 
/*
const x = 2;     // Allowed
x = 2;           // Not allowed
var x = 2;       // Not allowed
let x = 2;       // Not allowed
const x = 2;     // Not allowed

{
  const x = 2;   // Allowed
  x = 2;         // Not allowed
  var x = 2;     // Not allowed
  let x = 2;     // Not allowed
  const x = 2;   // Not allowed
}

*/ 