// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// avoid the following comparison
console.log(null > 0);  // false
console.log(null == 0);  // false
console.log(null >= 0);  // true

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// all false


// === 

console.log("2" === 2);  // false
// it checks value as well as its datatype strictly