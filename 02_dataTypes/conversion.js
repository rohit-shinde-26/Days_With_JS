let score = "33";

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number (score);
console.log(typeof valueInNumber);

let a = "56xyz";
let value = Number (a);
console.log(value);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0;


let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);