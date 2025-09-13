let express = require('express');
let bodyParser = require('body-parser');    // body-parser is used to parse the incoming request body
let app = express();



// middleware to parse the incoming request body
app.use(bodyParser.urlencoded({extended:true}));

// http://localhost:3000/               this open index.html page 

app.get("/", (request, response) => {
//res.send("Hello World");              // send response to the client as text 
//response.sendFile("index.html");      // send the file to client. But we need to provide complete path of the file
//response.sendFile("D:\\Desktop\\MERN Stack - Dec 2024 Batch\\Phase 4\\Programs\\express modules program\\express-with-html\\index.html");
//response.send(__dirname );  // __dirname is global object which provide current directory path
response.sendFile(__dirname + "/index.html");
});

// http://localhost:3000/about_us       this open about_us.html page
app.get("/about_us", (request, response) => {
response.sendFile(__dirname + "/about_us.html");
});

// http://localhost:3000/contact_us       this open contact_us.html page
app.get("/contact_us", (request, response) => {
    response.sendFile(__dirname + "/contact_us.html");
    });

// http://localhost:3000/services       this open service.html page
app.get("/services", (request, response) => {
    response.sendFile(__dirname + "/services.html");
    });

    // http://localhost:3000/login       this open login.html page
app.get("/login", (request, response) => {
    response.sendFile(__dirname + "/login.html");
    });

// http://localhost:3000/sigIn   with get method with hard coding value check the login
// in get method data will pass through URL 
app.get("/signIn",(request,response)=> {
   // console.log(request)                // it hold the request details
    //console.log(request.query); // hold the query string value or form details 
    let emailId = request.query.emailId;    // get the value from the query string
    let password = request.query.password;  // get the value from the query string
    if(emailId == "admin@gmail.com" && password == "admin@123")
    {
        response.send("Login successfully with get method");
    }else {
        response.send("Login fail, try once again with get method");
    }
})

// http://localhost:3000/sigIn   with post method with hard coding value check the login
// in post method data send through request body part. 
app.post("/signIn",(request,response)=> {
    let data = request.body;
    //console.log(request.query); // hold the query string value or form details
    //console.log(data);
    //response.send("Data received");
    if(data.emailId == "admin@gmail.com" && data.password == "admin@123")
    {
        response.send("Login successfully with post method");
    }else {
        response.send("Login fail, try once again with post method");
    }
});

app.listen(3000, () => {
console.log('Server is running on port 3000');
});