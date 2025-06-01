//alert("Welcome to External JS File")

//var h1TagValue = document.getElementsByTagName("h2")[2].innerHTML
//alert(h1TagValue)

var h1TagsCount = document.getElementsByTagName("h2").length
//alert(h1TagsCount)
for(var i=0;i<h1TagsCount;i++){
    var h1TagValue = document.getElementsByTagName("h2")[i].innerHTML
    console.log(h1TagValue)
}
