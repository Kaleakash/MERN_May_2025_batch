let fs = require("fs");
// creating object in literal style 
let employee = {id:102,fname:"Leena",age:26,salary:46000};
// converting object to string format 
let employeeStringData = JSON.stringify(employee);
fs.writeFileSync("emp.json",employeeStringData);
//fs.appendFileSync("emp.json",employeeStringData);
console.log("Data stored in emp.json file");