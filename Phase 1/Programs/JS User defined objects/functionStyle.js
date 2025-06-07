// function Product() {

// this.pid = 100;
// this.pname = "TV";
// this.price = 50000;

// this.displayProduct = function() {
//     document.writeln("Product Details:<br>");
//     document.writeln("Product ID: " + this.pid + "<br>");
//     document.writeln("Product Name: " + this.pname + "<br>");
//     document.writeln("Product Price: " + this.price + "<br>");
// }

// }
// //Product();
// let product1 = new Product();
// let product2 = new Product();
// document.writeln("Product ID: " + product1.pid + "<br>");
// document.writeln("Product Name: " + product1.pname + "<br>");
// document.writeln("Product Price: " + product1.price + "<br>");

// document.writeln("Product ID: " + product2.pid + "<br>");
// document.writeln("Product Name: " + product2.pname + "<br>");
// document.writeln("Product Price: " + product2.price + "<br>");

// product1.displayProduct();

// creating product object using parameterized constructor style



function Product(pid, pname, price) {

this.pid = pid;
this.pname = pname;
this.price = price;

this.displayProduct = function() {
    document.writeln("Product Details:<br>");
    document.writeln("Product ID: " + this.pid + "<br>");
    document.writeln("Product Name: " + this.pname + "<br>");
    document.writeln("Product Price: " + this.price + "<br>");
}
}
let product1 = new Product(100, "TV", 50000);
let product2 = new Product(101, "Refrigerator", 30000);
product1.displayProduct();
product2.displayProduct();

