import { useContext } from "react";
import Child4 from "./Child4";
import Child5 from "./Child5";
import MyContext from "./MyContext";

function Child1(props) {
let counterResult = useContext(MyContext);  // get the context reference using useContext hook  
    return(
        <div>
            <h3>Child1 Component</h3>
            <p>Counter value in Child1 component is {counterResult}</p>
            <p>Counter value in child1 component accessing using props {props.countValue}</p>
            <Child4></Child4>
            <Child5></Child5>
        </div>
    )
}

export default Child1;