var expect = require("chai").expect;
var password = require("../lib/password.js");

describe("Password puzzle", function() {

  describe("String to number array", function(){
    var str = "ab";
    var ans = [ 97, 98 ];
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.numArray).to.eql(ans);
    });
  });

  describe("Iterate string", function(){
    var str = "ab";
    var ans = "ac";
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        pass.iterate();
        expect(pass.arrayToStr()).to.eql(ans);
    });
  });

  describe("Iterate string-overflow", function(){
    var str = "az";
    var ans = "ba";
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        pass.iterate();
        expect(pass.arrayToStr()).to.eql(ans);
    });
  });

  describe("Test for accending sequences", function(){
    var str = "abc";
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.sequential()).to.eql(ans);
    });
  });

  describe("Test for accending sequences", function(){
    var str = "abd";
    var ans = false;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.sequential()).to.eql(ans);
    });
  });

  describe("Test for pairs", function(){
    var str = "aabb";
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.pairs()).to.eql(ans);
    });
  });

  describe("Test for pairs", function(){
    var str = "abd";
    var ans = false;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.pairs()).to.eql(ans);
    });
  });

  describe("Problem case a", function(){
    var str = "abcdfabc";
    var ans = false;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case a2", function(){
    var str = "abcdffaa";
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case a2 - letters", function(){
    var str = "abcdffaa"; //ok
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.letters()).to.eql(ans);
    });
  });

  describe("Problem case a2 - sequential", function(){
    var str = "abcdffaa"; //ok
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.sequential()).to.eql(ans);
    });
  });

  describe("Problem case a2 - two pairs", function(){
    var str = "abcdffaa";
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.pairs()).to.eql(ans);
    });
  });

  describe("Problem case a2 - test", function(){
    var str = "abcdffaa";
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case b", function(){
    var str = "abcdffaa";
    var ans = true;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case 1", function(){
    var str = "hijklmmn";
    var ans = false;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case 2", function(){
    var str = "abbceffg";
    var ans = false;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case 3", function(){
    var str = "abbcegjk";
    var ans = false;
    it("The string "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.test()).to.eql(ans);
    });
  });

  describe("Problem case - next password", function(){
    var str = "abcdefgh";
    var ans = "abcdffaa";
    it("The next password after "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.next()).to.eql(ans);
    });
  });

  describe("Problem case - next password", function(){
    var str = "ghijklmn";
    var ans = "ghjaabcc";
    it("The next password after "+str+" should be "+ans, function(){
        var pass = new password.Password(str);
        expect(pass.next()).to.eql(ans);
    });
  });

});
