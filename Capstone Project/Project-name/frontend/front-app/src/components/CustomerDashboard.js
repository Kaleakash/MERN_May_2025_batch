import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomerDashboard() {
let [emailId,setEmailId] = useState("");
let navigate = useNavigate();
useEffect(()=> {
    let obj = sessionStorage.getItem("emailId");
    if(obj!=null){
        setEmailId(obj);
    }
})
let logout = ()=> {
    navigate("/")
}
    return (<div>
        <h2>CustomerDashboard Page  <input type="button" value="logout" onClick={logout}/></h2>
        <h3>Welcome User {emailId}</h3>
    </div>)
}

export default CustomerDashboard;