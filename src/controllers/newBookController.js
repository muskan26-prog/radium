const newBookModel= require("../models/newBookModel.js")

const createNewBook= async function (req, res) {
    var data= req.body
    let savedData= await newBookModel.create(data)
    res.send({msg: savedData})    
}


const getNewBooksData= async function (req, res) {
    let allBooks= await newBookModel.find()
    res.send({msg: allBooks})
}

module.exports.createNewBook= createNewBook
module.exports.getNewBooksData= getNewBooksData