import { useState } from "react";
import { useSelector } from "react-redux";
import IncrementComponent from "./IncrementComponent";

function SecondComponent() {
let [b,setB]=useState(200);     // b is local state variable.
let n = useSelector(gs=>gs.n)   // n is global state variable part of redux store.
let name = useSelector(gs=>gs.name) // name is another global state variable.
    return (
        <div>
        <h2>Second Component</h2>
        <p>This is the second component in our React application.</p>
        <p>Global State variable is {name} and Global state variable is {n}</p>
        <p>Local state variable is {b}</p>
        <IncrementComponent/>
        </div>
    );
}

export default SecondComponent;