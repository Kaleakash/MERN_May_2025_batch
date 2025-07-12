import { Navigate } from "react-router-dom";
import Authentication from "./Authentication";

function PrivateRouter(props){
    console.log(props)
    return Authentication()? props.children :<Navigate to="/login"></Navigate>
}

export default PrivateRouter;