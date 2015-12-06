var Light = function(){

  this.on = false;
  this.isOn = function() {
    return this.on;
  }
  this.turnOn = function() {
    this.on = true;
    return this;
  }
  this.turnOff = function() {
    this.on = false;
    return this;
  }

  this.toggle = function() {
    if(this.on) {
      this.on = false;
    }else {
      this.on = true;
    }
    return this;
  }

}


var Grid = function(X,Y){
  this.X = X;
  this.Y = Y;

  //create grid
  this.grid = [];
  for(var x=0;x<this.X;x++){
    line = [];
    for(var y=0;y<this.Y;y++){
      //line.push(new Light());
      line.push(0);
    }
    this.grid.push(line);
  }
  //function to parse commands
  this.parse = function(str) {
    this.command = str.split(" ");

    //determine what command we need
    if(this.command[0] == "toggle"){
      //toggle command
      startIdx = 1;
      endIdx = 3;
      this.requiredCmd = function(value) {
        return value = (value + 1)%2;
      }
    }
    if(this.command[0] == "turn"){
      startIdx = 2;
      endIdx = 4;
      if(this.command[1] == "on"){
      //turn on command
        this.requiredCmd = function(value) {
          return 1;
        }
      }
      if(this.command[1] == "off"){
      //turn off command
        this.requiredCmd = function(value) {
          return 0;
        }
      }
    }
    //get the positions of the start and end points
    this.start = this.command[startIdx].split(",").map(function(elm){
      return parseInt(elm,10);
    });
    this.end = this.command[endIdx].split(",").map(function(elm){
      return parseInt(elm,10);
    });
    //run cmd on grid
    this.run();
    return this;
  }
  
  this.run = function() {
    var x1 = this.start[0];
    var y1 = this.start[1];
    var x2 = this.end[0];
    var y2 = this.end[1];
    selection = []
    for(var x=x1;x<=x2;x++){
      for(var y=y1;y<=y2;y++){
        //selection.push(this.grid[x][y]);
        this.grid[x][y] = this.requiredCmd(this.grid[x][y]);
      }
    }
    return selection;
  }

 this.count = function(){
   var total = 0;
    for(var x=0;x<this.X;x++){
      for(var y=0;y<this.Y;y++){
        total += this.grid[x][y];
      }
    }
   return total;
 }
}

var Grid2 = function(X,Y){
  this.X = X;
  this.Y = Y;

  //create grid
  this.grid = [];
  for(var x=0;x<this.X;x++){
    line = [];
    for(var y=0;y<this.Y;y++){
      //line.push(new Light());
      line.push(0);
    }
    this.grid.push(line);
  }
  //function to parse commands
  this.parse = function(str) {
    this.command = str.split(" ");

    //determine what command we need
    if(this.command[0] == "toggle"){
      //toggle command
      startIdx = 1;
      endIdx = 3;
      this.requiredCmd = function(value) {
        return value + 2;
      }
    }
    if(this.command[0] == "turn"){
      startIdx = 2;
      endIdx = 4;
      if(this.command[1] == "on"){
      //turn on command
        this.requiredCmd = function(value) {
          return value + 1;
        }
      }
      if(this.command[1] == "off"){
      //turn off command
        this.requiredCmd = function(value) {
          return Math.max(0, value - 1);
        }
      }
    }
    //get the positions of the start and end points
    this.start = this.command[startIdx].split(",").map(function(elm){
      return parseInt(elm,10);
    });
    this.end = this.command[endIdx].split(",").map(function(elm){
      return parseInt(elm,10);
    });
    //run cmd on grid
    this.run();
    return this;
  }
  
  this.run = function() {
    var x1 = this.start[0];
    var y1 = this.start[1];
    var x2 = this.end[0];
    var y2 = this.end[1];
    selection = []
    for(var x=x1;x<=x2;x++){
      for(var y=y1;y<=y2;y++){
        //selection.push(this.grid[x][y]);
        this.grid[x][y] = this.requiredCmd(this.grid[x][y]);
      }
    }
    return selection;
  }

 this.count = function(){
   var total = 0;
    for(var x=0;x<this.X;x++){
      for(var y=0;y<this.Y;y++){
        total += this.grid[x][y];
      }
    }
   return total;
 }
}


module.exports.Light = Light;
module.exports.Grid = Grid;
module.exports.Grid2 = Grid2;
