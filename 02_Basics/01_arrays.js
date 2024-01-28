// Array
// An array is a special variable/ Object, which can hold more than one value
const myArr = [0,1,2,3,4,5];
const myHeros = ["ironMan","spiderMan"]

// console.log(myArr[2])  // acess element in array 


// Array methods
// myArr.push(10)  // add element in an array at the last
// myArr.pop()  // remove last element from array

// myArr.unshift(9)  // add element start of an array
// myArr.shift()  //remove start element from array

// console.log(myArr.includes(9));  // IT ASK QUESTION TO ARRAY
// console.log(myArr.indexOf(3));  //  it shows the index of element which you want to find



const newArr = myArr.join(); // it bind with convert into string

// console.log(myArr);
// console.log(newArr);  // string value


//slice   splice

console.log("A",myArr);


const myn1 = myArr.slice(1,3)  // return 1, 2
console.log("B",myArr);
console.log(myn1);

// Splice operation after original array was changed
const myn2 = myArr.splice(1,3);  // return 1,2,3
console.log("c",myArr);
console.log(myn2);