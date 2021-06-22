const app = require("../src/app");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

describe("Simple routing testing", function () {
  it("/ should return empty JSON with 200 OK", async () => {
    const response = await chai.request(app).get("/");
    response.status.should.equal(200);
    response.type.should.equal("application/json");
    response.body.should.eql({});
  });
});
