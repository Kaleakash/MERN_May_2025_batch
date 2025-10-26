let loginRepository = require("../repository/loginRepository.js");

let signUp = async(request,response)=> {
    let login = request.body;
    
    try{
    
    let result  = await loginRepository.signUp(login);
    //response.send(result);
        if(result!=undefined){
            response.json({msg:"Account created successfully"});
        }
    }catch(error){
        response.json({msg:error.message})
    }
}

let signIn = async(request,response)=> {
    let login = request.body;
    
    try{
    
    let result  = await loginRepository.signIn(login);
    response.send(result);

    }catch(error){
        response.send(error.message)
    }
}

module.exports = {
    signUp,
    signIn
}