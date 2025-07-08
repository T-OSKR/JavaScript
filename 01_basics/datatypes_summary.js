// kis tra say data memory mai store hota hai aur kis tra se data ko access kr skta ho... in basis pr     categorization ho rkhi hai data ke

//  Primitive (call by value ->> copy mai changes hoti hai)
// js is dynamically typed

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); /* id != anotherId */

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)  -> dataTypes ka return function object he hota hai... 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
// inside{} is a object, and we can also store obj in variables

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3