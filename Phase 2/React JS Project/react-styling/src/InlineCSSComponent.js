import { useState } from "react";

function InlineCSSComponent() {

let myStyle = {"color":"red","backgroundColor":"yellow","fontSize":"20pt"}


let [myh1Style,setMyH1Style] = useState({"color":"red"})

let changeColor= ()=> {
    setMyH1Style({"color":"blue"})
}
let originalColor= ()=> {
    setMyH1Style({"color":"red"})
}
    return(
        <div>
            <h1 style={myh1Style} onMouseOver={changeColor} onMouseOut={originalColor}>Welcome to React Inline CSS Effect</h1>
            <h3>React JS Inline CSS Example</h3>
            <p style={{"color":"red","backgroundColor":"yellow","fontSize":"20pt"}}>
                This inline CSS styling
            </p>
            <div style={myStyle}>This is div tag </div>
            
        </div>
    )
}

export default InlineCSSComponent;