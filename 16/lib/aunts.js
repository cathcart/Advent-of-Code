
var Sue = function(){
  this.catagories = ["children", "cats", "samoyeds", "pomeranians", "akitas", "vizslas", "goldfish", "trees", "cars", "perfumes"];
  this.values = [3,7,2,3,0,0,5,3,2,1];
  this.two = false;

  this.get = function(name){
    var idx = this.catagories.indexOf(name);
    return this.values[idx];
  }

  this.itemOk = function(item){
    var name = item[0];
    var value = item[1];

    if(this.two){
      if(name == "cats" || name == "trees"){
        return this.get(name) < value
      }
      if(name == "pomeranians" || name == "goldfish"){
        return this.get(name) > value
      }
    }
    return this.get(name) == value;
  }

  this.parseLine = function(line){
    var items = [];
    var splitString = line.split(" ");
    for(var i=2;i<splitString.length-1;i+=2){
      var name = splitString[i].replace(":","");
      var value = parseInt(splitString[i+1],10);
      items.push([name, value]);
    }
    return items.every(this.itemOk,this);
  }
 
  this.parse = function(str){
    var lines = str.split("\n");
    return lines.filter(this.parseLine,this);
  }
}

module.exports.Sue = Sue;
