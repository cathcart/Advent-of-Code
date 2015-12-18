function isNumeric(n) {
  //return !isNaN(parseFloat(n)) && isFinite(n);
  return !isNaN(parseFloat(n)) && isFinite(n) && !(n instanceof Array);
}

var SSON = function(str){
//Santa JSON
  this.str = str;
  this.want = JSON.parse(this.str);

  this.values = function(obj){
    var values = [];
    for (var prop in obj){
      values.push(obj[prop]);
    }
    return values;
  }

  this.recursiveSum = function(obj){
    var c = 0;
    for (var prop in obj){
      var v = obj[prop];
      if(v instanceof Object|| v instanceof Array){
        c += this.recursiveSum(v);
      }
      else if (isNumeric(v)){
        c += v;
      }
    }
    return c
  }

  this.isAnObject = function(x){
    return (!(x instanceof Array) && (x instanceof Object))
  }
 
  this.sumRed = function(obj){
    var values = this.values(obj);
    var c = 0;
    if(obj instanceof Array){
      //console.log("Array ",obj);
      for(x in values){
        c += this.sumRed(values[x]);
      }
    }else if(obj instanceof Object){
      //console.log("Object ",obj);
      for(x in values){
        if (values.indexOf("red") < 0 ){
          c += this.sumRed(values[x]);
        }
      }
    }else if(typeof obj === "number"){
      //console.log("Number", obj);
      return obj;
    }else{
      //console.log("shouldn't be here", obj, typeof obj, obj instanceof Number);
    }
    return c;
  }
}

module.exports.SSON = SSON;
