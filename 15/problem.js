var fs = require('fs');
var cookies = require("./lib/cookies.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var str = data.trim();
  var test = new cookies.Recipe().parse(str);
  console.log("The score of the highest-scoring cookie is: "+test.opt2());
  console.log("The score of the highest-scoring, 500 calorie, cookie is: "+test.calorieOpt());
});
