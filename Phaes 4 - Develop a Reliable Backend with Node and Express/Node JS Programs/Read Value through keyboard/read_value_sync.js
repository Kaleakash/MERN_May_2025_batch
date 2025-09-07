let obj = require("readline-sync");
console.log("Module loaded not ");
let id = obj.questionInt("Enter your id: ");
let name = obj.question("Enter your name: ");
let salary = obj.questionFloat("Enter your salary: ");
let email = obj.questionEMail("Enter your email: ");
let password = obj.questionNewPassword("Set your password: ");

console.log("Your id is: " + id);
console.log("Your name is: " + name);
console.log("Your salary is: " + salary);
console.log("Your email is: " + email);
console.log("Your id password: " + password);