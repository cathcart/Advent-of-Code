function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}

var Recipe = function(){

  this.ingredients = [];

  this.parse = function(str){
    var lines = str.split("\n");
    for( var i in lines){
      var items = lines[i].split(" ");
      var entry = [ items[2], items[4], items[6], items[8], items[10]].map(function(x){return x.replace(",","");})
      this.ingredients.push(entry.map(function(x){return parseInt(x,10);}));
    }
    return this;
  }

  this.cost = function(x){
    var attributes = [0,0,0,0];
 
    for(var j in attributes){
      for(var i in x){
        attributes[j] += x[i]*this.ingredients[i][j];
      }
    }

    var results = attributes.map(function(x){if(x<0){return 0;}else{return x;}});
    return results.reduce(function(c,p){return c*p;},1);
  }

  this.opt = function(){
    best = [0,0];
    bestCost = 0;

    for(var x=0;x<=100;x++){
      for(var y=0;y<=100;y++){
        if(x+y == 100){
          var c = this.cost([x,y]);
          if(c > bestCost){
            bestCost = c;
            best = [x,y];
          }
        }
      }
    }
    console.log(best);
    return bestCost;
  }

  this.opt2 = function(){
    this.best = [0,0];
    this.bestCost = 0;

    var x = this.ingredients.map(function(){return 0;});
    while(x[0]<100){
      x[x.length-1]++;
      for(var i=x.length-1;i>0;i--){
        if(x[i]>100){
          x[i] = 0;
          x[i-1]++;
        }
      }

        if(x.reduce(function(c,p){return c+p},0) == 100){
          var c = this.cost(x);
          if(c > this.bestCost){
            this.bestCost = c;
            this.best = x;
            //console.log(best,c);
          }
        }
    }
    //console.log("here ",this.best, this.bestCost);
    //console.log(this.cost([100,0]))
    return this.bestCost;
  }

  this.calories = function(x){
    var c = 0;
 
    for(var i in x){
      c += x[i]*this.ingredients[i][4];
    }

    return c;

  }

  this.calorieOpt = function(){
    this.best = [0,0];
    this.bestCost = 0;

    var x = this.ingredients.map(function(){return 0;});
    while(x[0]<100){
      x[x.length-1]++;
      for(var i=x.length-1;i>0;i--){
        if(x[i]>100){
          x[i] = 0;
          x[i-1]++;
        }
      }

        if(x.reduce(function(c,p){return c+p},0) == 100 && this.calories(x)==500){
          var c = this.cost(x);
          if(c > this.bestCost){
            this.bestCost = c;
            this.best = x;
            //console.log(best,c);
          }
        }
    }
    //console.log("here ",this.best, this.bestCost);
    //console.log(this.cost([100,0]))
    return this.bestCost;
  }

}

module.exports.Recipe = Recipe;
