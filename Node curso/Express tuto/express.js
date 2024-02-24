import express from 'express'

const app = express()
app.disable('x-powered-by')
const PORT = process.env.PORT ?? 1234

app.use(express.json())

/* app.use((req, res, next) => {
    console.log('mi primer middleware')
    if (req.method != 'POST') return next()
    if (req.headers['content-type'] != 'application/json') return next()

    let body = ''

    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        const data = JSON.parse(body)
        data.timestamp = Date.now()
        // mutar la request y meter la información en el req.body
        req.body = data
        next()
    })
}) */

app.get('/', (req, res) => {
    res.status(200).send('<h1>Mi página</h1>')
})

app.post('/pokemon', (req, res) => {
    res.status(201).json(req.body)
})

app.use((req, res) => {
    res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`)
})