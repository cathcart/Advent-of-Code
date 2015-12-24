var expect = require("chai").expect;
var lights = require("../lib/lights2.js");
var Matrix = require('dstructs-matrix');
var fs = require('fs');

describe("lights 2 puzzle", function() {

  describe("test GameOfLife().parse()", function(){
    var input = "#.\n.#";
    var ans = Matrix([1,0,0,1],[2,2]);
    var test = new lights.GameOfLife(input);
    it("GameOfLife("+input+").lights to be "+ans, function(){
      expect(test.lights).to.eql(ans);
    });
  });
  
  describe("test GameOfLife().parse()", function(){
    var file = "test.txt";
    var input = fs.readFileSync(file, 'ascii').trim();
    var ans = 15;
    var test = new lights.GameOfLife(input);
    it("GameOfLife("+input+").lights to be "+ans, function(){
      expect(test.count()).to.eql(ans);
    });
  });

  describe("test GameOfLife().parse().iterate()", function(){
    var file = "test.txt";
    var input = fs.readFileSync(file, 'ascii').trim();
    var ans = 4;
    var test = new lights.GameOfLife(input);
    for(var i=0;i<4;i++){
      test.iterate();
    }
    it("GameOfLife("+input+").lights to be "+ans, function(){
      expect(test.count()).to.eql(ans);
    });
  });

  describe("test GameOfLife().parse().iterate() with corners stuck on", function(){
    var file = "test.txt";
    var input = fs.readFileSync(file, 'ascii').trim();
    var ans = 17;
    var test = new lights.GameOfLife(input);
    //turn the four corners on
    for(var i=0;i<5;i++){
      test.edgesOn();
      test.iterate();
      test.edgesOn();
    }
    it("GameOfLife("+input+").lights to be "+ans, function(){
      expect(test.count()).to.eql(ans);
    });
  });

});
