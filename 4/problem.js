var miner = require("./lib/miner.js");

var adventCoin = new miner.Miner();
var one = adventCoin.mine('iwrupvqb');
console.log("Part 1: "+one);
adventCoin.proof = "000000";
adventCoin.noodle = one;
console.log("Part 2: "+adventCoin.mine('iwrupvqb'));
