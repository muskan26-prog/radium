function printDate(){
    console.log('Today is 8th November 2021')
}

function printMonth(){
    console.log('Current month is November')
}

function printBatchInfo(){
    console.log('I am in radium A+ batch. I have started with Week3 Day 1 and the topic for the day is Module System in nodejs')
}

module.exports.getDate = printDate
module.exports.getMonth = printMonth
module.exports.getBatchInfo = printBatchInfo