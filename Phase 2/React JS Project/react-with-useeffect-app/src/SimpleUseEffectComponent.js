import { useEffect, useState } from "react";

function SimpleUseEffectComponent() {
let [count,setCount]=useState(0)
let [num,setNum]=useState(100);
let normalFunction = ()=> {
    console.log("Normal function called..")
}
// 1st example 
// useEffect(()=> {
//     console.log("useEffect function called...again and again, it call again whenever re-render the component ")
// })

// 2nd example 
// useEffect(()=> {
//     console.log("useEffect function called... it call only once")
// },[])

// 3rd example 
useEffect(()=> {
    console.log("useEffect function called... it will call only if count change not for num state variable")
},[count])

    return(
        <div>
        {normalFunction()}
        <h4>Simple useEffect Hook Example</h4> 
        <p>Count value is : {count} and Num value is : {num}</p>
        <input type="button" value="Increment count" onClick={()=>setCount(count+1)} />  
        <input type="button" value="Increment num" onClick={()=>setNum(num+1)} />  
        </div>
    )
}

export default SimpleUseEffectComponent;