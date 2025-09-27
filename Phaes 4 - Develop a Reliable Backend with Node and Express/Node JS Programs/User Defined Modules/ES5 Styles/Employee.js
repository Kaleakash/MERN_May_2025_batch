class Employee {
    constructor(id,name,age){
        this.id=id;
        this.name=name;
        this.age=age;
    }
    displayEmpInfo(){
        console.log("id is "+this.id+" name is "+this.name+" age is "+this.age)
    }
}

module.exports = Employee;