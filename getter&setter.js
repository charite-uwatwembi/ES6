class person {
    constructor(name){
        this._name = name
    }
        get name(){
            return this._name
        }

        set name(newName){
            newName = newName.trim();
            if (newName === '') {
                throw 'The name cannot be empty';
            }
            return this._name = newName
        }
    
}
let personName = new person('charite uwatwembi')
console.log(personName.name)

personName.name = 'twembi'
console.log(personName.name)