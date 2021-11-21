const NBookModel= require("../models/nBookModel.js")

//Problem 1: Create new book
const createBook= async function (req, res) {
    var data= req.body
    let savedData= await NBookModel.create(data)
    res.send({msg: savedData})    
}

//Problem 2: To get List of all Books- their bookName & authorName only
const getBooksList= async function (req, res) {
    let allBooks= await NBookModel.find().select({bookName:1, authorName:1})
    res.send({msg: allBooks})
}

/*Problem 3: getParticularBooks:- (this is a good one, make sincere effort to solve this) take any input and use it as a condition to fetch books that satisfy that condition
			
    e.g if body had { name: “hi”} then you would fetch the books with this name
    if body had { year: 2020} then you would fetch the books with this name
    hence the condition will differ based on what you input in the request body */

const getParticularBook= async function(req, res) {
    var data= req.body
    let getData= await NBookModel.find(data)
    res.send({msg: getData})
}

//Problem 4: request to return all books who have an Indian price tag of “100INR” or “200INR” or “500INR” 
const getXINRBooks= async function(req,res){
        let getBooks= await NBookModel.find({ price : {$in: ["100INR", "200INR", "500INR"] } } )
        res.send({msg: getBooks})
}

//Problem 5: getRandomBooks - returns books that are available in stock or have more than 500 pages 
const getRandomBooks = async function(req,res){
        let getBooks= await NBookModel.find({ $or: [ {stockAvailable: true} , { totalPages: {$gt: 500} }   ] } )
        res.send({msg: getBooks})
}

module.exports.createBook= createBook
module.exports.getBooksList= getBooksList
module.exports.getParticularBook= getParticularBook
module.exports.getXINRBooks= getXINRBooks
module.exports.getRandomBooks= getRandomBooks