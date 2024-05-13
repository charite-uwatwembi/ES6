mySymbol = Symbol('this is a unique symbol')

myObject = {
    [mySymbol]: 'value of my symbol',
    reguralSymbol: 'normal symbol'
}
console.log(myObject[mySymbol])