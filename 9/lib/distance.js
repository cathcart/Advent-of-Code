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
 
var Distance = function(){
 
  this.cities = [];

  this.getCities = function(inputArray){
    var that = this;
    inputArray.map(function(elm){
      cities = elm.split(" ");
      [cities[0], cities[2]].map(function(c) {
        if(that.cities.indexOf(c) === -1){
          that.cities.push(c);
        }
      });
    });
  }

  this.getDistances = function(inputArray){
    var l = this.cities.length;
    this.distances = Matrix( [l,l] );
    var that = this;
    inputArray.map(function(elm){
      items = elm.split(" ");
      var one = that.cities.indexOf(items[0]);
      var two = that.cities.indexOf(items[2]);
 
      that.distances.set(one, two, parseInt(items[4],10));
      that.distances.set(two, one, parseInt(items[4],10));
    });
  }

  this.totalDistance = function(citiesArray){
    var distance = 0;
    for(var i = 1;i<=citiesArray.length-1;i++){

      var aIdx = this.cities.indexOf(citiesArray[i-1]);
      var bIdx = this.cities.indexOf(citiesArray[i]);

      var d = this.distances.get(aIdx, bIdx);
      distance += d;
    }
    return distance;
  }

  this.acceptance = function(e1,e,T){
    if(e1<e){
      return 1;
    }else{
      //return Math.exp(-(e1-e)/T);
      return Math.exp((e-e1)/T);
    }
  }

  this.simulatedAnnealing = function(cities){
    var temp = 100000;
    var coolingRate = 0.001;
  
    var currentDistance =  this.totalDistance(cities);
    var bestDistance = currentDistance;
    var bestCities = cities.slice();
    while(temp>1){
      var newCities = cities.slice();
      //get two random ints in range of 0,cities.length
      var a = getRandomInt(0, cities.length);
      var b;
      while((b = getRandomInt(0, cities.length)) === a){};
      //swap these elements
      newCities.swap(a,b);
      //get new distance
      var newDistance =  this.totalDistance(newCities);
      //accept if lower than current
      if(this.acceptance(newDistance, currentDistance, temp) >= Math.random()){
        cities = newCities.slice();
        currentDistance = newDistance;
        if(currentDistance<bestDistance){
          bestDistance = currentDistance;
          bestCities = cities.slice();
        }
      }
      temp *= 1-coolingRate;
    }
    return bestCities;
  }

  this.simulatedAnnealingMax = function(cities){
    var temp = 100000;
    var coolingRate = 0.001;
  
    var currentDistance =  this.totalDistance(cities);
    var bestDistance = currentDistance;
    var bestCities = cities.slice();
    while(temp>1){
      var newCities = cities.slice();
      //get two random ints in range of 0,cities.length
      var a = getRandomInt(0, cities.length);
      var b;
      while((b = getRandomInt(0, cities.length)) === a){};
      //swap these elements
      newCities.swap(a,b);
      //get new distance
      var newDistance =  this.totalDistance(newCities);
      //accept if lower than current
      if(this.acceptance(currentDistance, newDistance, temp) >= Math.random()){
        cities = newCities.slice();
        currentDistance = newDistance;
        if(currentDistance>bestDistance){
          bestDistance = currentDistance;
          bestCities = cities.slice();
        }
      }
      temp *= 1-coolingRate;
    }
    return bestCities;
  }

  this.parse = function(str){
 
    inputArray = str.trim().split("\n");
    this.getCities(inputArray);   
    this.getDistances(inputArray);

    return this;
  }
}

module.exports.Distance = Distance;
