let newuser = new Object(); // Object Constructor syntax
let user2 = {}; // Object literal syntax

let user = {
    name: "John",
    age: 20,
    gender: "male",
    email: "john@example.com"
}

// get property values of the object:
console.log(user.name); // John
console.log(user["age"]); // 20
console.log(user.gender); // male
console.log(user.email); // john@example.com


// add new property to the object:
user.isAdmin = true; // add new property to the object
console.log(user.isAdmin); // true


// delete property from the object
delete user.age;
console.log(user.age); // undefined


// We can also use multiword property names, but then they must be quoted:
let user3 = {
    "first name": "Donald",
    "last name": "Trump",
    "likes birds": true
}

console.log(user3["likes birds"]); // true


// That is called a “trailing” or “hanging” comma. Makes it easier to add/remove/move around properties, because all lines become alike.

let user4 = {
    name: "John",
    age: 25,
    isAdmin: true,
}


// Square brackets

// set 
user["likes apple"] = true; // set property with multiword name

// get
console.log(user["likes apple"]); // true

// delete
delete user["likes apple"];

console.log(user["likes apple"]); // undefined
