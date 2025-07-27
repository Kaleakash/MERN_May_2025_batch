class Employee {
    // id=100;
    // name="Ravi";
    // salary=14000;       // instance variable 

    constructor() {
        console.log("object created...")
        this.id=100;
        this.name="Ravi";
        this.salary=14000;       // instance variable 
    }
    display() {         // function 
        console.log("id is "+this.id)
        console.log("name is "+this.name)
        console.log("salary is "+this.salary)
    }
}
let emp1  = new Employee();
emp1.display();