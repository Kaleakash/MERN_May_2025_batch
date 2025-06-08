
function loadImage() {
    setTimeout(()=> {
        document.getElementById("image").style.display = "block";
    }, 2000);
}
var obj;
function startTask() {
   // alert("Hello ")
obj = setInterval(startTaskAsync,1000)
}
let i=0;
function startTaskAsync() {
        document.getElementById("output").innerHTML = "Task is running " + i;
        document.getElementById("clock").innerHTML= new Date().toLocaleTimeString();
        if(i%2==0){
        document.getElementsByTagName("body")[0].style.backgroundColor = "red";
         document.getElementsByTagName("h2")[0].style.color = "blue";
        }else {
        document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
       document.getElementsByTagName("h2")[0].style.color = "red";
        }
        i++;
}
function stopTask() {
    clearInterval(obj);
}