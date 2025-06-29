import { useState } from "react";
import EmployeeDetails from "./EmployeeDetails";

function Employee(props) {
let [id,setId]=useState(100);       
let [name,setName]=useState("John");    // id and name is state variable. the scope of this variable is local to this component 

    return(
        <div>
            <h2>Employee Component created in {props.tech}</h2>
            <p>In Employee component, Id is {id} Name is {name}</p>
    <EmployeeDetails msg="Welcome to React Props concept" eid={id} e_name={name}></EmployeeDetails>
        </div>
    )
}

export default Employee;