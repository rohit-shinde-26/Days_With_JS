// singleton
// object.create
// object literals

const mysym = Symbol("key1")  //defined the symbol


const JsUser = {
    name : "Rohit",
    "Full Name" : "Rohit Sanjay Shinde",
    age : 20,
    location: "Sangamner",
    email : "sangamner@gmail.com",
    isLoggedIn : false ,
    lastLoginDays : ["Monday", "Sturday"],
    [mysym] : "mykey1",  // add symbol in object
}

console.log(JsUser.email);
console.log(JsUser["Full Name"]);  // required if the condition is in string
console.log(JsUser[mysym]);

JsUser.email = "ram@google.com";
// Object.freeze(JsUser)  // after freeze object cant change 
JsUser.email = "abhi@microsoft.com"
console.log(JsUser);


// define function
JsUser.msg = function(){
    console.log("hello its me");

}
JsUser.msgtwo = function(){
    console.log(`hello its me, ${this.name}`);
    // use backtics called string interpolation 
}
console.log(JsUser.msg);  // undefined
console.log(JsUser.msg());  
console.log(JsUser.msgtwo());  