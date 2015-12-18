var fs = require('fs');
var race = require("./lib/race.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 

  var test = new race.Race().parse(data.trim());
  console.log("The distance the winning reindeer has travelled after 2503 seconds is: "+test.winningDistance(2503));
  console.log("The total points the winning reindeer has after 2503 seconds is: "+test.winningPoints(2503));
});
