const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('./pages/index')
})


app.listen(8000, () => {
    console.log('Listening on port 8000')
})