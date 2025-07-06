import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import UserContext from "./UserContext";

function UserComponent() {
let [users,setUsers]=useState([]);      // parent component state to hold users of array of objects

let dispatchUser = (action,payload)=> {
    //alert("We called this function from AddUser component");
    console.log(action, payload);
    if(action === "ADD_USER") {
        //setUsers([...users, payload]); // Add new user to the existing list
        // we can pass these value in json file using axios tool. 
        // we can pass these value to backend server using axios tool 
    }
}
    return(
        <UserContext.Provider value={{users,dispatchUser}}>
            <div>
                <h2>User Operation</h2>
                <AddUser></AddUser>
                <DisplayUser></DisplayUser>
            </div>
        </UserContext.Provider>
    )

}

export default UserComponent;