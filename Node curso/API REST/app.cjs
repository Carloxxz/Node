const express = require('express')
const movies = require('./movies.json')

const app = express()
const PORT = process.env.PORT ?? 1234

app.disable('x-powered-by')
/*
app.get('/', (req, res) => {

    const format = req.query.format

    if (format === 'html') {
        res.send()
    }
    res.json({ message: 'hola mundo' })
})
*/

app.get('/movies', (req, res) => {
    res.json(movies)
})

app.get('/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)
    if(movie) return res.json(movie)

    res.status(404).json({ message: 'Movie not found' })
})

app.listen(PORT, () => {
     console.log(`Servidor escuchando en http://localhost:${PORT}`)
})