var fs = require('fs');
var circuits = require("./lib/circuits.js");

var file = './data.txt';
fs.readFile(file, 'ascii', function (err, data) {
  if (err){ throw err;} 
  var bobbysCircuit = new circuits.Circuit();
  dataArray = data.trim().split("\n");

  dataArray.map(function(str){
    bobbysCircuit.parse(str);
  });
 
  var a = bobbysCircuit.calculate('a');
  console.log("The value of wire a is: "+a);

  var bobbysCircuit = new circuits.Circuit();

  dataArray.map(function(str){
    bobbysCircuit.parse(str);
  });
  bobbysCircuit.parse(a+' -> b');
  console.log("The value of wire a is: "+bobbysCircuit.calculate('a'));
});
