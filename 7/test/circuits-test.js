var expect = require("chai").expect;
var circuits = require("../lib/circuits.js");

describe("Circuits puzzle", function() {
/*  describe("Parse source assignment tests", function(){
    var str = '123 -> x';
    var wiresArray = ['x'];
    var valuesArray = [123];
    var sourcesArray = [null];
    it("Circuit.parse("+str+").wires should be "+wiresArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).wires).to.eql(wiresArray);
    });
    it("Circuit.parse("+str+").values should be "+valuesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).values).to.eql(valuesArray);
    });
    it("Circuit.parse("+str+").sources should be "+sourcesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).sources).to.eql(sourcesArray);
    });
  });
  describe("Parse bitwise AND assignment test", function(){
    var str = 'x AND y -> z';
    var wiresArray = ['z'];
    var valuesArray = [null];
    var sourcesArray = [[['x','y'],['AND']]];
    it("Circuit.parse("+str+").wires should be "+wiresArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).wires).to.eql(wiresArray);
    });
    it("Circuit.parse("+str+").values should be "+valuesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).values).to.eql(valuesArray);
    });
    it("Circuit.parse("+str+").sources should be "+sourcesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).sources).to.eql(sourcesArray);
    });
  });
  describe("Parse LSHIFT assignment test", function(){
    var str = 'x LSHIFT 2 -> z';
    var wiresArray = ['z'];
    var valuesArray = [null];
    var sourcesArray = [[['x'],['LSHIFT', 2]]];
    it("Circuit.parse("+str+").wires should be "+wiresArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).wires).to.eql(wiresArray);
    });
    it("Circuit.parse("+str+").values should be "+valuesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).values).to.eql(valuesArray);
    });
    it("Circuit.parse("+str+").sources should be "+sourcesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).sources).to.eql(sourcesArray);
    });
  });
  describe("Parse NOT assignment test", function(){
    var str = 'NOT x -> z';
    var wiresArray = ['z'];
    var valuesArray = [null];
    var sourcesArray = [[['x'],['NOT']]];
    it("Circuit.parse("+str+").wires should be "+wiresArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).wires).to.eql(wiresArray);
    });
    it("Circuit.parse("+str+").values should be "+valuesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).values).to.eql(valuesArray);
    });
    it("Circuit.parse("+str+").sources should be "+sourcesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str).sources).to.eql(sourcesArray);
    });
  });
 
  describe("Calculate 'AND' test", function(){
    var str1 = '123 -> x';
    var str2 = '456 -> y';
    var str3 = 'x AND y -> d';
    var wiresArray = ['x', 'y','d'];
    var valuesArray = [123, 456, 72];
    var sourcesArray = [null, null, [['x','y'],['AND']]];
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").wires should be "+wiresArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str1).parse(str2).parse(str3).wires).to.eql(wiresArray);
    });
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").sources should be "+sourcesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str1).parse(str2).parse(str3).sources).to.eql(sourcesArray);
    });
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").calculate('d').values should be "+valuesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        var parsed = bobbysCircuit.parse(str1).parse(str2).parse(str3);
        var fin = parsed.calculate('d');
 
        expect(parsed.values).to.eql(valuesArray);
    });
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").calculate('d') should be '72'", function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str1).parse(str2).parse(str3).calculate('d')).to.eql(72);
    });
  });
  describe("Calculate 'OR' test", function(){
    var str1 = '123 -> x';
    var str2 = '456 -> y';
    var str3 = 'x AND y -> d';
    var str4 = 'x OR y -> e';
    var wiresArray = ['x', 'y','d','e'];
    var valuesArray = [123, 456, 72, 507];
    var sourcesArray = [null, null, [['x','y'],['AND']],[['x','y'],['OR']]];
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").parse("+str4+").wires should be "+wiresArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str1).parse(str2).parse(str3).parse(str4).wires).to.eql(wiresArray);
    });
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").parse("+str4+").sources should be "+sourcesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str1).parse(str2).parse(str3).parse(str4).sources).to.eql(sourcesArray);
    });
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").parse("+str4+").calculate('e').values should be "+valuesArray, function(){
        var bobbysCircuit = new circuits.Circuit();
        var parsed = bobbysCircuit.parse(str1).parse(str2).parse(str3).parse(str4);
        parsed.calculate('d');
        parsed.calculate('e');
 
        expect(parsed.values).to.eql(valuesArray);
    });
    it("Circuit.parse("+str1+").parse("+str2+").parse("+str3+").parse("+str4+").calculate('e') should be '507'", function(){
        var bobbysCircuit = new circuits.Circuit();
        expect(bobbysCircuit.parse(str1).parse(str2).parse(str3).parse(str4).calculate('e')).to.eql(507);
    });
  });*/
  describe("Problem test", function(){
    var strings = ["123 -> x",
                   "456 -> y",
                   "x AND y -> d",
                   "x OR y -> e",
                   "x LSHIFT 2 -> f",
                   "y RSHIFT 2 -> g",
                   "NOT x -> h",
                   "NOT y -> i"];
    var valuesArray = [123, 456, 72, 507, 492, 114, 65412, 65079];
    it("After parsing the instruction strings, we calcule the wire values", function(){
        var bobbysCircuit = new circuits.Circuit();
        strings.map(function(str){
          bobbysCircuit.parse(str);
        });
        bobbysCircuit.wires.map(function(wire){
          var i = bobbysCircuit.calculate(wire);
        });
        expect(bobbysCircuit.values).to.eql(valuesArray);
    });
  });
  describe("weird tests", function(){
    var strings = ["123 -> x",
                   "456 -> y",
                   "1 AND x -> a",
"b -> a",
"123 -> b",
                   "y RSHIFT 15 -> g",
                   "x -> z"];
    //var valuesArray = [123, 456, 72, 507, 492, 114, 65412, 65079];
    it("After parsing the instruction strings, we calcule the wire values", function(){
        var bobbysCircuit = new circuits.Circuit();
        strings.map(function(str){
          bobbysCircuit.parse(str);
        });
        bobbysCircuit.wires.map(function(wire){
          var i = bobbysCircuit.calculate(wire);
        });
        console.log(bobbysCircuit.values);
        console.log(bobbysCircuit.wires);
        //expect(bobbysCircuit.values).to.eql(valuesArray);
    });
  });
});
