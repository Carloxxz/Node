import http from 'node:http'
import { findAvailablePort } from './free-port'

const desiredPort = process.env.PORT ?? 3000 //PORT=1234 node http.js

const server = http.createServer((req, res) => {
    console.log('request received')
    res.end('hola mundo')
})

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})

server.listen(0, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
})