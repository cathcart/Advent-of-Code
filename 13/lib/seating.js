var Matrix = require('dstructs-matrix');

// Returns a random integer between min (included) and max (excluded)
// Using Math.round() will give you a non-uniform distribution!
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var swapArrayElements = function(arr, indexA, indexB) {
  var temp = arr[indexA];
  arr[indexA] = arr[indexB];
  arr[indexB] = temp;
};

Array.prototype.swap = function(indexA, indexB) {
   swapArrayElements(this, indexA, indexB);
};
 
var Seating = function(){
  this.people = [];

  this.getPeople = function(inputArray){
    var that = this;
    inputArray.map(function(elm){
      person = elm.split(" ")[0];
      if(that.people.indexOf(person) === -1){
        that.people.push(person);
      }
    });
  }

  this.getHappiness = function(inputArray){
    var l = this.people.length;
    this.happiness = Matrix( [l,l] );
    var that = this;
    inputArray.map(function(elm){
      items = elm.split(" ");
      var one = that.people.indexOf(items[0]);
      var two = that.people.indexOf(items[10].replace(".",""));
      var value = parseInt(items[3],10);

      if(items[2] === "lose"){
        var factor = -1;
      }else if(items[2] === "gain"){
        var factor = 1;
      }
 
      that.happiness.set(one, two, factor*value);
      //not symmetrical
      //that.happiness.set(two, one, factor*value);
    });
  }

  this.totalHappiness = function(peopleArray){
    var happy = 0;

    for(var i = 0;i<=peopleArray.length-1;i++){

      var aIdx = this.people.indexOf(peopleArray[i]);
      if(i==(peopleArray.length-1)){
        var bIdx = this.people.indexOf(peopleArray[0]);
      }else{
        var bIdx = this.people.indexOf(peopleArray[i+1]);
      }
      if(i==0){
        var cIdx = this.people.indexOf(peopleArray[peopleArray.length-1]);
      }else{
        var cIdx = this.people.indexOf(peopleArray[i-1]);
      }

      //forward
      var d = this.happiness.get(aIdx, bIdx);
      happy += d;
      //console.log(this.people[aIdx], this.people[bIdx],d);

      //back
      var d = this.happiness.get(aIdx, cIdx);
      happy += d;
      //console.log(this.people[aIdx], this.people[cIdx],d);
    }
    return happy;
  }

  this.acceptance = function(e1,e,T){
    if(e1<e){
      return 1;
    }else{
      //return Math.exp(-(e1-e)/T);
      return Math.exp((e-e1)/T);
    }
  }

  this.simulatedAnnealing = function(people){
    var temp = 100000;
    var coolingRate = 0.001;
  
    var currentHappiness =  this.totalHappiness(people);
    var bestHappiness = currentHappiness;
    var bestSeating = people.slice();
    while(temp>1){
      var newSeating = people.slice();
      //get two random ints in range of 0,cities.length
      var a = getRandomInt(0, people.length);
      var b;
      while((b = getRandomInt(0, people.length)) === a){};
      //swap these elements
      newSeating.swap(a,b);
      //get new distance
      var newHappiness =  this.totalHappiness(newSeating);
      //accept if lower than current
      if(this.acceptance(newHappiness, currentHappiness, temp) >= Math.random()){
        people = newSeating.slice();
        currentHappiness = newHappiness;
        if(currentHappiness<bestHappiness){
          bestHappiness = currentHappiness;
          bestSeating = people.slice();
        }
      }
      temp *= 1-coolingRate;
    }
    return bestSeating;
  }

  this.simulatedAnnealingMax = function(people){
    var temp = 100000;
    var coolingRate = 0.001;
  
    var currentHappiness =  this.totalHappiness(people);
    var bestHappiness = currentHappiness;
    var bestSeating = people.slice();
    while(temp>1){
      var newSeating = people.slice();
      //get two random ints in range of 0,people.length
      var a = getRandomInt(0, people.length);
      var b;
      while((b = getRandomInt(0, people.length)) === a){};
      //swap these elements
      newSeating.swap(a,b);
      //get new distance
      var newHappiness =  this.totalHappiness(newSeating);
      //accept if lower than current
      if(this.acceptance(currentHappiness, newHappiness, temp) >= Math.random()){
        people = newSeating.slice();
        currentHappiness = newHappiness;
        if(currentHappiness>bestHappiness){
          bestHappiness = currentHappiness;
          bestSeating = people.slice();
        }
      }
      temp *= 1-coolingRate;
    }
    return bestSeating;
  }

  this.parse = function(str){
 
    inputArray = str.trim().split("\n");
    this.getPeople(inputArray);   
    this.getHappiness(inputArray);

    return this;
  }
}

module.exports.Seating = Seating;
