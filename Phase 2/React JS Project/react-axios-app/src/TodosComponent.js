import {useState} from 'react';
import axios from 'axios';
function TodosComponent() {
let URL ="https://dummyjson.com/todos";
let [todos,setTodos]=useState([])
let loadAllTodoesDetails = ()=> {
    //alert("event fired")
   // axios.get(URL).then(result=>console.log(result)).catch(error=>console.log(error)) // it provide header as well as body part 
   //axios.get(URL).then(result=>console.log(result.data)).catch(error=>console.log(error))   // it provide only body data
   //axios.get(URL).then(result=>console.log(result.data.todos)).catch(error=>console.log(error)) // it provide that array data ie todoes
    axios.get(URL).then(result=>setTodos(result.data.todos)).catch(error=>console.log(error))
}
    return(
        <div>
            {loadAllTodoesDetails()}
            <h2>All Todos Details</h2>
            <hr/>
            {
              todos.map(t=>
                <p key={t.id}>{t.id}) {t.todo} :<b>{t.completed?"Yes":"No"}</b> {t.userId}</p>
              )  
            }
        </div>
    )
}
export default TodosComponent;