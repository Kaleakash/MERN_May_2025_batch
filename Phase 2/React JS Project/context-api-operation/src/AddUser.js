import { useContext, useState } from "react";
import UserContext from "./UserContext";

function AddUser() {
let contextReference = useContext(UserContext);
let [user, setUser] = useState({name:"", age: ""});

let addUser= (event) => {
    event.preventDefault();
    //console.log("User added", user);
    contextReference.dispatchUser("ADD_USER", user); // Dispatch action to add user of parent UserComponent 
    setUser({name: "", age: ""}); // Reset the form after submission
}
    return(
        <div>
            <h2>Add User</h2>
            <form onSubmit={addUser}>
            <input type="text" placeholder="Enter Name" value={user.name} 
            onChange={(event) => setUser({...user, name: event.target.value})} /><br/>
            <input type="text" placeholder="Enter Age" value={user.age} 
            onChange={(event) => setUser({...user, age: event.target.value})} /><br/>
            <input type="submit" value="Add User" />
            </form>
        </div>
    )
}

export default AddUser;