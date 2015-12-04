var Santa = require("./houses.js").Santa;
var elfController = require("./houses.js").elfController;
var fs = require('fs');

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var santa = new Santa();
  santa.tell(data.trim());
  console.log("Number of houses visited by santa: "+santa.list().length); 
  console.log("Number of houses visited: by santa and robo santa: "+elfController(data.trim())); 
});
