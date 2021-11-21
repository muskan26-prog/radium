let publisherModel = require('../models/publisherModel');

const createPublisher = async function (req, res) {
    let pData = req.body
    let savePData = await publisherModel.create(pData);
    res.send({data: savePData});
};

module.exports.createPublisher = createPublisher;