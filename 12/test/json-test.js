var expect = require("chai").expect;
var sson = require("../lib/json.js");

describe("Santa JSON puzzle", function() {
  describe("test JSON.parse()", function(){
    var str = "[1, 5, 3]";
    var ans = [1, 5, 3];
    it("JSON.parse("+str+") should give "+ans, function(){
      expect(JSON.parse(str)).to.eql(ans);
    });
  });
  describe("test Sson.values()", function(){
    var str = "{\"a\":1, \"b\":2}";
    var ans = [1, 2];
    it("JSON.parse("+str+") should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.values(JSON.parse(str))).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "{\"a\":1, \"b\":2}";
    var ans = 3;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.recursiveSum(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "[[[3]]]";
    var ans = 3;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.recursiveSum(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "{\"a\":{\"b\":4},\"c\":-1}";
    var ans = 3;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.recursiveSum(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "{\"a\":[-1,1]}";
    var ans = 0;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.recursiveSum(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "[-1,{\"a\":1}]";
    var ans = 0;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.recursiveSum(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "{}";
    var ans = 0;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.recursiveSum(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "[1,{\"c\":\"red\",\"b\":2},3]";
    var ans = 4;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.sumRed(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "{\"d\":\"red\",\"e\":[1,2,3,4],\"f\":5}";
    var ans = 0;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.sumRed(some.want)).to.eql(ans);
    });
  });
  describe("test SSON.recursiveSum()", function(){
    var str = "[1,\"red\",5]";
    var ans = 6;
    it("SSON("+str+").recursiveSum() should give "+ans, function(){
      var some = new sson.SSON(str);
      expect(some.sumRed(some.want)).to.eql(ans);
    });
  });
});
