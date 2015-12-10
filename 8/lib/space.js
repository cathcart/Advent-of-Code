var SpaceCounter = function(){
  this.code = 0;
  this.ecode = 0;
  this.memory = 0;  

  this.clean = function(str){
    var endQuotes = /"/g;
    var singleQuote = /\\"/g;
    var doubleBackslash = /\\\\/g;
    var hex = /\\x[0-9A-Fa-f]{2}/g;

    if(hex.test(str)){
      str = str.replace(hex, "a");
    }
    if(doubleBackslash.test(str)){
      str = str.replace(doubleBackslash, "a");
    }
    if(singleQuote.test(str)){
      str = str.replace(singleQuote, "a");
    }
    return str.replace(endQuotes, "");
}

  this.encode = function(str){
    //remove trailing quote
    str = str.replace(/"$/, "");
    var endQuotes = /"/g;
    var singleQuote = /\\"/g;
    var doubleBackslash = /\\\\/g;
    var hex = /\\x[0-9A-Fa-f]{2}/g;

    if(doubleBackslash.test(str)){
      //str = str.replace(doubleBackslash, "\\\\\\");
      //str = str.replace(doubleBackslash, "\\\\\\\\");
      str = str.replace(doubleBackslash, "\\\\\\\\");
      //console.log("here "+str);
    }
    if(hex.test(str)){
      //console.log("hit "+str);
      str = str.replace(/\\x/g,"\\\\x");
    }
    if(singleQuote.test(str)){
      //console.log("hit "+str);
      str = str.replace(singleQuote, "\\\\\\\"");
    }
    
    //leading quote
    str = str.replace(/^"/, "\"\\\"");
    //add trailing quote
    //str = str.replace(/"$/, "\\\"\"");
    str = str + "\\\"\"";

    return str;

    //return "\""+str.replace(endQuotes, "\\\"")+"\"";
}

  this.parse = function(str){
    this.correction = 0; 
    var length = this.clean(str).length;
    var elength = this.encode(str).length; 
    //var elength = JSON.stringify(str).length; 

/* 
JSON.stringify has to be used this.ecode gets caught on strings such as
"jctcqra\"\x05dhlydpqamorqjsijt\\xjdgt"
\\xjd
is this a double backslash followed by a random string of characters (which happen to look like a hex code?)
or is it a single backslash (which isn't suppose to be included) followed by a hex code?
either way no es bueno.

*/


    if(JSON.stringify(str).length != elength){
      console.log("This string "+str);
      console.log("was encoded as "+this.encode(str));
      console.log("and shoudl be  "+JSON.stringify(str));
      throw "Nope";
    }

    //console.log(this.encode(str));
    //console.log("read "+JSON.stringify(str));
 
    this.ecode += elength;
    this.memory += length;
    this.code += str.length; 

    return this;
  }

  this.diff = function(){
    return (this.code - this.memory);
  }
  this.ediff = function(){
    return (this.ecode - this.code);
  }
}

module.exports.SpaceCounter = SpaceCounter;
