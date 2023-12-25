// const tinderUser = new Object()

const instaUser = {}

instaUser.id = "x_rohit_02"
instaUser.name = "Rohit Shinde"
instaUser.isLoggedIn = false


// console.log(instaUser);



// objects inside objects
const regUser = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstname : "ram",
            lastname : "charan"
        }
    }
}

// console.log(regUser.fullname.userFullname);




// merge two objects 
const obj1 = {
    1:"a",
    2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}
// const obj3 = {obj1,obj2}  // simple form
// it is used to assign objects thats why curley brases used 
// {} it is target and obj1 and obj2 has source 
// const obj3 = Object.assign({},obj1, obj2)

const obj3 = {...obj1,...obj2}  // used for spread operator
console.log(obj3);