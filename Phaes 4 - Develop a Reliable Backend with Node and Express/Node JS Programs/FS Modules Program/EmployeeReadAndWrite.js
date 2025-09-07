let fs = require("fs");
let data = fs.readFileSync("employees.json");
let employees = JSON.parse(data.toString());
let emp1 = {"id":102,fname:"Raj",age:23,salary:31000};
if(employees.length == 0){
    console.log("No employees found");
    employees.push(emp1);
    fs.writeFileSync("employees.json",JSON.stringify(employees));
    console.log("Employees added successfully");
}else {
    console.log("Employees details");
    console.log(employees);
    let result = employees.find(e=>e.id==emp1.id);
    if(result==undefined){
        console.log("Employee not found, adding new employee");
        employees.push(emp1);
        fs.writeFileSync("employees.json",JSON.stringify(employees));
        console.log("New employee added successfully");
    }else {
        console.log("Employee found, not adding new employee");
    }

}