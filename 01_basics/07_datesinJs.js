// Dates

/* new Date() → gives you a Date object (readable form).
Date.now() → gives you a timestamp (number). */

let myDate = new Date()
// console.log(myDate.toString()); -->  Wed Aug 27 2025 19:59:57 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  -->  Tue Aug 26 2025
// console.log(myDate.toLocaleString());  -->  27/8/2025, 8:03:20 pm
// console.log(typeof myDate);  -->  object

// let myCreatedDate = new Date(2023, 0, 23)  --> 0 = january  -->  Mon Jan 23 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)  -->23/1/2023, 5:03:00 AM
// let myCreatedDate = new Date("2023-01-14")  /* (yy-mm-dd)-->14/1/2023, 5:30:00 am -> time because of INDIA - In India (UTC+5:30)*/
// console.log(myCreatedDate.toLocaleString());
let myCreatedDate = new Date("02-12-2024")  /* mm-dd-yy */
// console.log(myCreatedDate.toLocaleString());  --> 12/2/2024, 12:00:00 am 

let myTimeStamp = Date.now()
// Returns the current timestamp
// console.log(myTimeStamp);  -->  e.g. 1724629245234   (milliseconds since 1970-01-01)
// That number means: How many milliseconds have passed since 1970-01-01T00:00:00Z

// console.log(myCreatedDate.getTime());  -->  e.g. 12346890244  (Timestamp of that specific Date object)  -- it will be applied on Date object
// console.log(Math.floor(Date.now()/1000));  --> time in seconds.

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());  --> day of the week eg wed -> 3

// `${newDate.getDay()} and the time `

let a = newDate.toLocaleString('default', { 
    weekday: "long",
    
})
console.log(a); /* Thursday */
