var fs = require('fs');

file = './data.txt';
fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;

  var a = data.split('\n');
  a.pop()

  var readyData = a.map(function(boxString) {
    var b = boxString.split('x').map(function(numString) {
      return parseInt(numString, 10);
    });
    return b
  });

  var totalAreas = readyData.map(function (inArray) {
    //var [l,h,w] = [inArray[0], inArray[1], inArray[2]]; 
    var l = inArray[0];
    var w = inArray[1];
    var h = inArray[2];
    var areas = [2*l*w, 2*l*h, 2*w*h];
    var total_areas = areas.reduce(function(previousValue, currentValue, currentIndex, array) {
      return previousValue + currentValue;
    });
    console.log(areas);
    console.log(total_areas);
    var minArea = Math.min.apply(Math, areas)/2;
    //areas.indexOf(2*minArea);

    return total_areas + minArea
  });
  var totalAreaNeeded = totalAreas.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
  });
  console.log("Elves need: "+totalAreaNeeded);
});
