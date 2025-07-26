let emp1 = {id:100,name:"John",salary:45000};
let emp2 = {id:101,name:"Steven",salary:48000};
let emp3 = {id:102,name:"Lex",salary:42000};
let emp4 = {id:103,name:"Neena",salary:49000};

let listOfEmployees = [];
console.log("Number of employees are "+listOfEmployees.length)
listOfEmployees.push(emp1);
listOfEmployees.push(emp2);
listOfEmployees.push(emp3)
listOfEmployees.push(emp4);
console.log("Number of employees are "+listOfEmployees.length)
console.log(listOfEmployees);
let employee = listOfEmployees[1];
console.log("Get employee details using index position")
console.log("id is "+employee.id)
console.log("name is "+employee.name)
console.log("salary is "+employee.salary)
console.log(employee);      // display employee details in string format 
console.log("---------------")
let searchEmpObject = listOfEmployees.find(emp=>emp.id==1000);//if record present it return that object else return undefined 
if(searchEmpObject==undefined){
    console.log("object not present")
}else {
    console.log(searchEmpObject)
}
console.log("-------------")
// filter method it return only those record when condition true. if condition false it return empty array 
// filter generate another array with conditions.  
let salaryConditionEmployees = listOfEmployees.filter(emp=>emp.salary<35000);
console.log(salaryConditionEmployees)
console.log("-------------")
// some function it check minimum one element condition must be true then return true else false. 
let checkSomeCondition = listOfEmployees.some(emp=>emp.salary>48000);
console.log(checkSomeCondition)
console.log("------")
// map function return new array with update particular value for each elements. 

let updateSalary = listOfEmployees.map(emp=>{
    emp.salary = emp.salary+emp.salary*0.10;
    return emp;
});
console.log(updateSalary)




