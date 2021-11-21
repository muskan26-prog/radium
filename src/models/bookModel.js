const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const pId = mongoose.Schema.Types.ObjectId

const bookSchema= new mongoose.Schema({


    bookName: String,
    author : {
        type: ObjectId,
        ref: 'myAuthor'
    },
    price: Number,
    rating: Number,
    publisher: {
        type: pId,
        ref: 'myPublisher'
    }

}, {timestamps: true} )

module.exports = mongoose.model( 'myBook', bookSchema ) 

