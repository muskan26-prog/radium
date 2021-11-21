const mongoose=require('mongoose')

const AuthorSchema=new mongoose.Schema({
    author_id : {
                type: Number, 
                required: true
            },
    author_Name : String,
    age : Number,
    address : String

}, {timestamps: true} )

module.exports=mongoose.model('Author',AuthorSchema)