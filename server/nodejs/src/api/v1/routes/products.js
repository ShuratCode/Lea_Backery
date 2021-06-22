const express = require('express')
const router = express.Router()
const OK_STATUS = require('../../../config/globals').OK_STATUS

router.get('/', (request, response) => {
    response.status(OK_STATUS)
    response.json({
        message: 'Handling GET requests to /products',
    })
})

module.exports = router
