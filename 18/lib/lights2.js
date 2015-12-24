var Matrix = require('dstructs-matrix');

var GameOfLife = function(str){

  this.parse = function(str){
    var lines = str.split("\n");
    this.l = lines.length;
    var lights = Matrix([this.l,this.l]); 
    //this.count = 0;

    for(var j=0;j<lines.length;j++){
      var items = lines[j];
      for(var i=0;i<items.length;i++){
        var x = 0;
        if(items[i] === "#"){
          x=1;
          //this.count++;
        }
        lights.set(j,i,x);
      }
    }
    return lights;
  }

  this.valid = function(x){
    if(x < this.l && x >= 0){
      return true; 
    }
    return false; 
  }

  this.newValue = function(x, num){
    if(x){
      if(num == 2){return 1;}else if(num == 3){return 1;}else{return 0;}
    }else{
      if(num == 3){return 1;}else{return 0;}
    }
  }

  this.iterate = function(){
    newLights = Matrix([this.l,this.l]); 
    //this.count = 0;

    for(var j=0;j<this.l;j++){
      for(var i=0;i<this.l;i++){

      //number of neighbours which are on
      var num = 0;
      for (var di = -1; di <= 1; di++){
        for (var dj = -1; dj <= 1; dj++) {
          if ( di == 0 && dj == 0){}
          else if(!this.valid(i+di)){}
          else if(!this.valid(j+dj)){}
          else if (typeof this.lights.get(j+dj,i+di) !== 'undefined' && this.lights.get(j+dj, i+di)){
            num++;
          }
        }
      }
      //fill in new value for ij here
      var value = this.lights.get(j,i);
      var x = this.newValue(value, num);
      //console.log("ij value num x ",i,j,value,num,x)
      //if(x) this.count++;
      newLights.set(j,i,x);
      }
    }
    this.lights = newLights;
    return this;
  }
  
  this.edgesOn = function(){
    this.lights.set(0,0,1);
    this.lights.set(this.l-1,0,1);
    this.lights.set(0,this.l-1,1);
    this.lights.set(this.l-1,this.l-1,1);
  }

  this.count = function(){
    var c = 0;
    for(var j=0;j<this.l;j++){
      for(var i=0;i<this.l;i++){
      var value = this.lights.get(j,i);
      if(value){c++;}
      }
    }
    return c;
  }

  this.lights = this.parse(str);
}

module.exports.GameOfLife = GameOfLife;
