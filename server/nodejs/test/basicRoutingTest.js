const app = require('../src/app')
const chai = require('chai')
const should = chai.should()
const chaiHttp = require('chai-http')
chai.use(chaiHttp)

describe('Simple routing testing', function () {
    it('/api/v1/products should return default JSON with 200 OK', async () => {
        const response = await chai.request(app).get('/api/v1/products')
        response.status.should.equal(200)
        response.type.should.equal('application/json')
        response.body.should.eql({
            message: 'Handling GET requests to /products',
        })
    })
})
