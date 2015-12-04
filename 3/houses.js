Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});
///////////////////////////////////////////////////////////
var err = new ReferenceError('This is a bad function.');

var Santa = function(){
  this.housesList = [[0,0]];
  this.list = function(){
    return this.housesList;
  }

  this.currentPos = [0,0];
  this.pos = function() {
    return this.currentPos;
  }

  this.tell = function(input){
    for(var i=0;i<input.length;i++){
      this.move(input[i]);
    }
  }

  this.test = function(pos){
    for(var i=0;i<this.housesList.length;i++){
      if(this.housesList[i].equals(pos)){
        return true;
      }
    }
    return false;
  }

  this.move = function(cmd){
   //if(cmd.length > 1) throw err;
   if(["^","v","<",">"].indexOf(cmd) === -1) {console.log(cmd);throw err;}
   switch(cmd){
     case "^":
       this.currentPos[1] += 1 ;
       break;
     case "v":
       this.currentPos[1] -= 1 ;
       break;
     case "<":
       this.currentPos[0] -= 1 ;
       break;
     case ">":
       this.currentPos[0] += 1 ;
       break;
   }
   if(!this.test(this.currentPos)) {
     //use Array.slice() here to duplicate an array
     this.housesList.push(this.currentPos.slice());
   }
  }
};

var stringSplit = function(str, start) {
  newString = [];
  for(var i=start; i<str.length; i+=2){
    newString.push(str[i]);
  }
  return newString.join("");
}

var elfController = function(data) {
  var santa = new Santa();
  var robot = new Santa();

  santa.tell(stringSplit(data, 0));
  robot.tell(stringSplit(data, 1));

  robot.list().map(function(elm) {
    if(!santa.test(elm)) santa.housesList.push(elm);
  });
      
  return santa.list().length;

}

module.exports.stringSplit = stringSplit;
module.exports.elfController = elfController;
module.exports.Santa = Santa;
