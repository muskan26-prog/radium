const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const BookController= require("../controllers/bookController")
const publisherControl = require('../controllers/publisherController');


router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/authors',  authorController.createAuthor  );
router.get('/authors',  authorController.getAuthors  );


router.post('/books',  BookController.createBook  );
router.get('/books',  BookController.getBooks  );

router.post('/publisher', publisherControl.createPublisher);

module.exports = router;