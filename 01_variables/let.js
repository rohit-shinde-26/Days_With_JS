// Before ES6(2015), Javascript did not have Block scope
// JavaScript had Global Scope and Function Scope.

// ES6 introduced the two new JavaScript keywords: let and const.

// These two keywords provideed Block Scope in JavaScript:

//Block Scope
{
    let x = 2;
  }
  // x can NOT be used here


//  Global Scope
// Variables declared with the var always have Global Scope.
// Variables declared with the var keyword can NOT have block scope:
{
    var y = 2;
  }
  // y CAN be used here


 // Example:
// With let you can not do this:

 // let n = "Hanuman";
 
// let n = Shree Ram;


// Variables defined with var can be redeclared.
// With var you can do this:

var m = "RAM";

var m = 0;