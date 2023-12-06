// Stack (primitive), Heap (Non-primitive) 
let myname = "ram";
let anothername = myname;
console.log(anothername);
anothername = "metaverse";

console.log(myname);
console.log(anothername);





let userOne = {
    name: "akash",
    age : 20,
    UpiId : "jnkbn@ybl"
}

let usertwo = userOne;

usertwo.name = "abhay";

console.log(userOne);
console.log(usertwo);