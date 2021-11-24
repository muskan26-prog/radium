const OrderModel = require("../models/orderModel.js")
const UserModel = require("../models/userModel.js")
const ProductModel = require("../models/productModel.js")
//const ObjectId = mongoose.Schema.Types.ObjectId

const createOrder = async function (req, res) {
    // let getFreeAppUser = req.headers['isfreeapp']
       let isFreeAppUser = req.isFreeAppUser                         // This attribute(req.isFreeAppUser) was set in the opuMiddleware
    // if (getFreeAppUser === 'false') {
    //     isFreeAppUser = false
    // }
    // else {
    //     isFreeAppUser = true
    // }


    let userId = req.body.userId
    let productId = req.body.productId
    let orderAmount
    let OrderDate = Date()

    // User Validation

    let user = await UserModel.findById({_id:userId})
    if (!user) {
        return res.send({ msg: "User doesn't exist with this ID. Please provide valid userId!!" })
    }

    // Product Validation

    let product = await ProductModel.findById({_id:productId})
    if (!product) {
        return res.send({ msg: "Product doesn't exist with this ID. Please provide valid productId!!" })
    }

    //User Balance Validation

    if(!isFreeAppUser && user.balance < product.price){
         return res.send({msg: "User doesn't have enough balance the product!!"})
    }    

    if (isFreeAppUser) {
        orderAmount = 0

    } else {
        //Paid App
        orderAmount = product.price
    }

    let orderObj = {
        userId : userId ,
        productId: productId,
        amount: orderAmount,
        isFreeAppUser: isFreeAppUser ,
        date: OrderDate
    }

    let orderDetails = await OrderModel.create(orderObj)

    if(!isFreeAppUser){
        await UserModel.findOneAndUpdate({_id : userId},{balance : user.balance - product.price})
    }

    res.send({ msg: orderDetails })
}

module.exports.createOrder = createOrder
