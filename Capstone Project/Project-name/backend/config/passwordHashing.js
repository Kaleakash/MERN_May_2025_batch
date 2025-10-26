
let bcryptjs = require("bcryptjs");

async function hashPasswordFunction(originalPassword){
    let salt = await bcryptjs.genSalt(10);
    let hashPassword = await bcryptjs.hash(originalPassword,salt)
    return hashPassword;
}

async function checkPassword(originalPassword,hashPassword){
    let result  = await bcryptjs.compare(originalPassword,hashPassword)
    return result;
}


module.exports = {hashPasswordFunction,checkPassword}

