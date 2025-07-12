import { Link, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import AddEmployee from './AddEmployee'
import ViewEmployee from "./ViewEmployee";
function Dashboard() {
let logout= (event)=> {
    sessionStorage.removeItem("user");
    navigate("/login");
    
}
let navigate = useNavigate();
    return(
        <div>
            <h3>Welcome to HR Portal
<input type="button" value="logout" onClick={logout}/>
            <nav>
                <Link to="/home/add_employee">Add Employee</Link>|
                <Link to="/home/view_employee">View Employee</Link>|
            </nav>
            <br/>
            <Outlet></Outlet>
            </h3>
        </div>
    )
}

export default Dashboard;