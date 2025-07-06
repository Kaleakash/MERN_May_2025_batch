import { useState } from "react";
import { useSelector } from "react-redux";
import SecondComponent from "./SecondComponent";

function FirstComponent() {
let [a,setA]=useState(100);     // a is local state variable. 
let n = useSelector(gs=>gs.n)   // n is global state variable part of redux store.
let name = useSelector(gs=>gs.name) // name is another global state variable.
    return(
        <div>
            <h3>First Component</h3>
            <p>Local State variable is {a} Global state variable is {n} 
                Global state variable name is {name}
            </p>
            <SecondComponent />
        </div>
    )
}

export default FirstComponent;