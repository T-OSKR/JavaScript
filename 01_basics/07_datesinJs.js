// Dates

let myDate = new Date()
// console.log(myDate.toString());  --> Tue Aug 26 2025 03:50:38 GMT+0530 (India Standard Time)
// console.log(myDate.toDateString());  -->  Tue Aug 26 2025
// console.log(myDate.toLocaleString());  -->  26/8/2025, 3:50:38 am
// console.log(typeof myDate);  -->  object

// let myCreatedDate = new Date(2023, 0, 23)  --> 0 = january
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("02-12-2024")
// console.log(myCreatedDate.toLocaleString());  --> 12/2/2024, 12:00:00 am  in that condition where date is stored it will start the time from 12:00:00 am

let myTimeStamp = Date.now()

// console.log(myTimeStamp);  -->  e.g. 1724629245234   (milliseconds since 1970-01-01)
// That number means: How many milliseconds have passed since 1970-01-01T00:00:00Z

// console.log(myCreatedDate.getTime());  -->  e.g. 12346890244  (Timestamp of that specific Date object)  -- it will be applied on Date object
// console.log(Math.floor(Date.now()/1000));  --> time in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());  --> day of the week

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
