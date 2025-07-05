import { useState } from "react";

function Child2(props) {
let [user2,setUser2]=useState("raju@gmail.com");    // state variable visibility within same component 
    return(
        <div style={{"backgroundColor":"grey","height":"140px"}}>
            <h3>Child2 Component</h3>
            <p>Type of user as admin in child2 component is <b>{props.name}</b></p>
            <p>Type of user as user2 in child2 component is <b>{user2}</b></p>
            <p>Type of user as user1 in child2 component is <b>{props.child1Value}</b></p>
            {props.passValueToParent(user2)}
        </div>
    )
}

export default Child2;