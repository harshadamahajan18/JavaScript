// Primitive

// 7 types : String, Number, Boolean, null(empty), undefined, Symbol, BigInt

// JS is Dynamic Typed Language
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); // false

// const bigNumber = 343456888984n  // bigInt



// Reference (Non-Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naaagraj", "doga"];
let myObj = {
    name: "harsha",
    age:23
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// Reading purpose

// https://262.ecma-international.org/5.1/#sec-11.4.3