const express = require('express')
const app = express()
const PORT = 5500

// template engine
app.set('view engine', 'ejs')

// set static folder
app.use(express.static('public'))

// routes
app.get('/', (req, res) => {
    res.render('./pages/index')
})
app.get('/about', (req, res) => {
    res.render('./pages/about')
})
app.get('/courses', (req, res) => {
    res.render('./pages/courses')
})
app.get('/course-details', (req, res) => {
    res.render('./pages/course-details')
})
app.get('/trainers', (req, res) => {
    res.render('./pages/trainers')
})
app.get('/events', (req, res) => {
    res.render('./pages/events')
})
app.get('/pricing', (req, res) => {
    res.render('./pages/pricing')
})
app.get('/contact', (req, res) => {
    res.render('./pages/contact')
})

app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`))