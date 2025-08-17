let score = "hitesh"

// console.log(typeof score); --> string
// console.log(typeof(score)); -- string

let valueInNumber = Number(score)
// console.log(typeof valueInNumber); --> number
// console.log(valueInNumber); --> NaN (eg: '33bac'), if score: null=0, undefined=NaN, bool(true/false)=1/0


// "33" => 33
// "33abc" => NaN (but its type is a number)
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); 

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber); --> 33
// console.log(typeof stringNumber); --> string

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue); --> -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "hitesh"

let str3 = str1 + str2
// console.log(str3); --> hellohitesh

// console.log("1" + 2); -->12
// console.log(1 + "2"); --> 12
// console.log("1" + 2 + 2); --> 122
// console.log(1 + 2 + "2"); --> 32
           
// console.log(1 + 22 + "33" +1 + 10); --> 2333110

// In upper practices if the string is first whole will be treated as string and if the string is at last then first perform operaions and the convert...

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);  in this, The + in front is not addition. It’s a unary plus operator.It tries to convert the value into a number. (+true  →  Number(true)  →  1 )
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
