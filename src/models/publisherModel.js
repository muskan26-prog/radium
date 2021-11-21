let mongoose = require('mongoose');

let publisherSchema = new mongoose.Schema( {
    name: String,
    headQuarter: String

}, {timestamps: true});

module.exports = mongoose.model('myPublisher', publisherSchema)