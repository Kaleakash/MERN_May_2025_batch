import { useState } from "react";
import {loginSignUp} from '../service/loginApiService';
import { useNavigate } from "react-router-dom";

function SignUp() {
let [emailId,setEmailId]=useState("");
let [password,setPassword]=useState("");
let [typeOfUser,setTypeOfUser]=useState("");
let [msg,setMsg]=useState("");
let navigate = useNavigate();
let signUp=async (event)=> {
    event.preventDefault();
    console.log(emailId+" "+typeOfUser+" "+password)
    let login = {emailId,password,typeOfUser};      // convert to login object. 
    let serverOutput = await loginSignUp(login);
    console.log(serverOutput) 
    setMsg(serverOutput.msg);
    setEmailId("");
    setPassword("");
}

let signInPage= ()=> {
    navigate("/");
}
    return (<div>
        <span style={{"color":"red"}}>{msg}</span>
        <h2>Account Create</h2>
        <form onSubmit={signUp}>
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
            <input type="submit" value="SignUp"/>
            <input type="reset" value="reset"/>
        </form>
        <br/>
        <a href="#" onClick={signInPage}>SignIn!</a>
    </div>)
}

export default SignUp;