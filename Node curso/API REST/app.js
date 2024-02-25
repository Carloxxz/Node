const express = requiere('express')

const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')


app.get('/movies', (req, res) => {
    res.json(movies)
})

app.get('/adcd/', (req, res) => {
    const { id } = req.params
})

app.listen(PORT, () => {
     console.log(`Servidor escuchando en http://localhost:${PORT}`)
})