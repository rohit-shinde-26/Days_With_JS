// Dates
// Date will be start from Jan 1 1970
// date comes with miliseconds thats why it confusing

let myDate = new Date()
// console.log(myDate.toString());  // exact time with date
// console.log(myDate.toDateString());  // Date with day
// console.log(myDate.toLocaleString());  // date wth time
// console.log(typeof myDate);  // object


// YYYY MM DD
// Month will be start from 0 in js
// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})