import axios from "axios";
import { useEffect, useState } from "react";

function EmployeeOperation() {

let URL ="http://localhost:3000/employees";
let [employees,setEmployees]=useState([]);
useEffect(()=> {
    //axios.get(URL).then(result=>console.log(result)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setEmployees(result.data)).catch(error=>console.log(error))
},[])
    return(
        <div>
            <h3>Employee Management System</h3>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employees.map(employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.salary}</td>      
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeOperation;