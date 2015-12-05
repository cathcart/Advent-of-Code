var expect = require("chai").expect;
var nice = require("../lib/nice.js");

describe("Naughty-Nice word detector", function() {
  describe("More than three vowels test", function(){
    var trueWords = ["aaa","require", "aei", "xazegov", "aeiouaeiouaeiou"];
    trueWords.map(function(elm){
      it("Test.hasAtLeastThreeVowels() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.hasAtLeastThreeVowels(elm)).to.be.true;
      });
    });
    it("Test.hasAtLeastThreeVowels() should be false for 'work'", function(){
      var test = new nice.Test();
      expect(test.hasAtLeastThreeVowels('work')).to.be.false;
    });
  });
  describe("Repeated letter test", function(){
    var trueWords = ["xx", "abcdde", "aabbccdd"];
    trueWords.map(function(elm){
      it("Test.doubleLetter() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.doubleLetter(elm)).to.be.true;
      });
    });
  });
  describe("Bad strings test", function(){
    var trueWords = ["xx", "dde", "aacc"];
    trueWords.map(function(elm){
      it("Test.noBadStrings() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.noBadStrings(elm)).to.be.true;
      });
    });
    var falseWords = ["xy", "abcdde", "pppppppq"];
    falseWords.map(function(elm){
      it("Test.noBadStrings() should be false for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.noBadStrings(elm)).to.be.false;
      });
    });
  });
  describe("Problem tests", function(){
    var trueWords = ["ugknbfddgicrmopn", "aaa"];
    trueWords.map(function(elm){
      it("Test.isNice() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.isNice(elm)).to.be.true;
      });
    });
    var falseWords = ["jchzalrnumimnmhp", "haegwjzuvuyypxyu", "dvszwmarrgswjxmb"];
    falseWords.map(function(elm){
      it("Test.isNice() should be false for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.isNice(elm)).to.be.false;
      });
    });
  });
  describe("Filter test", function(){
    it("Testing the array ['jchzalrnumimnmhp', 'haegwjzuvuyypxyu', 'aaa'] with Test.filterCount() should give 1", function(){
      var test = new nice.Test();
      var testArray = ["jchzalrnumimnmhp", "haegwjzuvuyypxyu", "aaa"];

      //console.log("Special "+test.isNice(testArray[2]));

      /*testArray.map(function(str){
        console.log(str,test.isNice(str));
      });*/

      expect(test.filterCount(testArray)).to.equal(1);
    });
  });
  describe("Part 2 - string tests", function(){
    var trueWords = ["xyxy", "aabcdefgaa"];
    trueWords.map(function(elm){
      it("Test.newDoubleLetter() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.newDoubleLetter(elm)).to.be.true;
      });
    });
    var falseWords = ["aaa"];
    falseWords.map(function(elm){
      it("Test.newDoubleLetter() should be false for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.newDoubleLetter(elm)).to.be.false;
      });
    });
    //
    var trueWords = ["xyx", "abcdefeghi", "aaa"]
    trueWords.map(function(elm){
      it("Test.repeatedLetter() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.repeatedLetter(elm)).to.be.true;
      });
    });
    var falseWords = ["abc"];
    falseWords.map(function(elm){
      it("Test.repeatedLetter() should be false for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.repeatedLetter(elm)).to.be.false;
      });
    });
  });
  describe("Problem tests part 2", function(){
    var trueWords = ["qjhvhtzxzqqjkmpb", "xxyxx"];
    trueWords.map(function(elm){
      it("Test.newIsNice() should be true for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.newIsNice(elm)).to.be.true;
      });
    });
    var falseWords = ["uurcxstgmygtbstg", "ieodomkazucvgmuy"];
    falseWords.map(function(elm){
      it("Test.newIsNice() should be false for '"+elm+"'", function(){
        var test = new nice.Test();
        expect(test.newIsNice(elm)).to.be.false;
      });
    });
  });
});
