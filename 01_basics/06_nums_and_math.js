const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));  --> gives one character after decimal

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));  --> give roundoff value and return fix length of nos. acc to precision (123.9) 
// If the number has more digits than n, it will round off.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   --> 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); --> Object [Math] {}-->properties not functions
// console.log(Math.abs(-4));  --> changes only neg value to positive
// console.log(Math.round(4.2)); --> gives roundoff value as normal (4) 
// console.log(Math.ceil(4.2)); --> gives always upper roundoff value (5)
// console.log(Math.floor(4.9)); --> gives always lower roundoff value (4)
// console.log(Math.min(4, 3, 6, 8)); --> 3
// console.log(Math.max(4, 3, 6, 8));  --> 8

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)