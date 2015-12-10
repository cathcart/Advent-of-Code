var expect = require("chai").expect;
var space = require("../lib/space.js");
var fs = require('fs');

function getData(infile){
  fs.readFile(infile, 'ascii', function (err, data) {
    if (err){ throw err;} 
    return data.trim();//.split("\n");
  });
}

describe("Code and memory space puzzle", function() {
  var file = './test.dat';
  var data = fs.readFileSync(file, 'ascii').trim().split("\n");
  describe("Empty string test", function(){
    var str = "";
    var str = data[0];
    var codeNo = 2;
    var memoryNo = 0;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  describe("'abc' string test", function(){
    var str = "abc";
    var str = data[1];
    var codeNo = 5;
    var memoryNo = 3;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  
  describe("escaped single quote test", function(){
    var str = "aaa\"aaa";
    var str = data[2];
    var codeNo = 10;
    var memoryNo = 7;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  describe("escaped hex character test", function(){
    var str = "\x27";
    var str = data[3];
    var codeNo = 6;
    var memoryNo = 1;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  describe("escaped backslash character test", function(){
    var str = "\\";
    var str = data[4];
    var codeNo = 4;
    var memoryNo = 1;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  describe("multiple escaped character test", function(){
    var str = "a\x27ab\\cd";
    var str = data[5];
    var codeNo = 13;
    var memoryNo = 7;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  describe("Total difference", function(){
    var diff = 12;
    it("The total difference between the code and memory lengths for all the above strings should be "+diff, function(){
        var counter = new space.SpaceCounter();
        data.slice(0,4).map(function(d){
          counter.parse(d);
        });
        expect(counter.diff()).to.eql(diff);
    });
  });
  describe("multiple escaped character test", function(){
    var str = data[6];
    var codeNo = 38;
    var memoryNo = 29;
    it("SpaceCounter.parse("+str+").code should be "+codeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).code).to.eql(codeNo);
    });
    it("SpaceCounter.parse("+str+").memory should be "+memoryNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).memory).to.eql(memoryNo);
    });
  });
  describe("Encoded empty string test", function(){
    var str = "";
    var str = data[0];
    var ecodeNo = 6;
    var memoryNo = 0;
    it("SpaceCounter.parse("+str+").ecode should be "+ecodeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).ecode).to.eql(ecodeNo);
    });
  });
  describe("Encoded 'abc' string test", function(){
    var str = "abc";
    var str = data[1];
    var ecodeNo = 9;
    var memoryNo = 3;
    it("SpaceCounter.parse("+str+").ecode should be "+ecodeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).ecode).to.eql(ecodeNo);
    });
  });
  describe("Encoded escaped single quote test", function(){
    var str = "aaa\"aaa";
    var str = data[2];
    var ecodeNo = 16;
    var memoryNo = 7;
    it("SpaceCounter.parse("+str+").ecode should be "+ecodeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).ecode).to.eql(ecodeNo);
    });
  });
  describe("Encoded escaped backslash character test", function(){
    var str = "\\";
    var str = data[4];
    var ecodeNo = 10; 
    it("SpaceCounter.parse("+str+").ecode should be "+ecodeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).ecode).to.eql(ecodeNo);
    });
  });/*
  describe("Encoded escaped hex character test", function(){
    var str = "\x27";
    var str = data[3];
    var ecodeNo = 11;
    it("SpaceCounter.parse("+str+").ecode should be "+ecodeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).ecode).to.eql(ecodeNo);
    });
  });
  describe("Total enoded difference", function(){
    var diff = 19;
    it("The total difference between the code and memory lengths for all the above strings should be "+diff, function(){
        var counter = new space.SpaceCounter();
        data.slice(0,4).map(function(d){
          counter.parse(d);
        });
        expect(counter.ediff()).to.eql(diff);
    });
  });
  describe("Encoded multicharacter test", function(){
    var str = data[7];
    var ecodeNo = 50;
    it("SpaceCounter.parse("+str+").ecode should be "+ecodeNo, function(){
        var counter = new space.SpaceCounter();
        expect(counter.parse(str).ecode).to.eql(ecodeNo);
    });
  });*/
});
