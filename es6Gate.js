// Question II
// Create a function that performs a JOIN operation on two arrays of objects, based on a common property, and returns a new array of merged objects.
// const employees = [
//     { id: 1, name: 'John', department: 'IT' },
//     { id: 2, name: 'Jane', department: 'HR' },
//     { id: 3, name: 'Doe', department: 'IT' }
// ];

// const salaries = [
//     { id: 1, salary: 50000 },
//     { id: 2, salary: 60000 },
//     { id: 4, salary: 55000 }
// ];

// //const result = sqlJoin(employees, salaries, 'id');
// //console.log(result);

// output: [
//        {id: 1, name: 'John', department: 'IT', salary: 50000},
//        {id: 2, name: 'Jane', department: 'HR', salary: 60000}
// ]


const joinArrs = (arr1,arr2)=>{
    let arr3 = []
    for(let i =0; i<arr1.length; i++){
      for(let j = 0; j <arr2.length; j++ ){
      
        if(arr1[i].id === arr2[j].id){
           
          arr3.push( {...arr1[i],...arr2[j]})
          
        }
        
        
    }
   
  }
   return arr3
  }
  
  const employees = [
      { id: 1, name: 'John', department: 'IT' },
      { id: 2, name: 'Jane', department: 'HR' },
      { id: 3, name: 'Doe', department: 'IT' }
  ];
  
  const salaries = [
      { id: 1, salary: 50000 },
      { id: 2, salary: 60000 },
      { id: 4, salary: 55000 }
  ];
  console.log(joinArrs(employees,salaries))