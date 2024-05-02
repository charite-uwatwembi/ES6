const employees = new Map();

employees.set('james.parkes@udacity.com', { 
    firstName: 'James',
    lastName: 'Parkes',
    role: 'Content Developer' 
});
employees.set('julia@udacity.com', {
    firstName: 'Julia',
    lastName: 'Van Cleve',
    role: 'Content Developer'
});
employees.set('richard@udacity.com', {
    firstName: 'Richard',
    lastName: 'Kalehoff',
    role: 'Content Developer'
});

console.log(employees);
employees.delete('richard@udacity.com');
console.log(employees);


//new map

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

console.log(members.has('Xavier'));
console.log(members.has('Marcus'));

console.log(members.get('Evelyn'));

for(const member of members){
    console.log(member);
}
 // use destruction in order to get the key-value pair instead of arrays 
for (const [key, value] of members) {
    console.log(`${key}: ${value}`);
  }
  

