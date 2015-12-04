var fs = require('fs');

file = './data.txt';
fs.readFile(file, 'utf8', function (err, data) {
  if (err) throw err;

  var ups = (data.match(/\(/g) || []).length; 
  var downs = (data.match(/\)/g) || []).length; 

  console.log("Santa is on level: "+(ups-downs));

//no  console.log(data.indexOf(")"));
  var santaPos = 0;
  for(var x=0;x<data.length;x++){
    if(data[x] == "("){
      santaPos += 1;
    }else if(data[x] == ")"){
      santaPos -= 1;
    }
    if(santaPos < 0){
      console.log("Santa has entered the basement at instruction no. "+(x+1));
      break;
    }
  }


});
