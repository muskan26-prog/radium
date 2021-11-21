const authorModel= require("../models/authorModel.js")
const NewBookController= require("../controllers/newBookController.js")
const NewBookModel = require("../models/newBookModel.js")

//Problem 1: Write create APIs for both books and authors ---> If author_id is not available then do not accept the entry(in neither the aurthor collection onr the books collection)
const createAuthor= async function (req, res) {
    var data= req.body
    let savedData= await authorModel.create(data)
    res.send({msg: savedData}) 
}

//Problem 2: List out the books written by Chetan Bhagat
const getBooks= async function (req, res) {
    let authorid = await authorModel.findOne({author_Name: "Chetan Bhagat"}).select({author_id:1, _id:0})
    let bookName = await NewBookModel.find(authorid)
    res.send( {msg: bookName})
}

//Problem 3: find the author of “Two states” and update the book price to 100;  Send back the author_name and updated price in response
const twoState=async function(req,res) {
        let savedData= await NewBookModel.findOne({name: "Two states"}).select({author_id:1, _id:0})
        let author = await authorModel.findOne(savedData).select({author_Name:1, _id:0})
        let uPrice = await NewBookModel.findOneAndUpdate({name: "Two states"},{price: 100}, {new:true}).select({price:1,_id:0})
        res.send({msg: author,uPrice})
}

//Problem 4 : Find the books which costs between 50-100(50,100 inclusive) and respond back with the author names of respective books
const priceBook= async function(req,res) {
        const book = await NewBookModel.find({price: {$gt: 49, $lt:101}}).select({author_id:1, _id:0})
        const author1= await authorModel.find({$or:book}).select({author_Name:1, _id:0})
        res.send(author1)
}

module.exports.createAuthor= createAuthor
module.exports.getBooks= getBooks
module.exports.twoState= twoState
module.exports.priceBook= priceBook