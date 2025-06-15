import { useState } from "react";

function ArrayStateComponent() {
let [num,setNum] = useState([100,200,300,400,500]);
let [names,setNames] = useState(["John","Mike","Sara","Tom"]);


    return(
        <div>
            <h3>React Array State Variable Example</h3>
            <h4>Array numbers</h4>
            <p>All numbers {num}</p>
            <ul>
                {num.map(n=><li>{n}</li>)}
            </ul>
            <h4>Array names</h4>
            <p>All names {names}</p>
            <ol>
                {names.map(name=><li>{name}</li>)}
            </ol>
        </div>
    )
}

export default ArrayStateComponent;