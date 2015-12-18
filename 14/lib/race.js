function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var Race = function(){

  this.entries = [];

  this.parse = function(str){
    var lines = str.split("\n");
    for( var i in lines){
      var items = lines[i].split(" ");
      var entry = [items[0], parseInt(items[3],10), parseInt(items[6],10), parseInt(items[13],10)];
      this.entries.push(entry);
    }
    return this;
  }

  this.distanceCovered = function(entry, time){
    //number of run rest cycles completed
    var numCycles = Math.floor(time/(entry[2]+entry[3]));
    //remainder after complete cycle
    var cycleRem = time%(entry[2]+entry[3]);
    return entry[1]*(numCycles*entry[2] + Math.min(cycleRem,entry[2]));
  }

  this.winningDistance = function(time){
    var distances = [];
    for( var i in this.entries){
      var entry = this.entries[i];
      var d = this.distanceCovered(entry, time);
      distances.push(d);
    }
    this.allDistances = distances.slice();
    return Math.max.apply(null,distances);
  }

  this.winningPoints = function(time){
    var totalPoints = []
    for(var i in this.entries){
      totalPoints.push(0);
    }

    for(var t=1;t<=time;t++){
      var max = this.winningDistance(t);
      var idx = -1;
      while((idx = this.allDistances.indexOf(max,idx+1)) !== -1){
        totalPoints[idx]++;
      }
    }
    return Math.max.apply(null,totalPoints);
  }
}

var Reindeer = function(str){
  this.running = true;
  this.distance = 0;
  var items = str.split(" ");
  this.name = items[0];
  this.maxSpeed = parseInt(items[3],10);
  this.waiting = [parseInt(items[6],10), parseInt(items[13],10)];
  this.remaining = this.waiting[0];

  this.toggle = function(){
    if(this.running){
      this.running = false;
      this.remaining = this.waiting[1];
    }else{
      this.running = true;
      this.remaining = this.waiting[0];
    }
  
  }
 
  this.step = function(){
    if(this.remaining === 0){
      this.toggle();
    }
    if(this.running){
      this.distance += this.maxSpeed;
    }
    this.remaining--;
  }


}

module.exports.Reindeer = Reindeer;
module.exports.Race = Race;
