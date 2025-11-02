import { Link, Outlet, useNavigate } from "react-router-dom";

function AdminDashboard() {



let navigate = useNavigate();

let logout = ()=> {
    navigate("/")
}

    return (<div>
        <h2>AdminDashboard Page <input type="button" value="logout" onClick={logout}/></h2>
        <hr/>
        <Link to="adminAddProduct">Add Product</Link>|
        <Link to="adminViewProduct">View Product</Link>
   
        <div>
            {<Outlet/>}
        </div>
    </div>)
}

export default AdminDashboard;