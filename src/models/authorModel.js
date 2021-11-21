const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    authorName: String,
    age: Number,
    address: {
        pin: Number,
        address: String
    }

}, {timestamps: true} )

module.exports = mongoose.model( 'myAuthor',authorSchema )
