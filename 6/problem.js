var fs = require('fs');
var lights = require("./lib/lights.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var lightGrid = new lights.Grid(1000,1000);
  var lightGrid2 = new lights.Grid2(1000,1000);
  dataArray = data.trim().split("\n");

  dataArray.map(function(str){
    lightGrid.parse(str);
    lightGrid2.parse(str);
  });
  
  console.log("The number of lights on is: "+lightGrid.count());
  console.log("The brightness of lights on is: "+lightGrid2.count());
});
