var expect = require("chai").expect;
var cookies = require("../lib/cookies.js");

describe("Cookie recipe puzzle", function() {

  describe("test Recpie().parse()", function(){
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8\nCinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3";
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8";
    var ans = [[-1,-2,6,3,8]];
    var test = new cookies.Recipe().parse(str);
    it("Recipe.parse("+str+").ingredients should give "+ans, function(){
      expect(test.ingredients).to.eql(ans);
    });
  });
  describe("test Recpie().parse()", function(){
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8\nCinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3";
    var ans = [[-1,-2,6,3,8],[2,3,-2,-1,3]];
    var test = new cookies.Recipe().parse(str);
    it("Recipe.parse("+str+").ingredients should give "+ans, function(){
      expect(test.ingredients).to.eql(ans);
    });
  });
  describe("test Recpie().parse().cost()", function(){
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8\nCinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3";
    var x = [44, 56];
    var ans = 62842880;
    var test = new cookies.Recipe().parse(str);
    it("Recipe.parse().cost("+x+") should give "+ans, function(){
      expect(test.cost(x)).to.eql(ans);
    });
  });
  describe("test Recpie().parse().opt()", function(){
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8\nCinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3";
    var ans = 62842880;
    var test = new cookies.Recipe().parse(str);
    it("Recipe.parse().opt() should give "+ans, function(){
      expect(test.opt()).to.eql(ans);
    });
  });
  describe("test Recpie().parse().opt()", function(){
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8\nCinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3";
    var ans = 62842880;
    var test = new cookies.Recipe().parse(str);
    it("Recipe.parse().opt() should give "+ans, function(){
      expect(test.opt2()).to.eql(ans);
    });
  });
  describe("test Recpie().parse().calorieOpt()", function(){
    var str = "Butterscotch: capacity -1, durability -2, flavor 6, texture 3, calories 8\nCinnamon: capacity 2, durability 3, flavor -2, texture -1, calories 3";
    var ans = 57600000
    var test = new cookies.Recipe().parse(str);
    it("Recipe.parse().opt() should give "+ans, function(){
      expect(test.calorieOpt()).to.eql(ans);
    });
  });
});
