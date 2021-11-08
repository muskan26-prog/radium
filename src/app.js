/*Question :
Folder/ src/ app.js
Module1 : src/logger.js

log (name) -> print name
welcome() -> Welcome to my application. I am this , i am functionup.
url (variable) -> print the url in app.js

2.Module 2 : src/util/helper.js

printDate() : prints the current date
printMonth() : prints the current month
getBatchInfo() : print batch name, week#, Day#, the topic being taught today
3.

Module 3: Folder/validator/formatter.js

trim() : calls the trim function on a string [Call trim on your string]
changetoLowerCase() : changes the case of the string to lower. [Call toLowerCase() on your string]
changeToUpperCase() : changes the case of the string to upper case [Call toUpperCase() on your string]



All the functions should called from app.jAll the variables/constants should be printed on console in app.js

4. Using the package ‘lodash’ solve below probolems

    1:Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function
    2:Using the tail function, return the last n-1 elements of an array containing the first 10 odd numbers
    3:Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values
    4:Use the function fromPairs to create a object contating key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
*/

const loggerObj = require('./logger')
const helperObj = require('./util/helper')
const formatterObj = require('../validator/formatter')
const lodashObj = require('lodash')

loggerObj.getName('Muskan')
loggerObj.getWelcome()
console.log('Lets visit to Youtube website: '+ loggerObj.getURL)

console.log('......................................................................................................')

helperObj.getDate()
helperObj.getMonth()
helperObj.getBatchInfo()

console.log('......................................................................................................')

formatterObj.getTrim()
formatterObj.getChangeToLowerCase()
formatterObj.getChangeToUpperCase()

console.log('......................................................................................................')

console.log(lodashObj.chunk(['January','February','March','April','May','June','July','August','September','October','November','December'],4))

const array = [1,3,5,7,9,11,13,15,17,19] 
console.log(lodashObj.tail(array))

console.log(lodashObj.union([1,2,3,3],[2,4,5,6],[8,4,2,1,60,45],[1,67,43,23,2],[4,2,4,5]))

console.log(lodashObj.fromPairs([["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]))