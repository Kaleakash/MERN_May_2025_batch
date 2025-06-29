import axios from "axios";
import { useEffect, useState } from "react";
function EmployeeOperation() {

let URL ="http://localhost:3000/employees";
let [employee,setEmployee]=useState({name:"",salary:""});      // employee object 
let [employees,setEmployees]=useState([]);                          // employee array object 
let [msg,setMessage]=useState("")
useEffect(()=> {
    //axios.get(URL).then(result=>console.log(result)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setEmployees(result.data)).catch(error=>console.log(error))
},[msg])        // when ever msg change useEffect once again get called. 

let storeEmployee=(event)=> {
    event.preventDefault();
    setMessage("");
    console.log(employee)
    //axios.post(URL,employee).then(result=>console.log(result)).catch(error=>console.log(error));
    axios.post(URL,employee).then(result=>{
            setMessage(result.statusText);      // when record store msg value change 
            
    }).catch(error=>console.log(error));

    setEmployee({name:"",salary:""})
}
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h3>Employee Management System</h3>
            <form onSubmit={storeEmployee}>
                
                <label>Name</label>
                <input type="text" value={employee.name} name="name"
                onChange={(event)=>setEmployee({...employee,"name":event.target.value})}/><br/>

                <label>Salary</label>
                <input type="number" value={employee.salary} name="salary"
                onChange={(event)=>setEmployee({...employee,"salary":event.target.value})}/><br/>

                <input type="submit" value="Store Employee"/>
                <input type="reset" value="reset"/>
            </form>
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