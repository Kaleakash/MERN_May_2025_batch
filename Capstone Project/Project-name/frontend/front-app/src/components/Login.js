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
    </div>)
}

export default Login;