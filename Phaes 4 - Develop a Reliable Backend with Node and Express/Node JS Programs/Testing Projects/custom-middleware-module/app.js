let express = require("express")
let app = express();


let customMiddleware= (request,response,next)=> {
    let dd = new Date();
    console.log(dd.toString());
    console.log(request.method);
    console.log(request.url);
    console.log("Custom Middleware Executed");
    if(request.url==="/greeting") {
        response.send("you can't call the greeting endpoint");
    }else {
        next();
    }
}

app.use(customMiddleware);

// http://localhost:3000/
app.get("/",(request,response)=>{
    response.send("Hello World");
})

// http://localhost:3000/greeting
app.get("/greeting",(request,response)=> {
    response.send("Hello from the greeting endpoint!");
})


app.listen(3000,()=>{
    console.log("Server started on port 3000");
});