import { useState } from "react";
import RatingSelector from "./RatingSelector";
import RatingSummary from "./RatingSummary";

function RatingApp() {
let [ratingDetails,setRatingDetails]=useState(0);

let handleRatingRange= (ratingData)=> {
    setRatingDetails(ratingData);           // we set value to ratingDetails state variable 
}                                           // part of RatingApp component. Those value receive from 
    return(                                 // child component ie RatingSelector 
        <div>
            <h3>Rating App</h3>
            <RatingSelector passRatingToParent={handleRatingRange}></RatingSelector>
            <RatingSummary rating={ratingDetails}></RatingSummary>
        </div>
    )
}

export default RatingApp;