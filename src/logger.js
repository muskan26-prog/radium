function printName(getname){
    console.log('Hiee everyone I am '+ getname)
}

function printWelcome(){
    console.log('Welcome to my application. I am Muskan Sayyad, I joined bootcamp at functionUp on 18th October')
}

const url = 'https://www.youtube.com'

module.exports.getName = printName 
module.exports.getWelcome = printWelcome
module.exports.getURL = url