const mongoose=require('mongoose')

const nbookSchema=new mongoose.Schema({
    bookName : String,
    price : String, 
    year : {
            type :String,
            default :2021
           },
    tags : {type :String, value : ['Indian', 'European']},
    authorName :String,
    totalPages : String,
    stockAvailable: {type : String, value: ['true', 'false']},


}, {timestamps: true} )

module.exports=mongoose.model('nBook',nbookSchema)