const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')

const userData = [
    {
        name: 'meet',
        email: 'meet@gmail.com',
        password: '123123',
        gender: 'male',
        hobbies: ['sport', 'study'],
        city: 'surat',
        address: 'Gujrat'
    }
]

app.get('/', (req, res) => {
    res.render('pages/index', { userData })
})

app.get('/add', (req, res) => {
    res.render('pages/addForm')
})

app.post('/add', (req, res) => {
    userData.push(req.body)
    res.redirect('/')
})

app.get('/edit/:id', (req, res) => {
    const { id } = req.params
    res.render('pages/editForm', { user: userData[id] })
})

app.post('/edit/:id', (req, res) => {
    const { id } = req.params
    userData[id] = req.body
    res.redirect('/')
})

app.get('/delete/:id', (req, res) => {
    const { id } = req.params
    userData.splice(id, 1)
    res.redirect('/')
})

app.listen(8000, () => {
    console.log('Listening on port 8000')
})