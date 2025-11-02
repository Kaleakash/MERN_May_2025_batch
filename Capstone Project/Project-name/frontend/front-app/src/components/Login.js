import { useState } from "react";
import {loginSignIn} from '../service/loginApiService';
import { useNavigate } from "react-router-dom";

function Login() {
let [emailId,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [typeOfUser,setTypeOfUser]=useState("");
let [error,setError]=useState("");
let navigate = useNavigate();
let signIn=async (event)=> {
    event.preventDefault();
    console.log(emailId+" "+typeOfUser+" "+password)
    let login = {emailId,password,typeOfUser};      // convert to login object. 
    let serverOutput = await loginSignIn(login); 
    if(serverOutput.msg=="Admin Login Successfully"){
            alert("admin login successfully")
            setError("")
            navigate("adminDashboard")
               sessionStorage.setItem("emailId",emailId);  //we store emailIf of that admin in session object. 
    }else if(serverOutput.msg=="Customer Login Successfully"){
            alert("customer login successfully")
            setError("")
            sessionStorage.setItem("emailId",emailId);  //we store emailIf of that customer in session object. 
            navigate("customerDashboard")
    }else {
        setError(serverOutput.msg)
    }
   
    setEmailId("");
    setPassword("");
}
    
let signUpPage= ()=> {
    navigate("/signUp");
}
    return (<div>
        <span style={{"color":"red"}}>{error}</span>
        <h2>Login Page</h2>
        <form onSubmit={signIn}>
            <label>EmailId</label>
            <input type="email" name="emailId" value={emailId} 
            onChange={(event)=>setEmailId(event.target.value)}/><br/>
            <label>Password</label>
            <input type="password" name="password" value={password} 
            onChange={(event)=>setPassword(event.target.value)}/><br/>
            <label>TypeOfUser</label>
            <input type="radio" name="typeOfUser" value="admin" 
            onChange={(event)=>setTypeOfUser(event.target.value)}/>Admin
            <input type="radio" name="typeOfUser" value="customer" 
            onChange={(event)=>setTypeOfUser(event.target.value)}/>Customer<br/>
            <input type="submit" value="SignIn"/>
            <input type="reset" value="reset"/>
        </form>
        <br/>
        <a href="#" onClick={signUpPage}>SignUp!</a>
        <br/>
        <a href="http://www.gmail.com">
        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAABF1BMVEWTlJb////sQjVChfY0qFXHFhD6vAWnqKqPkJK6u72oqKjh7ePh6vU+rVtIjff///33/f4AnToZd+74/vrpRS5gs3Y2gvksplD19fa2trbr7Oxom+yGh4nv4eDHEQn7897KLy3i4uL7vyubnJ7IAAD27e3vzsvmIQ3leW/rNifhV03rrKfdRj7om5XkioPiRTjrv7zUf33GXlv46bL00nL1yFjGQ0H4xDrKbW39++/fp6bJT0379NL1yEn34Ju0AADWjIjy1oHdTjW/MzlifNKnLEnUuBxfrk2NTYHeaGOstSx1Za67ExftvxN7rzWlNFSMV5BobcK1HCpTeNihO2DHuiGbQXKgvu2ez6vA1fSAqux8wI6638TT35L2AAAEe0lEQVR4nO3beVubMBwHcAg96NzEaxa7UlehR+yseO92t5ubO3Tufv+vYwk95FwJJCGPy/cfHwX08+RHAqmJUhMwii5gFBkZGRkZGRkZmf8zum7bN6jEVui8VupNpdZumCqVmI12zW7mdenKWoOO5yqNNSUXq1mlTvJY1Wb2ZrLbLEg4bTtjY+lVSndSXMxqJpW+xo6Es5ZBxdqURaVXWZtUlbiCNpNuF4xpk5mabfYm1AeJRgYexcMhKyCH4uE0SBqKec+bhKAHNjk1FGoqgruKl0lVU3dAvcYPVUtbP73ND9VOi+IxcE6Suv/ZpmrwQqUe1dHIyQ2lVq8bykDJR024OF9LYVUeU8L11618HXdnd3fH7WT5s7iF1vf2Dw7299a97ymh3MNjB6V16I7/CAEJ/669jYqXo73I5ZlROy2n7MVp3e+Ql/bBQWWa/XB3yYp62CpP4zyySE2Pn1R8eUoHZR37UGXn2DVIKmg8rQTzOHg8I+qZUw7EuZ+6dyL+fshUeU4DZR62yiHVdjdtO3VfhE2Vowe5UYZq3Q2jyhB4vXC2yQUwgtpYZ4MCoNfvzB4bOv0eWOGIAnBzZgm7mxDwRQHYGxhqQg3xWGQMevg0Jig1CYVYSSXEpk4fgiJQAN5LLGH33sjEHwUg3Iq+ZOHvB2BsKgCFeuE7K3pb4V4HGKNeOsmouBJOSxePOqLQ+4ybr147rUQUYqESqpMqoq9b0H80gnpzMkehpW7Oa28dJxkFoL+E1ruAKYI6rd+ihNLef3CSUQDiZ+FobOhuB00h1NnHeokaavXik7+EIBw49Oav5hCGjwRQb05KJXooTZv/7FNFUF4vRKXrRQ6sBEpXoovStC/nTjIKjUtuF0TayY/CpaOO0i6+ThorBoVH0rifTlGXJ6USA5SmfR5PIGJR8VkJlI4FSvsy6oXEqEnpmKC0i2+4hKSoy/qViQEKlRDNSQlRpz4SG5R2ce4Qoc5OAiY2KNQLo8NRYuC017FFaasPww+TRNL2oF7ig1paiDzikkzd5UVuqLinXIxpaKgcUejwYGUGC4IBuponCr2ohN+cwib8iObbUvhN0xz+oxf2hvhf9ZxR3glu0v0Ot13v1Zh3S3mxNmNVcHP8yVohqPA0YWzamlxbCApVKFLCcekKQ3lfrH5ABfvW1eXFlC8y0/Nmgb6DRaF8E6vRZEsIlDEpIS6dIUJLqaNbC5cQ97rgpx0FosYlRKULf4RWJMrDWFb0c71CUUmRKImSqBwoQ0CUIVFpy6cu0EXVby3nRxnq9yWaqMUfwVMy/g/ZnF+lhwo3VEYUmuDdWVr1hwxV92fx9hytFRwLP3/d8Wch/QqA5dv+/P6zHD4hKyqynifnAiFKqJgfpM6Mk6/bUiWJio3NcMNFOKmXVAq5+FTIZbpCLmjmufQ7NUnMRfJCbicQcuOFoFtURNzMw2dUJ932JOYGMSG30om56VDM7ZlibmRVhNzyq4i5ORqzmjbdbeRK7m3kI5du21UqobXhXkZGRkZGRkZGRub65i9Nict0junBrQAAAABJRU5ErkJggg=="
        width="30px" height="30px"
        />

        </a>
    </div>)
}

export default Login;