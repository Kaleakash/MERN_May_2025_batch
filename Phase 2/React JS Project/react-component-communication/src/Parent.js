import { useState } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";
function Parent() {
let [user,setUser]=useState("admin@gmail.com");         // state variable local to parent component 
let [child1Data,setChild1Data]=useState("");
let [child2Data,setChild2Data]=useState("");
let receiveChild1Data=(data)=> {
    console.log("child1 value in parent component is "+data)
    setChild1Data(data);
}
let receiveChild2Data=(data)=> {
    setChild2Data(data);
}
    return(
        <div style={{"backgroundColor":"yellow","height":"500px"}}>
            <h3>Parent Component</h3>
            <p>Type of user as admin in parent component is <b>{user}</b></p>
            <p>Type of user as user1 in parent component is <b>{child1Data}</b></p>
            <p>Type of user as user2 in parent component is <b>{child2Data}</b></p>
            <Child1 name={user} handleCallback={receiveChild1Data} child2Value={child2Data}></Child1>
            <Child2 name={user} passValueToParent={receiveChild2Data} child1Value={child1Data}></Child2>
            <p>Type of user as admin in parent component is <b>{user}</b></p>
        </div>
    )
}

export default Parent;