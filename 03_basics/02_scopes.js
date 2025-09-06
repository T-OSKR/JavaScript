//var c = 300  --> Global Scope
let a = 300
if (true) {  // block scope
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);

// *******************IMPORTANT*******************
// scope on browser console and on coding environment through node at that time global scopes is different

function one(){
    const username = "hitesh"
    console.log("1");

    function two(){
        const website = "youtube"
        console.log(website);
        // console.log(username);
    }
    // console.log(website);
    console.log("2");
    two()
    console.log("3");
}

one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))  //Execution successful

function addone(num){
    return num + 1
}



addTwo(5)  // Error because addTwo is before function decleration
const addTwo = function(num){ //Expression bhe bol diya jata hai addTwo ko
    return num + 2
}