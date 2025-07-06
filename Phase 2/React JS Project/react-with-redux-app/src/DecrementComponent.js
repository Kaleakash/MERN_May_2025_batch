import { useDispatch } from "react-redux";

function DecrementComponent() {
let dispatch = useDispatch();
let handleIncrement = () => {
    //dispatch({type:"Some Action"}); // it call reducer function with action type "Some Action"
    dispatch({type:"DECREMENT"}); // it will call reducer function with action type "INCREMENT"
}   
    return(
        <div>
            <h3>Decrement Component</h3>
            <input type="button" value="Decrement" onClick={handleIncrement}/>
        </div>
    )
}

export default DecrementComponent;