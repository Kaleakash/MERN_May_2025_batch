import { useState } from "react";

function MealsComponent() {

let URL ="https://www.themealdb.com/api/json/v1/1/search.php?s=";   // local variable 
let [meals,setMeals]=useState([{}]);        // state variable 

let loadMealsData=()=> {
    fetch(URL).then(response=>response.json()).
    then(result=>setMeals(result.meals)).catch(error=>console.log(error))
}
    return(
        <div>
            <h2>All Meals Details</h2>
            <input type="button" value="Load Meals Details"
            onClick={loadMealsData}/>
            <br/>
            <p>Total meals information is {meals.length}</p>
            <ol>
                {
                meals.map(meal=>
                    <li>
                        {meal.idMeal} {meal.strCategory} {meal.strInstructions}
                        <img src={meal.strMealThumb} width="100px" height="100px"/>
                    </li>
                )   
                }
            </ol>
        </div>
    )
}
export default MealsComponent;