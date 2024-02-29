const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('./pages/index')
})
app.get('/about', (req, res) => {
    res.render('./pages/about')
})
app.get('/book', (req, res) => {
    res.render('./pages/book')
})
app.get('/chefs', (req, res) => {
    res.render('./pages/chefs')
})
app.get('/contect', (req, res) => {
    res.render('./pages/contect')
})
app.get('/event', (req, res) => {
    res.render('./pages/event')
})

app.get('/gallery', (req, res) => {
    res.render('./pages/gallery')
})

app.get('/menu', (req, res) => {
    res.render('./pages/menu')
})
app.get('/specials', (req, res) => {
    res.render('./pages/specials')
})
app.get('/testimonials', (req, res) => {
    res.render('./pages/testimonials')
})
app.get('/whyus', (req, res) => {
    res.render('./pages/whyus')
})


app.listen(8000, () => {
    console.log('Listening on port 8000')
})