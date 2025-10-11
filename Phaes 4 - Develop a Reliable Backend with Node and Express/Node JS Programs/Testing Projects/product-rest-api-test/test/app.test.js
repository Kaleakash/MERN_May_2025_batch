let app = require("../src/app")
let chai = require("chai")
let chaiHttp = require("chai-http");

// If chaiHttp is undefined or does not work, try this:

 // using middleware to enable test http methods 

chai.use(chaiHttp);    


describe("Rest API Testing ",()=> {
    before(()=> {
        console.log("Before Test start - we can perform some task")
    });
    it("Get Method to Test get Text Message",async()=> {
        let res = await chai.request(app).get("/");
        chai.expect(res).to.have.status(200);
        chai.expect(res.text).to.have.equal("Welcome to Rest API")
    })
     it("Get All product details ",async()=> {
        let res = await chai.request(app).get("/products");
        chai.expect(res).to.have.status(200);
        //console.log(res.body)
        chai.expect(res.body).to.be.a('array');
        chai.expect(res.body.length).to.equal(1);
        chai.expect(res.body[0]).to.have.property('id');
         chai.expect(res.body[0]).to.have.property('name');
        chai.expect(res.body[0]).to.have.property('price');

        chai.expect(res.body[0]).to.have.property('id',1);
        chai.expect(res.body[0]).to.have.property('name',"mobile");
        chai.expect(res.body[0]).to.have.property('price',20000);
    })
    after(()=> {
        console.log("After test finish - we can perform some task")
        //process.exit(0);
    });
})