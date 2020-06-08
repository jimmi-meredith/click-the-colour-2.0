const server = require('./server')

const port = process.env.PORT || 3000

// makes the server available on the port
server.listen(port, () => {
  console.log('Listening on port: ', port)
})
