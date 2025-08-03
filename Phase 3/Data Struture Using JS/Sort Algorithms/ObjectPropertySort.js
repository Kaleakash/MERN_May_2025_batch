let emp1 = {eid:2,ename:"John",salary:45000};   // literal style object 
let emp2 = {eid:1,ename:"Vijay",salary:65000};
let emp3 = {eid:3,ename:"Ajay",salary:55000};
let employees =[];                  // array object 
employees.push(emp1);
employees.push(emp2);
employees.push(emp3);                   
                    // employees contains 3 objects 
console.log("Number of employee object are "+employees.length)
console.log("All employee details one by one before sort")
for(let emp of employees){
    console.log(emp)
}
//employees.sort();
//employees.sort((emp1,emp2)=>emp1.eid-emp2.eid); // sort by eid asc order
//employees.sort((emp1,emp2)=>emp2.eid-emp1.eid); // sort by eid desc order 
//employees.sort((emp1,emp2)=>emp1.salary-emp2.salary); // sort by salary asc order 
//employees.sort((emp1,emp2)=>emp2.salary-emp1.salary); // sort by salary desc order
// employees.sort((emp1,emp2)=>emp1.ename.toLowerCase().localeCompare(emp2.ename.toLowerCase())); // sort by ename asc order
employees.sort((emp1,emp2)=>emp2.ename.toLowerCase().localeCompare(emp1.ename.toLowerCase())); // sort by ename asc order
console.log("All employee details one by one after sort")
for(let emp of employees){
    console.log(emp)
}