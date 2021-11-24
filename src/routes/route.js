const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const ProductController= require("../controllers/productController")
const OrderController= require("../controllers/orderController")
const OPUMiddleware= require("../middlewares/opuMiddleware")

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.post('/createUser', OPUMiddleware.mid1, UserController.createNUser);
router.post('/createProduct', ProductController.createProduct);
router.post('/createOrder', OPUMiddleware.mid1, OrderController.createOrder);

module.exports = router;
