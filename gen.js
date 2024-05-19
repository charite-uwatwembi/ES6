function* countUpTo(max){
    for(let i=0; i<max; i++){
        yield i
    }
}
const count = countUpTo(5)
// for(let i of count){
//     console.log(i)
// }
console.log(count.next().value)
console.log(count.next())
console.log(count.next().value)
console.log(count.next())
console.log(count.next())
console.log(count.next().done)
