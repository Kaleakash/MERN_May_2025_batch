import { useState } from "react";

function Child1(props) {
let [user1,setUser1]=useState("ravi@gmail.com");    // state variable visibility within same component 
    return(
        <div style={{"backgroundColor":"orange","height":"140px"}}>
        <h3>Child1 Component</h3>
        <p>Type of user as admin in child1 component is <b>{props.name}</b></p>
        <p>Type of user as user1 in child1 component is <b>{user1}</b></p>
        <p>Type of user as user2 in child1 component is <b>{props.child2Value}</b></p>
        {props.handleCallback(user1)}
        </div>
    )
}

export default Child1;