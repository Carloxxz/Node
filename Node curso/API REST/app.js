const express = requiere('express')

const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')

app.get('/', (req, res) => {
    res.json({ message: 'hola mundo'})
})

app.listen(PORT, () => {
     console.log(`Servidor escuchando en http://localhost:${PORT}`)
})