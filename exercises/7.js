// Symbolic Secrets: You're building a secure configuration system. 
// Create a function secureConfig(config) that takes an object config and uses a Symbol as a key 
// to store a private property named apiKey. 
// Return the modified config object.



const secureConfig =(config) =>{
    let secKey = Symbol('apiKey')
    config[secKey] = 'i-am-a-girl'
    return config
}

let myconfig ={ username: 'user123',
password: 'secretpassword'}
let secureMfyConfig = secureConfig(myconfig)
// console.log(secureMfyConfig[Symbol('apiKey')])
console.log(myconfig)