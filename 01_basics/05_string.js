const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");  --> hitesh50 value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hitesh-hc-com') /* another way to declare strings */

// console.log(gameName[0]);  --> h
// console.log(gameName.__proto__);  --> {} 

// console.log(gameName.length);
// console.log(gameName.toUpperCase());  --> it doesn't change original string, it changes in stack memory
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)  /*zero values not alloweded */
console.log(newString);

const anotherString = gameName.slice(-5, 4)
console.log(anotherString); /*
start → inclusive index
end → exclusive index
If start is negative, JavaScript converts it to:
string.length + start */

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))  /* it tells about that the text or no. is present in it or not */

console.log(gameName.split('-')); /* [ 'hitesh', 'hc', 'com' ] */
/*

let text = "one two three four";
console.log(text.split(" ", 2));  --> (seperator , limit)
// ["one", "two"]

*/