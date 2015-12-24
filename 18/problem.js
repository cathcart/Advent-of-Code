var fs = require('fs');
var lights = require("./lib/lights2.js");

var file = './data.txt';
var input = fs.readFileSync(file, 'ascii').trim();

var test = new lights.GameOfLife(input);

for(var i=0;i<100;i++){
  test.iterate();
}

console.log("After 100 steps the number of lights which are still on is: "+test.count());

var test = new lights.GameOfLife(input);

for(var i=0;i<100;i++){
  test.edgesOn();
  test.iterate();
  test.edgesOn();
}

console.log("After 100 steps, with the corner lights stuck on, the number of lights which are still on is: "+test.count());
