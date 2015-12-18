var fs = require('fs');
var aunts = require("./lib/aunts.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var str = data.trim();

  var test = new aunts.Sue()
  test.two = false;
  console.log("The number of the aunt we're looking for is: "+test.parse(str));

  var test2 = new aunts.Sue()
  test2.two = true;
  console.log("The number of the aunt we're looking for is: "+test2.parse(str));
});
