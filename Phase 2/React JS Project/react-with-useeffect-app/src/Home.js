import { useState } from "react";
import Hello from "./Hello";

function Home() {
let [flag,setFlag]=useState(true)
let [msg,setMsg]=useState("Hide")
    return(
        <div>
        <h4>Home Component</h4>
        <input type="button" value={msg}
        onClick={
            ()=>{
            setFlag(!flag);
                        {flag?setMsg("Show"):setMsg("Hide")}
                }
        }
        
        />
        <hr/>

        {flag?<Hello/>:null}
        </div>
    )
}

export default Home;