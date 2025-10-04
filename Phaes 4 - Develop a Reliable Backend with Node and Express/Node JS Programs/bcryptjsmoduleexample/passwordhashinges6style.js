let bcryptjs = require("bcryptjs");
let originalPassword = "steven@123";
let wrongPassword = "steven@12345";
let saltNumber = 10;
async function hashPasswordFunction(originalPassword,saltNumber){
    let salt = await bcryptjs.genSalt(saltNumber)
    let hashPassword = await bcryptjs.hash(originalPassword,salt)
    return hashPassword;
}

async function checkPassword(originalPassword,hashPassword){
    let result  = await bcryptjs.compare(originalPassword,hashPassword)
    return result;
}

async function passwordTask() {
let hashPassword = await hashPasswordFunction(originalPassword,saltNumber);
console.log("original password "+originalPassword)
console.log("hashPassword "+hashPassword)
console.log("-------------------------------")
let result = await checkPassword(wrongPassword,hashPassword)
if(result){
    console.log("password is correct")
}else {
    console.log("password is wrong")
}
}



passwordTask();