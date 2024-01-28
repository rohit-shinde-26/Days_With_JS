const marvel_heros = ["thor" , "IronMan", "Spiderman"]
const Dc_heros = ["superMan","flash","batman"]

// marvel_heros.push(Dc_heros) // array inside array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);  // access value array inside array

// marvel_heros.concat(Dc_heros) // it make as same as push 
// const allheros = marvel_heros.concat(Dc_heros) 
// console.log(allheros);


// spread operator
const all_new_heros = [...marvel_heros, ...Dc_heros]  // It merge properly 
// console.log(all_new_heros);


const anotherArray = [1,2,3,[4,5,6],7,,[6,7,[4,5]]]
const real_another_array = anotherArray.flat(Infinity)   // It makes all in single array with spread
console.log(real_another_array);


console.log(Array.isArray("Rohit"))  // Check the array or not
console.log(Array.from("Rohit"));  // Convert into array
console.log(Array.from({name:"Rohit"}));  // if not possible to convert then it shows empty array



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));  // returns new array with set of elements
