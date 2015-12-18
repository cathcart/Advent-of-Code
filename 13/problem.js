var fs = require('fs');
var seating = require("./lib/seating.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var happy = new seating.Seating();
  happy.parse(data.trim());

  var optSeating = happy.simulatedAnnealingMax(happy.people)
  var totalHappiness = happy.totalHappiness(optSeating);
  console.log("The total happiness is: "+totalHappiness);
});

var file = './data2.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var happy = new seating.Seating();
  happy.parse(data.trim());

  var optSeating = happy.simulatedAnnealingMax(happy.people)
  var totalHappiness = happy.totalHappiness(optSeating);
  console.log("The total happiness, when I'm seated, is: "+totalHappiness);
});
