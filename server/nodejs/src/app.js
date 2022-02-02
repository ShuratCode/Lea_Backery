const express = require('express')
const app = express()
const helmet = require('helmet')
const csrf = require('csurf')
const cookieParser = require('cookie-parser')
const apiRouter = require('./api/index')

const csrfProtection = csrf({ cookie: true })
app.use(helmet())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.disable('x-powered-by')
app.use('/api/', csrfProtection, apiRouter)

module.exports = app
