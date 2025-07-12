import { useNavigate } from "react-router-dom";

function Dashboard() {
let logout= (event)=> {
    sessionStorage.removeItem("user");
    navigate("/login");
    
}
let navigate = useNavigate();
    return(
        <div>
            <h3>Welcome to Home Page
<input type="button" value="logout" onClick={logout}/>
            </h3>
        </div>
    )
}

export default Dashboard;