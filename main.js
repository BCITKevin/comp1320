//var getDayOfTheWeek = require("./labTwo").getDayOfTheWeek;
//var makeCalendar = require("./labTwo").makeCalendar;
const labTwo = require("./labTwo");
const readline = require("readline-sync")
// This file must be really simple!
//var readline = require("readline-sync");
var year = readline.question("Enter a Year: ")
var month = readline.question("Enter a Month: ")
var date = readline.question("Enter a day: ")
//var answer = readline.question("Enter a Year, Month, and date");
console.log (getDayOfTheWeek(year, month, date));

function getDayOfTheWeek(year, month, date) {
    console.log("you typed: ");
    console.log(year, month, date)
}

//labTwo.getDayOfTheWeek(year, month, day);
labTwo.getDayOfTheWeek();
labTwo.makeCalendar();
