const port = 3000

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
const queryParser = require('express-query-int')
let cors = require('cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())
server.use(cors())

server.listen(process.env.PORT || port, function() {
    console.log(`BACKEND is running on port ${process.env.PORT || port}.`)
}) 

module.exports = server