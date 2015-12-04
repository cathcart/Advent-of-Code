var expect = require("chai").expect;
var miner = require("../lib/miner.js");

describe("AdventCoin miner", function() {
  describe("Test basic miner functions", function(){
    it("Miner should hash 'hello' to '5d41402abc4b2a76b9719d911017c592'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.hash('hello')).equal('5d41402abc4b2a76b9719d911017c592');
    });
    it("Miner should hash 'message' to '78e731027d8fd50ed642340b7c9a63b3'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.hash('message')).equal('78e731027d8fd50ed642340b7c9a63b3');
    });
    it("Miner.message should return true for the string 'hello0' for the input 'hello'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.message('hello')).to.equal("hello0");
    });
    it("Miner.test should return true for the string 'abcdef609043'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.test('abcdef609043')).to.be.true;
    });
    it("Miner.test should return true for the string 'pqrstuv1048970'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.test('pqrstuv1048970')).to.be.true;
    });
  });
  describe("Problem tests", function(){
    this.timeout(0);
    it("A secret key of 'abcdef' should give a nonce of '609043'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.mine('abcdef')).equal(609043);
    });
    it("A secret key of 'pqrstuv' should give a nonce of '1048970'", function(){
      var adventCoin = new miner.Miner();
      expect(adventCoin.mine('pqrstuv')).equal(1048970);
    });
  });
});

