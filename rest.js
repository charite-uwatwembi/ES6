function addLastName (...names){
    let newOne = []
    if(names.length < 4){
        console.log ('Not enough names')
    }
    
    for(let i = 0; i < names.length; i++){
        let lastName = names[2]
         let two = names[i] += ` ${lastName}`
        newOne.push(two)
    }
    return newOne
}

console.log(addLastName('Neymar', 'Silva', 'Santos', 'Junior'))