function InlineCSSComponent() {

let myStyle = {"color":"red","backgroundColor":"yellow","fontSize":"20pt"}

    return(
        <div>
            <h3>React JS Inline CSS Example</h3>
            <p style={{"color":"red","backgroundColor":"yellow","fontSize":"20pt"}}>
                This inline CSS styling
            </p>
            <div style={myStyle}>This is div tag </div>
        </div>
    )
}

export default InlineCSSComponent;