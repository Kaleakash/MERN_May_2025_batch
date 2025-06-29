function OrderListStudentDisplay(props) {

    return(
        <div>
            <ol>
                {props.students.map((sname,index)=>
                    <li key={index}>{sname}</li>
                )}
            </ol>
        </div>
    )
}

export default OrderListStudentDisplay;