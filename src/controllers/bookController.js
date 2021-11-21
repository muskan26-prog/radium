const bookModel = require("../models/bookModel.js");
let authorModel = require('../models/authorModel')
let publisherModel = require('../models/publisherModel')
const mongoose = require("mongoose");

const createBook = async function (req, res) {
  
  const data = req.body;
  let authorId = req.body.author
  let publisherID = req.body.publisher

  let authorRequst = await authorModel.findById(authorId)
  let publisherReq = await publisherModel.findById(publisherID)

  if (authorRequst && publisherReq) {
    let createBook = await bookModel.create(data)
    res.send({data: createBook});
  }else if (authorRequst && !publisherReq){
    res.send("please enter valid publisher Id ");
  }else if (publisherReq && !authorRequst) {
    res.send("please enter valid Author ID")
  }else {
    res.send("please! enter valid info")
  }
  
};

const getBooks = async function (req, res) {
  let allBooks = await bookModel.find().populate({path: "author", select: { "authorName": 1, "age": 1}})
  res.send({ msg: allBooks });
};



module.exports.createBook = createBook;
module.exports.getBooks = getBooks;