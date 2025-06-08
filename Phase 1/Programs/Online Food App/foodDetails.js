let cart = [];
let foodDetailsInformation = [];
function addToCart(foodId) {
    console.log("Food item added to cart:", foodId);
    cart.push(foodId);
    document.getElementById("cartCount").innerText = "Number of items is cart is "+cart.length;
}

function loadFoodDetails() {
    // fetch("https://dummyjson.com/recipes").
    // then(result=>result.json()).
    // then(result=>console.log(result)).
    // catch(error=>console.error("Error fetching food details:", error));


    fetch("https://dummyjson.com/recipes").
    then(result=>result.json()).
    then(result=>{
        let foodDetails = result.recipes;
        foodDetailsInformation = foodDetails; // Store the food details in a global variable
       // console.log(foodDetails);
        //console.log(foodDetails.length);
        // append the food details to the body of the document as string 
        // let output ="";
        // for(let i=0;i<foodDetails.length;i++){
          //output += "Hello";
        //     output += foodDetails[i].id+", "+foodDetails[i].name+"<img src='"+foodDetails[i].image+"' width='100px' height='100px'/>   <br/>"
        // }
        // document.getElementsByTagName("body")[0].innerHTML=output

        for(let i=0;i<foodDetails.length;i++){
            let foodItem = document.createElement("div");
            foodItem.setAttribute("class", "food-item");
            foodItem.innerHTML = `
                <p>${foodDetails[i].name}</p>
                <img src="${foodDetails[i].image}" width="100px" height="100px"/>
                <p>${foodDetails[i].rating}</p>
                <input type="button" value="Add to Cart" onclick="addToCart(${foodDetails[i].id})" class="btn btn-outline-primary"/>
            `;
            document.body.appendChild(foodItem);
        }
        //let name = "Raj Deep"
        // document.getElementsByTagName("body")[0].innerHTML = "Your "+
        // " name is "+name;

    //     document.getElementsByTagName("body")[0].innerHTML =` Your 
    //     name 
    //     is 
    // ${name}
    //'    

    }).
    catch(error=>console.error("Error fetching food details:", error));
    
}