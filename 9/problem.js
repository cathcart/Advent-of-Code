var fs = require('fs');
var distance = require("./lib/distance.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var travel = new distance.Distance();
  travel.parse(data.trim());

  var optRoute = travel.simulatedAnnealing(travel.cities);
  var shortDistance = travel.totalDistance(optRoute);
  console.log("The shortest distance is: "+shortDistance);
  var maxRoute = travel.simulatedAnnealingMax(travel.cities);
  var maxDistance = travel.totalDistance(maxRoute);
  console.log("The longest distance is: "+maxDistance);
});
