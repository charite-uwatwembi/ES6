// Example 1: Destructuring Arrays
const numbers = [1, 2, 3, 4, 5];
const [first,...rest] = numbers;
const [last] = rest;

console.log(`First number: ${first}`);
console.log(`Last number: ${last}`);

// Example 2: Destructuring Objects
const person = {
name: 'John Doe',
age: 30,
occupation: 'Software Developer'
};
const { name, age=40, occupation } = person;

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Occupation: ${occupation}`);

// Example 3: Destructuring with Default Values
const personWithDefaults = {
name: 'Jane Doe',
age: 28
};
const { name: nameWithDefaults, age: ageWithDefaults, occupation = 'Engineer' } = personWithDefaults;

console.log(`Name with defaults: ${nameWithDefaults}`);
console.log(`Age with defaults: ${ageWithDefaults}`);
console.log(`Occupation with defaults: ${occupation}`);

// Example 4: Nested Destructuring
const personNested = {
name: 'John Doe',
address: {
street: '123 Main St',
city: 'Anytown',
country: 'USA'
}
};
const { name: nameNested, address: { city: cityNested, country: countryNested } } = personNested;

console.log(`Name in nested destructuring: ${nameNested}`);
console.log(`City in nested destructuring: ${cityNested}`);
console.log(`Country in nested destructuring: ${countryNested}`);