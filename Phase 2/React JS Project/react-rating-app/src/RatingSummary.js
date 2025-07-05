function RatingSummary(props) {


    return(
        <div>
            <h4>Your rating details</h4>
            {
            props.rating>0?<p>{props.rating}</p>:"No Rating given yet"      
            }
        </div>
    )
}

export default RatingSummary;