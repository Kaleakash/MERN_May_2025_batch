let express = require("express");
let app = express();

let data = {
    message:"Welcome to Rest API",
    status:"success"
}
// http://localhost:3000/data/text 

app.get("/data/text",(request,response)=> {
    response.type("text/plain");        // set response type 
response.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`);
//response.send("<div><h1>Welcome to Rest API</h1></div>")
})
// http://localhost:3000/data/html
app.get("/data/html",(request,response)=> {
    response.type("text/html");        // set response type 
response.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`);
//response.send("<div><h1>Welcome to Rest API</h1></div>")
})
// http://localhost:3000/data/json
app.get("/data/json",(request,response)=> {
//response.type("text/json");        // set response type 
// response.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`);
//response.send("<div><h1>Welcome to Rest API</h1></div>")
    response.json(data);
})
// http://localhost:3000/data/xml 
app.get("/data/xml",(request,response)=> {
response.type("text/xml");        // set response type 
response.send(`<div><h1>${data.status}</h1><p>${data.message}</p></div>`);
//response.send("<div><h1>Welcome to Rest API</h1></div>")
})



app.listen(3000, ()=>console.log("Server is running on port 3000"));