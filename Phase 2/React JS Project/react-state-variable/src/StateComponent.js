
import { useState } from "react";

function StateComponent() {
// primitive variables 
let [id,setId]=useState(100);
let [name,setName]=useState("John");
let [isActive,setIsActive]=useState(true);
let [salary,setSalary]=useState(1000.50);
let age = useState(30); // this is type state variable with set function. So we we can't use it directly
    return(
        <div>
            <h3>React State variable</h3>
            <h4>Primitive Variable</h4>
<p>Id is {id} Name is {name}, Use Active {isActive?"Yes":"No"} and salary is {salary} and Age is {age}</p>
        </div>
    )
}


export default StateComponent;