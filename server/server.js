const express = require('express')
const path = require('path')
const cors = require('cors')
const server = express()

server.use('/', require('./routes'))

// accepts any api call from any ip address
server.use(cors())
// needed for converting POST data into json and stores it into req.body
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
// automatically sets path when importing stuff into index.html
server.use(express.static(path.resolve('server', 'public')))

module.exports = server
