import { useDispatch } from "react-redux";

function IncrementComponent() {
let dispatch = useDispatch();
let handleIncrement = () => {
    //dispatch({type:"Some Action"}); // it call reducer function with action type "Some Action"
    dispatch({type:"INCREMENT"}); // it will call reducer function with action type "INCREMENT"
}   
    return(
        <div>
            <h3>Increment Component</h3>
            <input type="button" value="Increment" onClick={handleIncrement}/>
        </div>
    )
}

export default IncrementComponent;