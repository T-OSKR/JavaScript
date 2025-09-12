// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// (function wrap in)()  --> first() is where we write function defination and second() is to execute function

// iife - jo function immediaitely execute ho jaya and global scope k pollution se problem hoti hai kafi bar, jo bhe declaration hai vahan pr uska pollution ko hattana k liye iife ka use kiya.

// iife ko stop krna k liye use ;

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
