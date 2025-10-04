let LoginModel = require("../model/loginModel.js")
let PasswordHash = require("../config/passwordHashing.js");

let signUp = async(login)=> {
    let originalPassword = login.password;
    let hashPassword = await PasswordHash.hashPasswordFunction(originalPassword);
    login.password=hashPassword;
    let l = new LoginModel(login);
    return await l.save(); 
}

let signIn = async(login)=> {
   // return await LoginModel.findOne({$and:[{emailId:login.emailId},{password:login.password}]})
    let UserFromDb = await LoginModel.findOne({emailId:login.emailId});
    if(UserFromDb!==null){
        let actualTextPassword = login.password;        // text format 
        let hashPassword = UserFromDb.password;         // hash format receive from db. 
        let isMatch = await PasswordHash.checkPassword(actualTextPassword,hashPassword);
        if(isMatch){
            if(login.typeOfUser==UserFromDb.typeOfUser && login.typeOfUser=="admin"){
                return "Admin Login Successfully"
            }else if(login.typeOfUser==UserFromDb.typeOfUser && login.typeOfUser=="customer"){
                return "Customer Login Successfully"
            }else {
                return "Type of user is wrong";
            }
        }else {
            return "Password is wrong";
        }
    }else {
        return "EmailId is wrong";
    }
    
}

module.exports = {
    signUp,
    signIn
}




