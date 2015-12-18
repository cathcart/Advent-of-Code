var expect = require("chai").expect;
var aunts = require("../lib/aunts.js");

describe("Which aunt puzzle", function() {
  describe("test Sue().parseLine()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0";
    var ans = 3;
    var test = new aunts.Sue().get("children");
    it("Sue.parseLine("+str+") to be "+ans, function(){
      expect(test).to.eql(ans);
    });
  });
  describe("test Sue().parseLine()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0";
    var ans = true;
    var test = new aunts.Sue().itemOk(["children",3]);
    it("Sue.parseLine("+str+") to be "+ans, function(){
      expect(test).to.eql(ans);
    });
  });
  describe("test Sue().parseLine()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0";
    var ans = false;
    var test = new aunts.Sue().parseLine(str);
    it("Sue.parseLine("+str+") to be "+ans, function(){
      expect(test).to.eql(ans);
    });
  });
  describe("test Sue().parseLine()", function(){
    var str = "Sue 1: cats: 9, akitas: 0, goldfish: 0";
    var ans = true;
    var test = new aunts.Sue()
    test.two = true;
    //var test = new aunts.Sue().parseLine(str);
    it("Sue.parseLine("+str+") to be "+ans, function(){
      expect(test.parseLine(str)).to.eql(ans);
    });
  });
  describe("test Sue().parseLine()", function(){
    var str = "Sue 1: cats: 9, akitas: 0, goldfish: 0";
    var ans = false;
    var test = new aunts.Sue()
    test.two = false;
    //var test = new aunts.Sue().parseLine(str);
    it("Sue.parseLine("+str+") to be "+ans, function(){
      expect(test.parseLine(str)).to.eql(ans);
    });
  });
  describe("test Sue().parse()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0\nSue 2: akitas: 9, children: 3, samoyeds: 9";
    var ans = [];
    var test = new aunts.Sue();
    test.two = true;
    it("Sue.parse("+str+") to be "+ans, function(){
      expect(test.parse(str)).to.eql(ans);
    });
  });
/*
  describe("test Sue().parse()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0\nSue 2: akitas: 9, children: 3, samoyeds: 9";
    var ans = "None";
    var test = new aunts.Sue().parse(str);
    it("Sue.parse("+str+") to be "+ans, function(){
      expect(test).to.eql(ans);
    });
  });
  describe("test Sue().getValue()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0\nSue 2: akitas: 9, children: 3, samoyeds: 9";
    var ans = 2;
    var item = "cars";
    var test = new aunts.Sue().getValue(item);
    it("Sue().getValue("+item+") to be "+ans, function(){
      expect(test).to.eql(ans);
    });
  });
  describe("test Sue().getValue()", function(){
    var str = "Sue 1: cars: 9, akitas: 3, goldfish: 0\nSue 2: akitas: 9, children: 3, samoyeds: 9";
    var ans = 2;
    var item = "cars";
    var test = new aunts.Sue().test(str.split("\n")[0]);
    it("Sue().getValue("+item+") to be "+ans, function(){
      expect(test).to.eql(ans);
    });
  });
/*
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
  });*/
});
