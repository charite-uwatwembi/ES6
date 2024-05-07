
// classes in es5 (using constructor/prototype pattern)
function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());
console.log(typeof Person);
console.log(typeof john);

//in es6 (using classes)
class SomeOne{
  constructor(name){
    this.name =name;
  }
  getName () {
    return this.name;
  }
}
let Doe = new SomeOne("john doe")
console.log(Doe.getName())