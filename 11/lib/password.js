var Password = function(str){
  this.str = str;
  this.min = "a".charCodeAt(0);
  this.max = "z".charCodeAt(0);

  this.numToArray = function(){
    var some = [];
    for(var i=0;i<this.str.length;i++){
      var n = this.str.charCodeAt(i);
      some.push(n);
    }
    return some;
  }

  this.arrayToStr = function(){
    var some = "";
    for(var i=0;i<this.str.length;i++){
      var c = String.fromCharCode(this.numArray[i]);
      some += c;
    }
    return some;
  }

  this.iterate = function(){
    //add one to last character
    this.numArray[this.numArray.length-1] += 1;
    //reverse iterate
    for(var i=this.numArray.length-1;i>=0;i--){
      if(this.numArray[i]>this.max){
        this.numArray[i] = this.min;
        if(i>0){
          this.numArray[i-1] += 1;
        }
      }
    }
  }

  this.letters = function(){
    //var bad = ["i","o","l"];
    var bad = [105,111,108];
    for(var i=0;i<bad.length;i++){
      if(this.numArray.indexOf(bad[i]) > -1) {
        return false;
      }
    }
    return true;
  }

  this.sequential = function(){
    var count = 0;
    for(var i=0;i<this.numArray.length-1;i++){
      if(this.numArray[i+1]-this.numArray[i] == 1) {
        count++;
        if(count >1) return true;
      }else{
        count = 0;
      }
    }
    if(count >1){
      return true;
    }else{
      return false;
    }
  }

  this.pairs = function(){
    var count = 0;
    var found = [];
    for(var i=0;i<this.numArray.length-1;i++){
      if(this.numArray[i+1]-this.numArray[i] == 0) {
        if(found.indexOf(this.numArray[i]) <0){
          count++;
          found.push(this.numArray[i]);
        }
      }
    }
    if(count >1){
      return true;
    }else{
      return false;
    }
  }

  this.test = function(){
    if(this.letters() && this.sequential() && this.pairs()){return true}else{return false}
  }

  this.next = function(){
    while(!this.test()){
      this.iterate();
    }
    return this.arrayToStr();
  }
  this.numArray = this.numToArray();
} 

module.exports.Password = Password;
