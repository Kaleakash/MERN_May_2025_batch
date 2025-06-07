function greeting(fname,callback) {
    return "Welcome "+callback(fname);
}
let maleInfo = function(fname){
    return "Mr "+fname;
}

let femaleInfo = (fname)=>"Miss "+fname;
document.writeln(greeting("John",maleInfo));
document.writeln("<br/>");
document.writeln(greeting("Jane",femaleInfo));
document.writeln("<br/>");
document.writeln(greeting("Raj",function(fname){
    return "Mr "+fname;
}))
document.writeln("<br/>");
document.writeln(greeting("Neena",(fname)=>"Miss "+fname));

