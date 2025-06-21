import { useState } from "react";
function LoginWithObject() {
let [login,setLogin]=useState({emailid:"",password:""})
let [error,setError]=useState("")
let handleSubmit=(event)=> {
    event.preventDefault();     // disable form default action operation. 
    //console.log("event fired")
    // validation using react js 
    if(login.emailid.length==0){
        setError("Email id is required")
    }else if(login.password.length==0){
        setError("Password is required")
    }
    // checking eamilid and password hardcoding we can pass this information to backend technologies node js with express js 
    else if(login.emailid==="akash@gmail.com" && login.password==="12345"){
        setError("")
        alert("successfully login")
    }else {
        setError("")
        alert("failure try once again")
    }
}
    return(
        <div>
            <span>{error}</span>
            <form onSubmit={handleSubmit}>
                <label>EmailId</label>
        <input type="email" name="emailid" onChange={(event)=>setLogin({...login,"emailid":event.target.value})}/><br/>
            <label>Password</label>
        <input type="password" name="password" onChange={(event)=>setLogin({...login,"password":event.target.value})}/><br/>
        <input type="submit" value="SignIn"/>
        <input type="reset" value="reset"/>
            </form>
        </div>
    )
}

export default LoginWithObject;