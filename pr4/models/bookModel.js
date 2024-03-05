const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: String,
    author: String,
    published: Number,
    stock: Number,
    price: Number


}, { timestamps: true })

const BooksModal = mongoose.model('books', bookSchema)
module.exports = BooksModal