var fs = require('fs');
var sson = require("./lib/json.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 

  var some = new sson.SSON(data.trim());
  console.log("The sum of all the numbers found is: "+some.recursiveSum(some.want));

  var some2 = new sson.SSON(data.trim());
  console.log("The sum of all the numbers, excluding those with red in the properties is: ",(some2.sumRed(some2.want)));
});
