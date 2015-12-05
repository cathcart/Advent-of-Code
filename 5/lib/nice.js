var Test = function(){
  this.vowelRe = /[aeiou]/g;

  this.hasAtLeastThreeVowels = function(str){
    var noVowels = 0;
    while ((myArray = this.vowelRe.exec(str)) !== null) {
      //myRe.lastIndex;
      noVowels += 1;
      //if(noVowels > 2 ) break;
    }
 //   console.log("no. vowels: "+noVowels);
    return noVowels > 2;
  }

  this.doubleLetter = function(str){
    var doubleRe = /([a-z])(\1)/;
    //console.log("double letter regex result: "+doubleRe.exec(str));
    return doubleRe.exec(str) !== null;
  }

  this.noBadStrings = function(str){
    var badStrings = [/ab/,/cd/,/pq/,/xy/];
    for(var e=0;e<badStrings.length;e++){
      if( badStrings[e].exec(str) !== null){
      //  console.log("has bad strings");
        return false;
      }
    }
    //console.log("has no bad strings");
    return true;
  }

  this.isNice = function(str){
    //console.log("Testing "+str);
    if(this.noBadStrings(str) && this.hasAtLeastThreeVowels(str) && this.doubleLetter(str)) {
       return true;
    } else{
      return false;
    }
  }
 
  this.newDoubleLetter = function(str){
    //var doubleRe = /([a-z][a-z]){2}/g;
    var doubleRe = /([a-z]{2})[a-z]*\1/;//alternative
    return doubleRe.exec(str) !== null;
  }

  this.repeatedLetter = function(str){
    var doubleRe = /([a-z])[a-z]\1/;
    return doubleRe.exec(str) !== null;
  }

  this.newIsNice = function(str){
    if(this.repeatedLetter(str) && this.newDoubleLetter(str)) {
       return true;
    } else{
      return false;
    }
    
  }

  this.filterCount = function(inArray){
    var noNice = 0;
    for(var i=0; i<inArray.length; i++){
      var t = this.isNice(inArray[i]);
      //if(this.isNice(inArray[i])){
      if(t){
        noNice += 1;
      }
      
      //console.log(i,inArray[i],this.isNice(inArray[i]),noNice);
    }
    return noNice;
  }
  this.newFilterCount = function(inArray){
    var noNice = 0;
    for(var i=0; i<inArray.length; i++){
      var t = this.newIsNice(inArray[i]);
      //if(this.isNice(inArray[i])){
      if(t){
        noNice += 1;
      }
      
      //console.log(i,inArray[i],this.isNice(inArray[i]),noNice);
    }
    return noNice;
  }
}

module.exports.Test = Test;
