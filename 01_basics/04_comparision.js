// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); In comparisons like >, <, >=, <=, JavaScript converts strings to numbers if the other value is a number.  "2" → Number("2") → 2
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0); /*--> no coercion happens here (Automatically converting a value from one type to another during operations)   /  If values are of different types, JavaScript tries to convert both to numbers (except for == with null or undefined, which is special)*/
console.log(null >= 0);
/*The reason is that an equality check == and comparisons > < >= <= work differently.
Comparisons convert null to a number, treating it as 0.
That's why (3) null >= 0 is true and (1) null > 0 is false.*/

/*One Basic Rule for Type Coercion in Comparison Checks (==, <, >, etc.): 

The Rule:
If both values are strings, JavaScript does string comparison (based on Unicode values).
If the values are different types, JavaScript converts both to numbers, then compares.

Strings compared directly (no coercion to numbers):
console.log("5" < "10"); false → because it's string comparison
// "5" comes after "1" in Unicode, so "5" > "10" as strings
// "5" → first character is '5' (Unicode: 53)
"10" → first character is '1' (Unicode: 49)
Since '5' (53) is greater than '1' (49), "5" < "10" evaluates to false.

Different types → Coercion to numbers:
console.log("5" < 10);    // ✅ true → "5" becomes 5 → 5 < 10
console.log(true < 2);    // ✅ true → true becomes 1 → 1 < 2
console.log(null < 1);    // ✅ true → null becomes 0 → 0 < 1

Non-numeric strings ("abc123, sdf") → NaN:
Any comparison with NaN is always false, even NaN < NaN
console.log("abc" < 10);  // false → "abc" → NaN → NaN < 10 → false
*/

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// undefined will always gives false output for the operations.
// null is only loosely equal to undefined, and not equal to any number, string, or boolean.
/*
Loose equality (==)

null == undefined → true ✅

null == 0 → false

null == false → false

null == "" → false */

// === 

console.log("2" === 2);

// *********************** Notes ***********************

/*Two Types of Coercion:
1. Implicit Coercion (Automatic)
JavaScript does the conversion on its own.

"5" + 1    // "51"   (number 1 is coerced to string)
"5" - 1    // 4      (string "5" is coerced to number)
true + 1   // 2      (true becomes 1)
null + 1   // 1      (null becomes 0)

2. Explicit Coercion (Manual)
You convert it yourself using functions like Number(), String(), etc.

Number("123");    // 123
String(123);      // "123"
Boolean(0);       // false
 */

// *********************** Notes ***********************

// One Basic Rule for Type Coercion in Equality Checks (==):

/*Numbers and Strings:
If one operand is a number and the other is a string, it converts the string to a number
"2" == 2  // The string "2" is converted to the number 2.

Booleans:
Booleans are converted to numbers (true becomes 1 and false becomes 0) before comparison.
true == 1  // true is converted to 1.

Null and Undefined:
null and undefined are considered equal to each other but are not equal to any other value.
null == undefined  // true
null == 0          // false

Objects and Primitives:

If one value is an object (including arrays) and the other is a primitive (like a string or number), JavaScript tries to convert the object to a primitive value (often by calling the object's valueOf() or toString() methods) before doing the comparison. */