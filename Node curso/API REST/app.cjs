const express = require('express')
const crypto = require('node:crypto')
const movies = require('./movies.json')
const { validateMovie } = require('./schemas/movies')


const app = express()
const PORT = process.env.PORT ?? 1234
app.use(express.json())

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
    const { genre } = req.query
    if (genre) {
        const filterMovies = movies.filter(
            movie => movie.genre.some(g => g.toLowerCase() == genre.toLowerCase())
        )
        return res.json(filterMovies)
    }
    res.json(movies)
})

app.get('/movies/:id', (req, res) => {
    const { id } = req.params
    const movie = movies.find(movie => movie.id == id)
    if (movie) return res.json(movie)

    res.status(404).json({ message: 'Movie not found' })
})

app.post('/movies', (req, res) => {
    const result = validateMovie(req.body)

    if (!result.success) {
        // 422 Unprocessable Entity
        return res.status(400).json({ error: JSON.parse(result.error.message) })
    }

const newMovie = {
    id: crypto.randomUUID(), // uuid v4 universal unique id
    ...result.data
}

/*
const {
    title,
    genre,
    year,
    director,
    duration,
    rate,
    poster
} = req.body
*/

//No es REST porque se guarda el estado
//de la aplicación en memoria

movies.push(newMovie)
res.status(201).json(newMovie) //actualizar la caché del cliente
})

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`)
})