const name = "Rohit"
const repoCount = 50

// console.log(name + repoCount + " Value");  // now it is outdated
// String interpolation (use backticks)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Rohit-S-Shinde')

// console.log(gameName[0]);  // h
// console.log(gameName.__proto__);  // {}


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  // see the character
console.log(gameName.indexOf('t'));  // see the index 

const newString = gameName.substring(0, 4)
console.log(newString);  // prints value between 0 & 4

const anotherString = gameName.slice(-8, 4)  // neg value satrts with end
console.log(anotherString);  

const newStringOne = "   Rohit   "
console.log(newStringOne);
console.log(newStringOne.trim());  // it removes whitespaces

const url = "https://github.com/rohit%20shinde"

console.log(url.replace('%20', '-')) 

console.log(url.includes('sundar'))  // check the word is here or not

console.log(gameName.split('-'));  // It seprates words by anything