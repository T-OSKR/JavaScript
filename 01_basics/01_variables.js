const accountId = 144553 /*A const remains unchanged until the end of its block scope */

let accountEmail = "hitesh@google.com" /* Used to declare a variable that can be changed (reassigned).Block scoped (only available inside the {} it's declared in). */

var accountPassword = "12345"

accountCity = "Jaipur" /*we can create variables without declaring keywords*/

let accountState;

// accountId = 2 // not allowed


// accountEmail = "hc@hc.com"
// accountPassword = "21212121"
// accountCity = "Bengaluru"

// console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope.
*/


// console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
console.log(typeof this);
