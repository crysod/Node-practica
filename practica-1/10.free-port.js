const { Resolver } = require('node:dns/promises')
const net = require('node:net')

function findAvailableport(desiredPort){
    return new Promise((resolve, reject) => {
        const server = net.createServer()
    })

    server.listen(desiredPort, () =>{
        const { port } = server.address()
        server.close(() => {
            Resolver(port)
        })

        server.on('error', (err) =>  {
            if (err.code ==='EADDRINUSE'){
                findAvailableport(0).then(port => resolve(port))
            } else{
                reject(err)
            }
        })
    })
}

module.exports = { findAvailableport }