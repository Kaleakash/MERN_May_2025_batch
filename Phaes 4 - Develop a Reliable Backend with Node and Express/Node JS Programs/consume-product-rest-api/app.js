let express = require("express");
let app = express();
let axios = require("axios");
let USER_URL="https://jsonplaceholder.typicode.com/todos/";

// http://localhost:9090/

app.get("/",(request,response)=> {
    response.send("Welcome to Simple REst API")
})

// http://localhost:9090/findUser/1

app.get("/findUser/:id",async (request,response)=>{
    let id = request.params.id;
    try{
    //response.send("You pass the id as "+id)
    let output = await axios.get(USER_URL+"/"+id);
    //console.log(output.data)
    //response.send("done")  
        response.json(output.data)        
        }catch(error){
            response.json({"msg":"Record not present with id as "+id,"error":error.message})
        }
    
} )


app.listen(9090,()=>console.log("server running on port number 9090"))