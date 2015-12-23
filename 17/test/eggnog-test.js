var expect = require("chai").expect;
var eggnog = require("../lib/eggnog.js");

describe("Eggnog puzzle", function() {

/*
  describe("test Fridge().iceBox.get()", function(){
    var input = 25
    var ans = 0;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.get("+input+") to be "+ans, function(){
      expect(test.howMany(input)).to.eql(ans);
    });
  });*/

/*
  describe("test Fridge().iceBox.get() with problem data", function(){
    var input = 25
    var ans = [4];
    var test = new eggnog.Fridge();
    test.iceBox.put([25,[20,15,10,5,5]],4);
    it("Fridge.iceBox.put("+input+") to be "+ans, function(){
      expect(test.iceBox.values).to.eql(ans);
    });
  });

  describe("test Fridge().iceBox.get() with problem data", function(){
    var input = 25
    var ans = [4];
    var test = new eggnog.Fridge();
    var ref = [25,[20,15,10,5,5]];
    test.iceBox.put(ref,4);
    it("Fridge.iceBox.put("+input+") to be "+ans, function(){
      expect(test.iceBox.ref).to.eql([ref]);
    });
  });

  describe("test Fridge().iceBox.put().get() with problem data", function(){
    var input = 25
    var ans = 4;
    var test = new eggnog.Fridge();
    var ref = [25,[20,15,10,5,5]];
    test.iceBox.put(ref,4);
    it("Fridge.iceBox.put().get("+input+") to be "+ans, function(){
      expect(test.iceBox.get(ref)).to.eql(ans);
    });
  });

  describe("test Fridge().iceBox.put().get() with problem data", function(){
    var input = 25
    var ans = 4;
    var test = new eggnog.Fridge();
    var ref = [5,[15,10,5,5]];
    var ref2 = [25,[20,15,10,5,5]];
    test.iceBox.put(ref,2);
    test.get(ref2);
    it("Fridge.iceBox.put().get("+input+") to be "+ans, function(){
      expect(test.iceBox.get(ref)).to.eql(ans);
    });
  });*/

  describe("test Fridge().get() with problem data", function(){
    var V = 25;
    var arr = [20,15,10,5,5];
    var ans = 4;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.get("+arr+") to be "+ans, function(){
      expect(test.get(V,arr)).to.eql(ans);
    });
  });

  describe("test Fridge().get() with problem data", function(){
    var V = 10;
    var arr = [10,5,5];
    var ans = 2;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.get("+arr+") to be "+ans, function(){
      expect(test.get(V,arr)).to.eql(ans);
    });
  });

  describe("test Fridge().getMin() with problem data", function(){
    var V = 10;
    var arr = [10,5,5];
    var ans = 1;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.getMin("+arr+") to be "+ans, function(){
      expect(test.getMin(V,arr,[])[0]).to.eql(ans);
    });
  });

  describe("test Fridge().getMin() with problem data", function(){
    var V = 5;
    var arr = [20,15,10,5,5];
    var ans = 2;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.getMin("+arr+") to be "+ans, function(){
      expect(test.getMin(V,arr)[1]).to.eql(ans);
    });
  });

  describe("test Fridge().getMin() with problem data", function(){
    var V = 10;
    var arr = [20,15,10,5,5];
    var ans = 1;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.getMin("+arr+") to be "+ans, function(){
      expect(test.getMin(V,arr)[1]).to.eql(ans);
    });
  });

  describe("test Fridge().getMin() with problem data", function(){
    var V = 25;
    var arr = [20,15,10,5,5];
    var ans = 3;
    var test = new eggnog.Fridge();
    it("Fridge.iceBox.getMin("+arr+") to be "+ans, function(){
      expect(test.getMin(V,arr)[1]).to.eql(ans);
    });
  });

});
