// class Product {
//     pid = 100;
//     pname = "TV";
//     price = 56000;

//     displayProduct() {
//     document.writeln("Product Details:<br>");
//     document.writeln("Product ID: " + this.pid + "<br>");
//     document.writeln("Product Name: " + this.pname + "<br>");
//     document.writeln("Product Price: " + this.price + "<br>");
//     }
// }


// let product1 = new Product();
// product1.displayProduct();


class Product {

    constructor(pid,pname,price){
        this.pid = pid;
        this.pname = pname;
        this.price = price;
    }
    displayProduct() {
    document.writeln("Product Details:<br>");
    document.writeln("Product ID: " + this.pid + "<br>");
    document.writeln("Product Name: " + this.pname + "<br>");
    document.writeln("Product Price: " + this.price + "<br>");
    }
}


let product1 = new Product(100,"TV",56000);
let product2 = new Product(101,"Refrigerator",30000);
product1.displayProduct();
product2.displayProduct();
