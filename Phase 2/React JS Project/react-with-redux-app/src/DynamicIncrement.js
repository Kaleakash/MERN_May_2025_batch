import { useState } from "react";
import { useDispatch } from "react-redux";

function DynamicIncrement(){
let [num,setNum] = useState(0);
let dispatch = useDispatch();
let handleIncrement=()=> {
    // We are passing action with type as key and data as payload as key 
    dispatch({type:"DYNAMIC_INCREMENT", payload:num});  // here num can be number, string, object etc. 
}
    return(
        <div>
            <h3>Dynamic Increment</h3>
            <input type="number" value={num} 
            onChange={(e) => setNum(eval(e.target.value))} />
            <input type="button" value="Dynamic Increment"
            onClick={handleIncrement}/>
        </div>
    )
}

export default DynamicIncrement;