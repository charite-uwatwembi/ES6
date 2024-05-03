function combine (...names){
    
  let combinedNames = names.join(' ');

  
  let nameArray = combinedNames.split(' ');


  nameArray[nameArray.length - 1] = nameArray[nameArray.length - 1].toUpperCase();

  
  combinedNames = nameArray.join(' ');

  return combinedNames;

}
console.log(combine('charite'))
console.log(combine('charite','iranzi'))

console.log(combine('charite','twembi','manzi', 'beyla', 'marie'))