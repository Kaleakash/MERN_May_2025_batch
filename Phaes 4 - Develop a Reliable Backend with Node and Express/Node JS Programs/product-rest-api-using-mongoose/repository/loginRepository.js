let LoginModel = require("../model/loginModel.js")

let signUp = async(login)=> {
    let l = new LoginModel(login);
    return await l.save(); 
}

let signIn = async(login)=> {
    return await LoginModel.findOne({$and:[{emailId:login.emailId},{password:login.password}]})
}

module.exports = {
    signUp,
    signIn
}




