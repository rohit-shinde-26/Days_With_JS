// Stack memory
// In all primitive type stack was used
// it make a copy of that variable thats why original value has not change

let myname = Rohit;

let anotherName = myname;
anotherName = "Rudra";

console.log(myname);  // Rohit
console.log(anotherName);  // Rudra



// Heap memory 
// In all non primitive type the heap memory has  used
// it make a reference of original value 


let user = {
    email : "rohit@google.com",
    upi : "rohit@ybl"
}
let userTwo = user;
userTwo.email = "rohit@microsoft.com"

console.log(user);  // rohit@microsoft.com
console.log(userTwo);  // rohit@microsoft.com

