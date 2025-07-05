// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); In comparisons like >, <, >=, <=, JavaScript converts strings to numbers if the other value is a number.  "2" → Number("2") → 2

// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
/*The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) nı >= 0 is true and (1) null > 0 is false.*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// null is only loosely equal to undefined, and not equal to any number, string, or boolean.

// === 

console.log("2" === 2);