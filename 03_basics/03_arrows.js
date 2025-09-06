const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  //this can be used to refer current context - means inside {}  
        console.log(this);
    }

}

// user.welcomeMessage()  --> hitesh , welcome to website
// user.username = "sam"
// user.welcomeMessage()  --> sam , welcome to website

// console.log(this);  --> {} , but browser k andr jo global obj hai wo hai window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  --> this/context can be used only in objects not in functions - it will gives undefined for (this.username)
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {  --> When we use curly braces we must use return keyword
//     return num1 + num2          --> Explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2  --> implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) --> no use of return keyword

const addTwo = (num1, num2) => ({username: "hitesh"})  // object ko return krna k liye parenthesis mai wrap krna he pda ga


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()