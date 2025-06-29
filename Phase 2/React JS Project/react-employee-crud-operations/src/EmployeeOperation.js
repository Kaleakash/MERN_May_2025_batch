import axios from "axios";
import { useEffect, useState } from "react";
function EmployeeOperation() {

let URL ="http://localhost:3000/employees";
let [employee,setEmployee]=useState({name:"",salary:""});      // employee object 
let [employees,setEmployees]=useState([]);                          // employee array object 
let [msg,setMessage]=useState("")
let [buttonValue,setButtonValue]=useState("Store Employee");        // this state variable for button value 
useEffect(()=> {
    //axios.get(URL).then(result=>console.log(result)).catch(error=>console.log(error))
    axios.get(URL).then(result=>setEmployees(result.data)).catch(error=>console.log(error))
},[msg])        // when ever msg change useEffect once again get called. 

let storeOrUpdateEmployee=(event)=> {
    event.preventDefault();
    setMessage("");

    //axios.post(URL,employee).then(result=>console.log(result)).catch(error=>console.log(error));
    if(buttonValue=="Store Employee"){
        axios.post(URL,employee).then(result=>{
            setMessage(result.statusText);      // when record store msg value change 
            
    }).catch(error=>console.log(error));

    }else {

        // URL/id, updatedEmployeeData( it may be name or salary)
    axios.put(URL+"/"+employee.id,employee).then(result=>{
            setMessage(result.statusText);      // when record store msg value change 
            setButtonValue("Store Employee")
    }).catch(error=>console.log(error));

    }
    

    setEmployee({name:"",salary:""})
}
let deleteEmployee = (event,id)=>{
    //alert("id is "+id)
    // delete function we need pass the id using technique path param means append id through URL as
    // URL/abc123
    setMessage("");
    axios.delete(URL+"/"+id).then(result=>{
            setMessage(result.statusText);      // when record store msg value change       
    }).catch(error=>console.log(error));
}

let setToUpdateEmployee = (event,employeeUpdate)=> {
    console.log(employeeUpdate)             // employeeUpdate we get when we click on update button with particular record 
    setEmployee(employeeUpdate);            // this information we set to employee state variable 
    setButtonValue("Update Employee");      // when we call this function button value become Update Employee 
}
    return(
        <div>
            <span style={{"color":"red"}}>{msg}</span>
            <h3>Employee Management System</h3>
            <form onSubmit={storeOrUpdateEmployee}>
                
                <label>Name</label>
                <input type="text" value={employee.name} name="name"
                onChange={(event)=>setEmployee({...employee,"name":event.target.value})}/><br/>

                <label>Salary</label>
                <input type="number" value={employee.salary} name="salary"
                onChange={(event)=>setEmployee({...employee,"salary":event.target.value})}/><br/>

                <input type="submit" value={buttonValue}/>
                <input type="reset" value="reset"/>
            </form>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Delete</th>
                        <th>Update</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            employees.map(employee=>
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.salary}</td>  
                        <td><input type="button" value="Delete" 
                        onClick={(event)=>deleteEmployee(event,employee.id)}/></td>   
                        <td><input type="button" value="Update" 
                        onClick={(event)=>setToUpdateEmployee(event,employee)}/></td> 
                                </tr>
                            )
                        }
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeOperation;