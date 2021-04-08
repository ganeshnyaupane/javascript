var readLineSync = require('readline-sync');
var number=readLineSync.question('Enter the number: ');
if(number>25)
console.log("Right");
else
console.log("Wrong");