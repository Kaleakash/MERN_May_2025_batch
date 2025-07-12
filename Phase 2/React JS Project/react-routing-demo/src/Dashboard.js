import { useNavigate } from "react-router-dom";

function Dashboard() {

let navigate = useNavigate();
    return(
        <div>
            <h3>Welcome to Home Page
<input type="button" value="logout" onClick={()=>navigate("/login")}/>
            </h3>
        </div>
    )
}

export default Dashboard;