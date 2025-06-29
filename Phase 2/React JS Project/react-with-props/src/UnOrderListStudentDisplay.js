function UnOrderListStudentDisplay(props) {

    return(
        <div>
            <ul>
                {props.students.map((sname,index)=>
                    <li key={index}>{sname}</li>
                )}
            </ul>
        </div>
    )
}

export default UnOrderListStudentDisplay;