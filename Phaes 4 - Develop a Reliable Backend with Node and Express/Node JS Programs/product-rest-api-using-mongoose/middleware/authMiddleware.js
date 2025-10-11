let jwt = require("jsonwebtoken");
let verifyToken= (request,response,next)=> {
    console.log("Auth Middleware Called");
    let token = request.headers["authorization"];
    //console.log("Token is ",token);
    if(token==undefined || token==null) {
        response.json({message:"Unauthorized User"});
    }else {
        try{
        let decode = jwt.verify(token,"TokenKey");
        console.log("Decode is ",decode);
        next();
        }catch(err){
            response.json({message:"Invalid Token" + err.message});
        } 
    }
    
}

module.exports= {verifyToken};