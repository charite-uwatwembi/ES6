// Destructuring Challenge: You're building a user profile system. 
// Create a function extractProfile(user) that takes an object user with properties 
// name, age, city, and occupation (optional). 
// Using destructuring, return a new object containing only the name and city properties.


function extractProfile(user) {
    let {name, age, city, occupation} = user
    return {name, city}
}
let User= {name:"John", age:30, city:"New York"} ;
console.log(extractProfile(User));
