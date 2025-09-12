
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()  -->  sayMyName is refrence and () is execution

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);


function loginUserMessage(username = "sam"){ // if we dont pass an argument it will take sam and if we pass then it will take argument and bycot sam
    if(!username){//!username === undefined
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage()); // when we dont pass any argument it will give undefined

/*
Falsy values in JavaScript:

false
0
"" (empty string)
null
undefined
NaN
*/

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//++++++++++++++++++++++++++++++++++++++++++++++++++++

function calculateCartPrice(val1, val2, ...num1){ // --> ...num1 - rest operator //...num1 ko he rest operator bolta hai aur issi ko spread operator depends on the use case  
    return num1
}

console.log(calculateCartPrice(200, 300, 500, 1000)); // --> val1, val2 ke value print nhe hoonge // [500, 2000]  --> it will store all values in array    // if only one argument and one parameter is passed then value not stored in array

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){ // koi bhe object access kr saktha hain, not only jo object humna declare kiya hai 
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000])); //400