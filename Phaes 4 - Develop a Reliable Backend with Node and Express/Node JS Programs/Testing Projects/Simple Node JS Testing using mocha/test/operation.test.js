let op = require("../src/operation");
let assert = require("assert")
describe("Operation Testing ",()=> {

    it("Addition testing ",()=> {
        let result1 = op.add(10,20);
        assert.equal(result1,30)

    })

    it("Substraction testing ",()=> {

        let result1 = op.sub(100,50);
        assert.equal(result1,50)
    })

})