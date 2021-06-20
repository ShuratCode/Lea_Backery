const app = require('../src/app');
const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);



describe("Simple routing testing", function() {
    it("/ should return empty JSON with 200 OK", function(done)
    {
        chai.request(app)
        .get('/')
        .end((err, res) => {
            should.not.exist(err);
            res.status.should.equal(200);
            res.type.should.equal('application/json');
            res.body.should.eql({});
            done();
        });
    });
});