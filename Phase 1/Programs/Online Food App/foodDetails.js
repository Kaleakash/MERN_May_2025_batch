function loadFoodDetails() {
    // fetch("https://dummyjson.com/recipes").
    // then(result=>result.json()).
    // then(result=>console.log(result)).
    // catch(error=>console.error("Error fetching food details:", error));


    fetch("https://dummyjson.com/recipes").
    then(result=>result.json()).
    then(result=>{
        let foodDetails = result.recipes;
        console.log(foodDetails);
        console.log(foodDetails.length);
        let output ="";
        for(let i=0;i<foodDetails.length;i++){
            //output += "Hello";
            output += foodDetails[i].id+", "+foodDetails[i].name+"<img src='"+foodDetails[i].image+"' width='100px' height='100px'/>   <br/>"
        }
        document.getElementsByTagName("body")[0].innerHTML=output
    }).
    catch(error=>console.error("Error fetching food details:", error));
    
}