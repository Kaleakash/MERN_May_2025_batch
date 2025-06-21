import { useState } from 'react';
function EmployeeState() {
let [employee,setEmployee]=useState({id:100,name:"John",salary:50000,department:"IT"});
let changeEmployeeDetails = ()=> {
    setEmployee({id:101,name:"Jane",salary:60000,department:"HR"});
}
let changeEmployeeSalary = ()=> {
    //setEmployee({salary:70000});    // This will not change the id, name, and department we lost the previous state
    setEmployee({...employee,salary:70000}); // This will change the salary and keep the previous state
    // ...employee} will copy the previous state and then change the salary
}
let changeEmployeeDepartment = ()=> {
setEmployee({...employee,department:"Marketing"}); // This will change the department and keep the previous state
}
let changeEmployeeSalaryAndDepartment = ()=> {
setEmployee({...employee,department:"Development",salary:90000}); // This will change the department and salary and keep the previous state
}
    return(
        <div>
            <h4>Employee details</h4>
<p>Id: {employee.id}  Name : {employee.name} Salary is {employee.salary} Department is {employee.department}</p>
<input type="button" value="Change Employee details" onClick={changeEmployeeDetails}/>
<input type="button" value="Change Employee salary" onClick={changeEmployeeSalary}/>
<input type="button" value="Change Employee department" onClick={changeEmployeeDepartment}/>
<input type="button" value="Change Employee salary and department" onClick={changeEmployeeSalaryAndDepartment}/>
        </div>
    )
}

export default EmployeeState;