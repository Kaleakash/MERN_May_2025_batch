function loadFoodDetails() {
    fetch("https://dummyjson.com/recipes").
    then(result=>result.json()).
    then(result=>console.log(result)).
    catch(error=>console.error("Error fetching food details:", error));
}