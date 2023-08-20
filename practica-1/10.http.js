const http = require('node:http')

const server = http.createServer((req, res) => {
    console.log('request recivided');
    res.end('Hola Cristian')
})

server.listen(0, () => {
    console.log(`listening on port: http://localhost${server.address().port}`)
})