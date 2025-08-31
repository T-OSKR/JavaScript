// singleton
// Object.create  --> constructor method k through  

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //another way to access key
// console.log(JsUser["full name"])
// console.log(JsUser[mySym]) 
// console.log(JsUser.age); --> 18
// console.log(JsUser["age"]);  --> 18

JsUser.email = "hitesh@chatgpt.com"  //change the values of the keys
// Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);  // this can be used to access the properties of the object  (`string interpollation`)
}

console.log(JsUser.greeting);  // function (anonymous)  function not execute only refrence is back
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());