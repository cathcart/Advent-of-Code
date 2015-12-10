var expect = require("chai").expect;
var looksay = require("../lib/look-say.js");

describe("Look say puzzle", function() {

  describe("Problem case", function(){
    var str = "211";
    var ans = "1221";
    it("The string "+str+" should be "+ans, function(){
        var look = new looksay.LookSay(str);
        look.iterate();
        expect(look.str).to.eql(ans);
    });
  });
  describe("Repeat test - step 1", function(){
    var str = "1";
    var look = new looksay.LookSay(str);
    var ans1 = "11";
    it("The string "+look.str+" should be "+ans1, function(){
        look.iterate();
        expect(look.str).to.eql(ans1);
    });
  });
  describe("Repeat test - step 2", function(){
    var str = "1";
    var look = new looksay.LookSay(str);
    var ans2 = "21";
    it("The string "+look.str+" should be "+ans2, function(){
        look.iterate();
        look.iterate();
        expect(look.str).to.eql(ans2);
    });
  });
  describe("Repeat test - step 3", function(){
    var str = "1";
    var look = new looksay.LookSay(str);
    var ans3 = "1211";
    it("The string "+look.str+" should be "+ans3, function(){
        look.iterate();
        look.iterate();
        look.iterate();
        expect(look.str).to.eql(ans3);
    });
  });
  describe("Repeat test - step 4", function(){
    var str = "1";
    var look = new looksay.LookSay(str);
    var ans4 = "111221";
    it("The string "+look.str+" should be "+ans4, function(){
        look.iterate();
        look.iterate();
        look.iterate();
        look.iterate();
        expect(look.str).to.eql(ans4);
    });
  });
  describe("Repeat test - step 5", function(){
    var str = "1";
    var look = new looksay.LookSay(str);
    var ans5 = "312211";
    it("The string "+look.str+" should be "+ans5, function(){
        look.iterate();
        look.iterate();
        look.iterate();
        look.iterate();
        look.iterate();
        expect(look.str).to.eql(ans5);
    });
  });
/*
    var ans = "1211";
    it("The string "+look.str+" should be "+ans, function(){
        look.iterate();
        expect(look.str).to.eql(ans);
    });
    var ans = "111221";
    it("The string "+look.str+" should be "+ans, function(){
        look.iterate();
        expect(look.str).to.eql(ans);
    });
    var ans = "312211";
    it("The string "+look.str+" should be "+ans, function(){
        look.iterate();
        expect(look.str).to.eql(ans);
    });*/
});
