import {useState} from 'react';
function StudentName() {
let [stdNames,setStdNames]=useState(["Ravi","Raju","Rani","Ramu"]);
let [sname,setSname]=useState("");
let handleEvent = (event) => {
    //console.log("event fired")
    //console.log(event);
    let name = event.target.name;
    let value = event.target.value;
   // console.log(name + " : " + value);
    setSname(value);            // whenever event occurs, the value of sname will be updated
}
let addNames=()=> {
    console.log("New Name is "+sname)
    setStdNames([...stdNames, sname]); // spread operator to add new name to the existing array
    // ...stdName will hold old value of that array and sname will be added to the end of that array
    setSname(""); // reset the input field after adding the name
}
    return(
        <div>
            Name : 
            <input type="text" name="sname" placeholder="Enter the name" onChange={handleEvent} value={sname}/><br/>
            <input type="button" value="Add Name" onClick={addNames}/><br/>
            <h5>Add and Display Student Names</h5>
            <ul>
            {
                stdNames.map((name) => {
                    return <li>{name}</li>
                })
            }
            </ul>
        </div>
    ) 
}

export default StudentName;