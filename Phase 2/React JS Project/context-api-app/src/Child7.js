import { useContext } from "react";
import MyContext from "./MyContext";

function Child7() {
let counterResult = useContext(MyContext);  // get the context reference using useContext hook  
    return(
        <div>
            <h3>Child7 Component</h3>
            <p>Counter value is in Child7 component {counterResult}</p>
        </div>
    )
}

export default Child7;