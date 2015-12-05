var fs = require('fs');
var nice = require("./lib/nice.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var test = new nice.Test();
  dataArray = data.trim().split("\n");
  
  console.log("The number of strings in the list is: "+dataArray.length);
  //console.log("The number of nice strings in the list is: "+dataArray.filter(test.isNice).length);
  console.log("The number of nice strings in the list is: "+test.filterCount(dataArray));
  console.log("Part 2: The number of nice strings in the list is: "+test.newFilterCount(dataArray));
});
