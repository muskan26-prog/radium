const express = require('express');
const router = express.Router();
const UserModel= require("../models/userModel")
const BookModel= require("../models/bookModel")

const UserController= require("../controllers/userController")
const BookController = require("../controllers/bookController")
const NewBookController = require("../controllers/newBookController")
const AuthorController = require("../controllers/authorController")
const NBookController = require("../controllers/nBookController");
const nBookModel = require('../models/nBookModel');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser',  UserController.createUser  );
router.get('/getAllUsers',  UserController.getUsersData  );

router.post('/createBook', BookController.createBook );
router.get('/getAllBooks', BookController.getBooksData);

router.post('/createNewBook', NewBookController.createNewBook );
router.get('/getAllNewBooks', NewBookController.getNewBooksData);

router.post('/createAuthor', AuthorController.createAuthor );
router.get('/getBooks', AuthorController.getBooks);
router.get('/getTwoState', AuthorController.twoState);
router.get('/getPriceBook',AuthorController.priceBook);

router.post('/createnBook', NBookController.createBook);
router.get('/bookList', NBookController.getBooksList);
router.post('/getParticularBook', NBookController.getParticularBook);
router.get('/getXINRBooks', NBookController.getXINRBooks);
router.get('/getRandomBooks', NBookController.getRandomBooks);

module.exports = router;