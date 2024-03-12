const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    release_year: Number,
    genre:String,
    rating: Number,
    image:String

}, { timestamps: true })

const MovieModal = mongoose.model('movie', movieSchema)
module.exports = MovieModal