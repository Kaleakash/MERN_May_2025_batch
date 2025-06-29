import { use, useState } from "react";
import OrderListStudentDisplay from "./OrderListStudentDisplay";
import UnOrderListStudentDisplay from "./UnOrderListStudentDisplay";

function StudentComponent() {
let [snames,setSNames]=useState([])     // array variable 
let [sname,setSName]=useState("")       // string variable 
let addNames = (event)=> {
    setSNames([...snames,sname]);
    setSName("");
}
    return(
        <div>
            <h2>Add names</h2>
            <input type="text" placeholder="Add Names" name="sname" value={sname} 
            onChange={(event)=>setSName(event.target.value)}/>
            <input type="button" value="Add Names" onClick={addNames}/>
            <hr/>
            <OrderListStudentDisplay students={snames}></OrderListStudentDisplay>
            <hr/>
            <UnOrderListStudentDisplay students={snames}></UnOrderListStudentDisplay>
        </div>
    )
}

export default StudentComponent;