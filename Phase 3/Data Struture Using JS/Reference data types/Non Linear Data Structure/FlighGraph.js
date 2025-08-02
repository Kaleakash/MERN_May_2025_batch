class Graph {
    constructor() {
        this.listOfCities = {}        // object type ie literal style {} this object can hold array of vertex
    }
    addCity(city){
        if(this.listOfCities[city]==undefined){
            this.listOfCities[city]=[]; // if city not present then create for that vertex array variable
            console.log("City with name "+city+" created "+this.listOfCities[city])
        }else {
            console.log(city+", city present in graph")
        }
    }
    addRoute(sourceCity,destinationCity,price){
        if(this.listOfCities[sourceCity]==undefined || this.listOfCities[destinationCity]==undefined){
        console.log("May be any of the city not present or not created")
        }else {
            let result = this.listOfCities[sourceCity].find(city=>city==destinationCity)
            if(result==undefined){
                this.listOfCities[sourceCity].push({city:destinationCity,price:price});
                console.log(sourceCity+" flight connected to "+destinationCity)
            }else {
                console.log(sourceCity+" already connected to "+destinationCity)
            }
            
        }
    }
    printFlightRouteDetails() {
        for(let city in this.listOfCities){
            if(this.listOfCities[city].length==0){
                console.log("From "+city+" no flight are available")
            }else {
                let routesDetails = this.listOfCities[city].map(c=>c.city+"("+c.price+")")
                console.log(city+" to --->"+routesDetails)
            }
            
        }
    }
}

let graph = new Graph();
graph.addCity("Bangalore");
graph.addCity("Delhi");
graph.addCity("Pune");
graph.addCity("Mumbai");
graph.addCity("Mumbai");

graph.addRoute("Bangalore","Delhi",12000)
graph.addRoute("Bangalore","Pune",6500)
graph.addRoute("Bangalore","Mumbai",8600)
graph.addRoute("Delhi","Pune",7500)
graph.addRoute("Mumbai","Pune",2200)
graph.addRoute("Mumbai","Delhi",10000)
graph.addRoute("Mumbai","Bangalore",9200)
console.log()
console.log("-----------------")
console.log()
console.log("All Flight Details")
graph.printFlightRouteDetails();