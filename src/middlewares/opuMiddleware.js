let mid1 = function (req, res, next) {
    let headerValue = req.headers['isfreeapp']
    let isFreeApp
    if (!headerValue) {
        return res.send("Missing a mandatory header!!!!!!")
    }

    if (headerValue === 'false') {
        isFreeAppUser = false
    } else {
        isFreeAppUser = true
    }

    req.isFreeAppUser = isFreeApp
    next()
}

module.exports.mid1 = mid1