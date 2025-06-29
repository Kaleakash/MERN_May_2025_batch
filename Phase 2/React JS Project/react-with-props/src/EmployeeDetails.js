function EmployeeDetails(props) {   // props is object consider ready to receive the value from parent component 



    return(
        <div>
            <h3>Employee details</h3>
            <h4>{props.msg}</h4>
            <p>In Employee Details Component , Id is {props.eid} and Name is {props.e_name}</p>
        </div>
    )
}

export default EmployeeDetails;