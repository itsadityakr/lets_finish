// Fundamentals of JS
// Objects
// Functions Return
// async

// Objects => key: value Pairs

const mailOfAditya = "email@gmail.com";
const obj = {
    name: "aditya",
    age: 25,
    email: mailOfAditya,
};

console.log(obj[`name`]); // aditya
console.log(obj[(`name`, `email`)]); // will print only the last index // email@gmail.com

// obj.age = 10;
// console.log(obj.age); // 10 we can update the value

// if you strict and dont want that values should update use "freeze"
Object.freeze(obj);
obj.age = 10;
console.log(obj.age);

// in js we can find the length of array like arr.length but we can also find the length of function like

function abcd1() {
    console.log("Empty Function");
}

console.log(abcd1.length); //0 this is the number of parameter

function abcd2(a, b, c, d) {
    console.log("Empty Function");
}

console.log(abcd2.length); //4 like we have a,b,c,d because typeof function() is 'function' but abcd is an object
console.dir(abcd2); // (ƒ) abcd2(a, b, c, d)
