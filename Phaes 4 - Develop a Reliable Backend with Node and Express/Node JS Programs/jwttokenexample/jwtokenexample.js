let jwt = require("jsonwebtoken");

let key1 = "myKey1";

let uniqueData1= {"emailId":"raj@gmail.com"};

let token1 = jwt.sign(uniqueData1,key1,{expiresIn:"10s"});


let key2 = "myKey2";

let uniqueData2= {"emailId":"ravi@gmail.com"};

let token2 = jwt.sign(uniqueData2,key2);

console.log(token1);            // send to client application 
console.log("------------------------")
console.log(token2)             // send to client application 

console.log("Verify token")
console.log("First token1")
setTimeout(()=> {

try{
let decodeToken= jwt.verify(token1,key1);
console.log(decodeToken);
}catch(error){
    console.log(error.message)
}

},12000);

