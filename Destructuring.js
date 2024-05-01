// on arrays

const fruits = ['apple', 'banana', 'cherry'];

const [ x, y, z] = fruits
console.log(fruits)

const [a, , c] = [1, 2, 3]

console.log()

//another example using the rest paramenters

function getScores() {
    return [70, 80, 90, 100, 300];
 }

 let [m,n,...nums]=getScores()
 console.log(m)
 console.log(n)
 
 
 console.log(nums)

 //nested arrays destructuring

 function more(){
    return ["charite","uwatwembi",
           ["eat","drink","sleep"] 
            ]
 }

 let[
    firstName,
    lastName,
    [
        task1,
        task2,
        task3
    ]
] = more()
console.log(task2,firstName)

//another example using commas for skipping 

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one,,,two,,,,three] = things;


const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);
