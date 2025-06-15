function Employee() {
// declaring normal variable in component 
let id=100;
let name = "Raj Deep";
let age = 21;


    return(
        <div>
            <h2>Employee Details</h2>
            <p>Employee Id : {id}</p>
            <p>Employee Name : {name}</p>
            <p>Employee Age : {age}</p>
        </div>
    )
}

export default Employee;