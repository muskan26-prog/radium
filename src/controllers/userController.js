const UserModel = require("../models/userModel.js")

const createNUser = async function (req, res) {
    var UserDetails = req.body
    // let getFreeAppUser = req.headers['isfreeapp']
    // let freeAppUser
    // if(getFreeAppUser === 'false')
    // {
    //     freeAppUser = false
    // }
    // else{
    //     freeAppUser = true
    // }
    
    UserDetails.freeAppUser=req.isFreeAppUser                        // This attribute(req.isFreeAppUser) was set in the opuMiddleware
    let savedData = await UserModel.create(UserDetails)
    res.send({ msg: savedData })
}

module.exports.createNUser = createNUser
