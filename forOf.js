
//for..of loops in objects destructuring

const ratings = [
    {user: 'John',score: 3},
    {user: 'Jane',score: 4},
    {user: 'David',score: 5},
    {user: 'Peter',score: 2},
];

let sum = 0;
 for(const {score} of ratings){
    sum += score
 }
 console.log(`The total is ${sum}`)

 //arrays

 let scores = [80, 90, 70];
 for(let score of scores){
    score += 5;
    console.log(score)
 }

 //using array entries

 let colors = ['Red', 'Green', 'Blue'];

 for(let [index,color] of colors.entries()){
    console.log(`the color is ${color} and it's index is ${index}`)
 }
 

 //in strings 
 let str = 'abc'
 for(let i in str){
    console.log(i)
 }

 //in maps

