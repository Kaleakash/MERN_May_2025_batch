import { useContext } from "react";
import MyContext from "./MyContext";

function Child10() {
let counterResult = useContext(MyContext);  // get the context reference using useContext hook  
    return(
        <div>
            <h3>Child10 Component</h3>
            <p>Count value in Child10 component is {counterResult}</p>
        </div>
    )
}

export default Child10;