// Proxy Power: Data validation is crucial. 
// Write a function createValidationProxy(obj) that takes an object and returns a proxy
//  that validates any attempt to set a property value. If the value is invalid
//  (e.g., not a number for a numeric property), throw an error.

const createValidationProxy=(obj) => {
    return new Proxy(obj, {
        set(target, prop, value) {
            if (typeof value !== 'number') {
                throw new Error('value must be a number')
            }
            target[prop] = value
            // return true
        }
    })
}

const obj = { a: 1 }
const proxy = createValidationProxy(obj)
proxy.b = 2
proxy.c=3
console.log(obj)
