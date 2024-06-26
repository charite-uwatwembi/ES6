// Spread the Love: You're working with multiple shopping carts (represented by arrays). 
// Write a function combineCarts(cart1, cart2) that uses the spread operator to create
//  a new array containing all items from both cart1 and cart2. 
//  (Bonus: Can you create a copy of an object without modifying the original using spread syntax?)

const combineCarts=(cart1, cart2)=>{
    return [...cart1,...cart2]
}

console.log(combineCarts([1,2,3],[4,5,6]))

const original = {
    name:'charite',
    age:22
}

let copy = {...original}
copy.fullName='uwatwembi charite'
console.log(original)
console.log(copy)