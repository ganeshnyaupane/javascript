console.log("Ganesh Nyaupane");
var readLineSync = require('readline-sync');
var username=readLineSync.question('May I have your name: ');
console.log("Welcome "+username);

var readLineSync = require('readline-sync');
var number=readLineSync.question('Enter the number');
if(number>25)
console.log("Right");
else
console.log("Wrong");