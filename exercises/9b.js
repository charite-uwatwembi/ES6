// Modular Math: Let's create a reusable math library. 
// In a file named math.js, define functions for addition, subtraction, multiplication, and division.
//  In your main application file (e.g., app.js),
//   import the necessary functions from math.js and use them to perform calculations.



const maths = require('./9a')

let numbers = new maths(4,2)
console.log(numbers.addition())
console.log(numbers.subtraction())
console.log(numbers.multiplication())
console.log(numbers.division())