// Dates

let myDate = new Date();
console.log(myDate.toString()); // Sat Dec 23 2023 09:03:34 GMT+0530 (India Standard Time
console.log(myDate.toDateString());// Sat Dec 23 2023
console.log(myDate.toLocaleString()); // 12/23/2023, 9:03:34 AM
console.log(typeof myDate);  // object

// let myCreatedDate = new Date(2023, 0,23, 5, 3)  // 1/23/2023, 5:03:00 AM1/23/2023, 5:03:00 AM
// let myCreatedDate = new Date(2023, 0,23) // 1/23/2023, 12:00:00 AM
// let myCreatedDate = new Date("2023-01-26") // 1/26/2023, 5:30:00 AM 

console.log(myCreatedDate.toLocaleString());


// Timestamps 
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));


// let newDate = new Date();
// console.log(newDate);  // prints the date
// console.log(newDate.getMonth()); // only prints its month
// console.log(newDate.getDay());  // only prints its date
