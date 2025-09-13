let express = require('express');           // load the express module 
let app = express();                    // creating reference of express module

// http://localhost:3000/       : it consider as get method. 
app.get("/", (request, response) => {
    response.send("Welcome to Express JS Application");
});

// http://localhost:3000/about_us       : it consider as get method. 
app.get("/about_us", (request, response) => {
    response.send("<font color='red'>About Us Page</font>");
});

// http://localhost:3000/contact_us       : it consider as get method. 
app.get("/contact_us", (request, response) => {
    response.send("<h1>Contact Js Page</h1>");
});

// http://localhost:3000/service      : it consider as get method. 
app.get("/service", (request, response) => {
    response.send("<h2>We provide different type of service</h2>");
});


// application running on port 3000
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});