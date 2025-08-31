// const tinderUser = new Object()  --> this is singleton onject  {}--> empty object
const tinderUser = {} // this is non singelton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// console.log(obj3)  -->  { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
// const obj3 = Object.assign({}, obj1, obj2, obj4)  -->  (target, source)

// const obj3 = {...obj1, ...obj2}
// console.log(obj3);


// when values comes from database we got array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  -->  output values datatype is Array
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));  -->  Array k andr array milta hai first value is key and other is value

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  --> hasOwnProperty - to check the value in the object


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

// Destructuring
const {courseInstructor: instructor} = course
const {coursename} = course

//console.log(courseInstructor);
//console.log(instructor);
console.log(coursename);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]
