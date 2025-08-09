let employees = [];
function employeeIdSearch(id) {
    for(let i=0;i<employees.length;i++){
        if(employees[i].id === id){
            return true;
        }
    }
    return false; // Return false if the employee with the given ID is not found
}


let emp1={id:100,name:"Ravi",salary:50000};
let emp2={id:101,name:"Rajesh",salary:45000};
let emp3={id:102,name:"Steven",salary:35000};
let emp4={id:103,name:"John",salary:60000};
employees.push(emp1, emp2, emp3, emp4);
//console.log("Employees Array: ", employees.length);
let empSearchById = employeeIdSearch(105);
if(empSearchById) {
    console.log("Employee with ID 101 found.");
}else {
    console.log("Employee with ID 101 not found.");
}
console.log("Search Employee Details using ES6 Feature: ");
// find method : if condition is true it return that record otherwise undefined
let result = employees.find(emp => emp.id === 101);
if(result==undefined){
    console.log("Employee with ID 101 not found.");
}else {
    console.log("Employee with ID 101 found: ", result);
}
// it return all employees with condition true. filer method return type is array 
let salaryConditionEmployees = employees.filter(emp=>emp.salary>48000);
console.log("Employees with salary greater than 48000: ", salaryConditionEmployees);
// findIndex : this method return index of first element which satisfy the condition 
// if no record found it return -1
let empIndex = employees.findIndex(emp => emp.id === 109);
if(empIndex !== -1) {
    console.log("Employee with ID 102 found at index: ", empIndex);
}else {
    console.log("Employee with ID 109 not found.");
}