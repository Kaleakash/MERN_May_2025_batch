function SimpleEvent() {

let handleEvent=()=> {
    console.log("External function event fired");
}
let keyEventHandle=()=>{
    console.log("key event fired");
}
    return(
        <div>
            <h5>React Simple Event</h5>
    <input type="button" value="Inline function event" 
    onClick={()=>console.log("Event fired")}/><br/>
    <input type="button" value="external function event" onClick={handleEvent}/><br/>
    <input type="text" placeholder="Type something here" onKeyUp={keyEventHandle}/>
        </div>
    )
}

export default SimpleEvent;