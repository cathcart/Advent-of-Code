var fs = require('fs');
var space = require("./lib/space.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  dataArray = data.trim().split("\n");

  var counter = new space.SpaceCounter();
  dataArray.map(function(d){counter.parse(d);});
  console.log("Total difference between the code and memory spaces is "+counter.diff());
  console.log("Total difference between the encoded strings and non encoded ones is "+counter.ediff());

});
