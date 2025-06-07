let product1 ={pid:100,pname:"TV",price:56000} // Object Literal    : it contains only property no function 
let product2 ={id:100,name:"TV",amount:56000} // Object Literal    : it contains only property no function 
document.writeln("Object creation in literal style<br/>")
document.writeln("PId is "+product1.pid+"<br/>")
document.writeln("PName is "+product1.pname+"<br/>")
document.writeln("Price is "+product1.price+"<br/>")
document.writeln("<hr/>")
let emp1 = {id:1,fname:"John",age:21,display:function(){    // property as well as function to do some operation on those property 
    document.writeln("EmpId is "+this.id+"<br/>")       // this keyword is use to refer to current object. 
    document.writeln("EmpName is "+this.fname+"<br/>")
    document.writeln("EmpAge is "+this.age+"<br/>")
},setAge:function(age){
    this.age = age;
}}
emp1.display(); // Calling the display method of emp1 object    
emp1.setAge(24)
emp1.display(); // Calling the display method of emp1 object again to see the updated age
document.writeln("<br/> Employee id using object name "+emp1.id)