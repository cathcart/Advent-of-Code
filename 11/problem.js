var password = require("./lib/password.js");

var str = "hepxcrrq";
var pass = new password.Password(str);

console.log("Santas next password is: "+pass.next());

var str = "hepxxzaa"; //this is +1 from the solution of the previous step
var pass2 = new password.Password(str);

console.log("Santas next password is: "+pass2.next());
