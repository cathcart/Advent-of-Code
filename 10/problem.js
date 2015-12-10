var looksay = require("./lib/look-say.js");

var str = "1113222113";
var look = new looksay.LookSay(str);

for(var i=1;i<=40;i++){
  look.iterate();
}
console.log("After 40 iterations the resulting string is of length: "+look.str.length);

var str = "1113222113";
var look = new looksay.LookSay(str);

for(var i=1;i<=50;i++){
  look.iterate();
}
console.log("After 50 iterations the resulting string is of length: "+look.str.length);
