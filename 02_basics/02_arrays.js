const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)  -->  ek array k and dusra array hai but as an element

// console.log(marvel_heros);  -->  [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]); -->  flash

const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  -->  [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const all_new_heros = [...marvel_heros, ...dc_heros]  --> spread operator

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)  -->  it will convert or create one array ()--> is called depth.
//console.log(real_another_array);


// When we scrap a data from any website we got data in different formats, so we can ask question 
console.log(Array.isArray("Hitesh")) // here we can ask question is this an array or not  //false
console.log(Array.isArray(new Array())); // true
console.log(Array.isArray(undefined));   // false

console.log(Array.from("Hitesh")) // [ 'H', 'i', 't', 'e', 's', 'h' ]
console.log(Array.of("Hitesh")) // [ 'Hitesh' ]
console.log(Array.from({name: "hitesh"})) // interesting // [] --> it will give an empty array because it cannot convert key value into array

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3)); //  [ 100, 200, 300 ]

// You can use Array.of(score1, score2, score3) because Array.of accepts individual values.You cannot use Array.from(score1, score2, score3) because Array.from expects one iterable/array-like input, not separate numbers.