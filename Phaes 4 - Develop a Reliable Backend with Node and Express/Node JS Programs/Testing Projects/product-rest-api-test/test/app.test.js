let app = require("../src/app")
let chai = require("chai")
let chaihttp = require("chai-http");

chai.use(chaihttp);    

 // using middleware to enable test http methods 

describe("Rest API Testing ",()=> {

    it("Get Method to Test get Text Message",async()=> {
        let res = await chai.request(app).get("/");
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.have.equal("Welcome to Rest API")
    })

})