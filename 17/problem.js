var fs = require('fs');
var eggnog = require("./lib/eggnog.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var str = data.trim();
  var arr = str.split("\n").map(function(x){return parseInt(x,10);});
  console.log(arr);
  var sortedArr = arr.sort(function(a,b){return b-a;});
  console.log(sortedArr);
  var V = 150;

  var test = new eggnog.Fridge();
  console.log("The number of ways 150 liters of eggnog can be stored in the containers is: "+test.get(V,arr));
  console.log("The number of ways 150 liters of eggnog can be stored in the containers is: "+test.get(V,sortedArr));
  console.log("The number of ways 150 liters of eggnog can be stored in, the minimum number of containers is: "+test.getMin(V,arr)[1]);
  console.log("The number of ways 150 liters of eggnog can be stored in the, the minimum number of containers is: "+test.getMin(V,sortedArr));
});
