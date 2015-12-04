var md5 = require('md5');

var Miner = function(){
  this.hash = function(str){
    return md5(str);
  }

  this.nonce = 0;
  this.proof = "00000";

  this.test = function(str){
    return this.hash(str).slice(0,this.proof.length) === this.proof;
  }
 
  this.message = function(str){
    return str.concat(this.nonce);
  }
 
  this.mine = function(key){
    while(!this.test(this.message(key))){
      this.nonce += 1;
      //console.log(this.nonce, this.message(key));
    }
    return this.nonce;
  }
}

module.exports.Miner = Miner;
