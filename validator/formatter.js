function printTrim(){
    console.log('    Muskan Sayyad   '.trim())
}

function printChangeToLowerCase(){
    console.log('MusKAn'.toLowerCase())
}

function printChangeToUpperCase(){
    console.log('MusKAn'.toUpperCase())
}

module.exports.getTrim = printTrim
module.exports.getChangeToLowerCase = printChangeToLowerCase
module.exports.getChangeToUpperCase = printChangeToUpperCase