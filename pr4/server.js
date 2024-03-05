const express = require('express')
const app = express()
const { connectDb } = require('./config/db')
const bookModel = require('./models/bookModel');

connectDb()

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', async (req, res) => {
    const books = await bookModel.find()
    res.render('pages/index', { books })
})

app.get('/add', (req, res) => {
    res.render('pages/add')
})

app.post('/add', async (req, res) => {
    const books = await bookModel(req.body)
    await books.save()
    res.redirect('/')
})

app.get('/edit/:id', async (req, res) => {
    const { id } = req.params
    const books = await bookModel.findOne({ _id: id })
    res.render('pages/edit', { books })

})

app.post('/edit/:id', async (req, res) => {
    const { id } = req.params
    const books = await bookModel.updateOne({ _id: id }, req.body)

    res.redirect('/')
})

app.get('/delete/:id', async (req, res) => {
    const { id } = req.params

    const books = await bookModel.deleteOne({ _id: id })
    res.redirect('/')
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})