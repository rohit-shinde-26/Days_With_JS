const score = 500;
// console.log(score);

const balance = new Number(100)
// console.log(balance);  // prints with DataType [Number: 100]

// console.log(balance.toString().length);  // prints length
// console.log(balance.toFixed(2));  // after dot the 2 number has prints

const otherNumber = 2.54654;
// console.log(otherNumber.toPrecision(3));  // prints three number


const hundreds = 10000000000;
// console.log(hundreds.toLocaleString());  // add comma in number 10,000,000,000






// ----------------------------------------- Maths ---------------------------------------------------------------
// console.log("------------------------------maths----------------------------------------------------------");


console.log(Math)  // it is an object
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,8,6,2,4,2,1));


console.log(Math.random());  // prints random number from 0 to 1
// console.log((Math.random()*10) + 1); //  make it bigger 


const min = 10;
const max = 20;
// console.log(Math.floor(Math.random() * (max - min +1)) + min);