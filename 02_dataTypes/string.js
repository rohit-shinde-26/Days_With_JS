let name =  "ram";
let age = 20;

// console.log("my name is "+(name)+ " and age is "+(age));   //here it is the oldest technique in js
console.log(`my name is ${name} and i am ${age} years old`)  // this must be use which is called as template literals


const gameName = new String('CYBERPUNK')
console.log(gameName[0]);  // 0:C 1:Y 2:B 3:E 4:R 5:P 6:U 7:N 8:K
console.log(gameName[1]);
console.log(gameName[2]);



console.log(gameName.__proto__);  // {} here the object we can see the all value in browser 
console.log(gameName.length);  // find the legth of an string
console.log(gameName.charAt(4));  // see the character at position
console.log(gameName.indexOf('P'));  // find the index of caheracter
console.log(gameName.toLocaleLowerCase());  // convert into an lowercase


const newGame = gameName.substring(0,5);
console.log(newGame);  // find string beetween 0 and 5

const anotherGame = gameName.slice(-8,5);  // negative sign must write the string from reverse
console.log(anotherGame);

const newString = "  hello   ";   
console.log(newString);
console.log(newString.trim());  // trim process remove the white spaces from string


const url = "http://rohit.com/shinde%20in";
console.log(url.replace('%20','-'));  // it is replace the text
