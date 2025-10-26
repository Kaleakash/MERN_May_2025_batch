import { useNavigate } from "react-router-dom";

function AdminDashboard() {



let navigate = useNavigate();

let logout = ()=> {
    navigate("/")
}

    return (<div>
        <h2>AdminDashboard Page <input type="button" value="logout" onClick={logout}/></h2>
    </div>)
}

export default AdminDashboard;