import { useState } from "react";
import AddUser from "./AddUser";
import DisplayUser from "./DisplayUser";
import UserContext from "./UserContext";

function UserComponent() {
let [users,setUsers]=useState([]);

let dispatchUser = (action,payload)=> {

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