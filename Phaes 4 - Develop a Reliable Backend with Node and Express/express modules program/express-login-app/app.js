// load the modules 

let express = require('express');
let bodyParser = require('body-parser');

// created the reference of express module
let app = express();
// port number 
let PORT = 3000;

//middleware 
app.use(bodyParser.urlencoded({ extended: true }));

// creating array of logins which hold emailId and password 
// in memory database. 
let logins=[
    {"email":"john@gmail.com","password":"john@123"},
    {"email":"steven@gmail.com","password":"steven@123"}
]

// open login.html file
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

// open signup.html file 
app.get("/register", (req, res) => {
    res.sendFile(__dirname + "/signup.html");
});

// get the value from index.html page and check email and password is correct or not from array 
// variable logins

app.post("/SignIn",(req,res)=> {
    let login = req.body;
    let result = logins.find(l=>l.email==login.email && l.password==login.password);
    if(result==undefined){
        res.send("Invalid Login");
    }else {
        res.send("Login Successfully");
    }
})
// get the value from signup.html page and check email and password is correct or not from array
// if present don't create the account else store data in array variable. 
app.post("/SignUp",(req,res)=> {
    let login = req.body;           // get the value from signup.html page
    let result = logins.find(l=>l.email==login.email);
    if(result==undefined){
        logins.push(login);         // we store new login details in array variable. 
        res.send("Account Created Successfully");
    }else {
        res.send("Already account exists");
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})