
//a generator function has a (*)
// we are using a yield keyword inside the generator function bcs yield is what causes the generator to pause.

function*  getEmployee(){
    console.log('The function is starting to run😊')
    const names=['charite','ange','Aime','hew','Ruth']
    
    for(const name of names){
        console.log(name)
        yield
    }
     console.log('The function has ended🤗')

}
const generatorIterator = getEmployee();
generatorIterator.next(); //charite
generatorIterator.next(); //ange
generatorIterator.next(); //aime