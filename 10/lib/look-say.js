var LookSay = function(str){
  this.str = str;

  this.iterate = function(){
    var newString = "";
    for(var i=0;i<this.str.length;i++){
      var c = this.str[i];
      var j = 1;
      while(this.str[i+j] === this.str[i]){
        j++;
      }
      newString = newString.concat(j);
      newString = newString.concat(c);
      i += (j-1);
    }
    this.str = newString;
  }
} 

module.exports.LookSay = LookSay;
