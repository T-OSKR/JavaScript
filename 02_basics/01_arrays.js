// array
// In array we can store different types of elements,we can store elements in square brackets
// Js arrays are resizeable and can be mix of diff. data types and inside array we can store another array
// for accessing arrays element we can use console.log(var[indexing])
// Js array copy operation creates shallow copies - share the same refrences(change in orignal arrays), deep copies - don't share the same refrence
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)  /* another way to declare arrays */
// console.log(myArr[1]);  --> 1

// Array methods

// myArr.push(6)  --> [0, 1, 2, 3, 4, 5, 6]
// myArr.push(7)  --> [0, 1, 2, 3, 4, 5, 6, 7]
// myArr.pop()  --> remove last element
// console.log(myArr);

// myArr.unshift(9)  ---> it will add in the starting of the array at index 0
// myArr.shift()  --> it will remove 0th index digit

// console.log(myArr.includes(9));  -->  false
// console.log(myArr.indexOf(10));  -->  -1 (always gives -1 value if element i snot present)
// console.log(myArr.indexOf(3));  -->  3

// const newArr = myArr.join()

// console.log(myArr);  -->  [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr);  -->  0,1,2,3,4,5  (actually the type of this array is change to string with comma seperated)


// slice, splice
// slice --> returns a copy of a section of an array 
// splice --> change in original array

console.log("A ", myArr);
// A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3) /* 3 not included  , this is indexing() */
console.log(myn1);
// [1, 2]

console.log("B ", myArr);
// B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
// C  [ 0, 4, 5 ]  --> these are remaining value

console.log(myn2);
// [ 1, 2, 3 ]  --> these values was spliced