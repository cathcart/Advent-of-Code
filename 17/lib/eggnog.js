//nice but not needed for small problem sizes
var Lookup = function(){
  this.ref = [];
  this.values = [];

  this.equal = function(A,B){
    for(var i in A){
      if(A[i] !== B[i]){
        return false;
      }
    }
    return true;
  }
 
  this.getIdx = function(x){
    var V = x[0];
    var arr = x[1];

    for(var i in this.ref){
      var refV = this.ref[i][0]
      var refArr = this.ref[i][1]
      if(refV === V){
        if(refArr.length === arr.length){
          if (this.equal(refArr, arr)){
            return i;
          }
        }
      }
    }
    return -1;
  }

  this.get = function(x){
    var idx = this.getIdx(x);
    if(idx === -1){
      return 0;
    }
    return this.values[idx];
  }

  this.put = function(x, value){
    this.ref.push(x);
    this.values.push(value);
  }
}

var Fridge = function(){

  this.get = function(V,arr){
    var ways = this.howMany(V,arr);
    arr = arr.filter(function(x){return x < V});
    for(var i=0;i<arr.length;i++){
      //ways += this.howMany(arr[i], arr.slice(i)) * this.get2(V-arr[i],arr.slice(i+1));
      ways += this.get(V-arr[i],arr.slice(i+1));
    }
    return ways;
  }

  this.getMin = function(V,arr){
    if(arr.length == 0){
      return null;
    }
    var ways = this.howMany(V,arr);
    if(ways>0){ 
      return [1,ways];
    }
    arr = arr.filter(function(x){return x < V});
    var ans = [];
    for(var i=0;i<arr.length;i++){
      var results = this.getMin(V-arr[i],arr.slice(i+1));
      if(results !== null){
        ans.push([results[0]+1,results[1]]);
      }
    }
    var minJugs = Number.POSITIVE_INFINITY;
    var ways = 0;
    for(var i=0;i<ans.length;i++){
      if(ans[i][0] <= minJugs){
        minJugs = ans[i][0];
        ways+= ans[i][1];
      }
    }
    return [minJugs,ways];
  
  }

  this.howMany = function(V, arr){
    var idx = -1;
    var c = 0;
    while((idx = arr.indexOf(V,idx+1)) !== -1){
      c++;
    }
    return c;
  }
}

module.exports.Fridge = Fridge;
