import { useState } from 'react';
function SimpleStateChange() {
let [count,setCount]=useState(0);
let num = 100;          // normal local variable, not a state variable
let handleChangeCount = ()=>{
// alert("Event fired")

setCount(count+1)
//count = count+1         // change happen only locally it doesn't display on browser or UI
num = num+1;            // change happen only locally it doesn't display on browser or UI
console.log("Count value changed to : " + count);
console.log("Num value changed to : " + num);
}   
    return(
        <div>
            <h4>Simple State variable change using event</h4>
            <p>State Count variable is : {count} and Normal local variable is : {num}</p>
            <input type="button" value="Change Count Value" onClick={handleChangeCount}/>
        </div>
    )
}

export default SimpleStateChange;
