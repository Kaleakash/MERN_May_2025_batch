import { useState } from "react";

function EmployeeObjectComponent() {
// State to hold employee object
let [employee,setEmployee]=useState({id:100,name:"John",salary:50000,department:"IT"});
    
    return(
        <div>
            <h3>Employee details</h3>
<p>Employee is {employee.id} Name is {employee.name} Salary is {employee.salary} and Department is {employee.department}</p>
        </div>
    )
}

export default EmployeeObjectComponent;