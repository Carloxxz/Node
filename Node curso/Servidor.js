import http from 'node:http'
import fs from 'node:fs'
import { findAvailablePort } from './free-port'

const desiredPort = process.env.PORT ?? 3000 //PORT=1234 node http.js

const processRequest = (req, res) => {
    // console.log('request recived: ', req.url)
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    if (req.url == '/') {
        res.status = 200 //200
        // res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('Bienvenido a mi página de inicio')
    } else if (req.url == '/contacto') {
        res.statusCode = 200 // 200
        // res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('Página de contacto')
    } else if (req.url == '/imagen-super-bonita.png') {
        fs.readFile('./placa.png', (err, data) => {
            if (err) {
                res.statusCode = 500
                res.end(<h1>500 Internal Server Error</h1>)
            } else {
                res.setHeader('Content-Type', 'image/png')
                res.end(data)
            }
        })
    } else {
        res.statusCode = 404
        // res.setHeader('Content-Type', 'text/html; charset=utf-8')
        res.end('<h1>404</h1>')
    }

}

const server = http.createServer(processRequest)

findAvailablePort(desiredPort).then(port => {
    server.listen(port, () => {
        console.log(`server listening on port http://localhost:${port}`)
    })
})

server.listen(0, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`)
})