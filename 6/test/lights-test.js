var expect = require("chai").expect;
var lights = require("../lib/lights.js");

describe("Christmas lights", function() {
  describe("Light object tests", function(){
    it("For a new light Light.isOn() should be should be false", function(){
        var singleLight = new lights.Light();
        expect(singleLight.isOn()).to.be.false;
    });
    it("Light.turnOn().isOn() should be should be true", function(){
        var singleLight = new lights.Light();
        expect(singleLight.turnOn().isOn()).to.be.true;
    });
    it("Light.turnOn().turnOff().isOn() should be should be false", function(){
        var singleLight = new lights.Light();
        expect(singleLight.turnOn().turnOff().isOn()).to.be.false;
    });
    it("Light.toggle().isOn() should be should be true", function(){
        var singleLight = new lights.Light();
        expect(singleLight.toggle().isOn()).to.be.true;
    });
    it("Light.turnOn().toggle().isOn() should be should be false", function(){
        var singleLight = new lights.Light();
        expect(singleLight.turnOn().toggle().isOn()).to.be.false;
    });
  });
  describe("Grid object tests", function(){
    it("A (2,1) grid should be [[0],[0]]", function(){
        var lightGrid = new lights.Grid(2,1);
        expect(lightGrid.grid).to.eql([[0],[0]]);
    });
  });
  describe("Grid parse tests", function(){
    it("Grid.parse() 'turn on 0,0 through 999,999' ", function(){
        var lightGrid = new lights.Grid(1000,1000);
        expect(lightGrid.parse('turn on 0,0 through 999,999').command).to.eql(["turn", "on", "0,0", "through","999,999"]);
    });
    it("Grid.parse() 'turn on 0,0 through 999,999' start equals [0,0]", function(){
        var lightGrid = new lights.Grid(1000,1000);
        expect(lightGrid.parse('turn on 0,0 through 999,999').start).to.eql([0,0]);
    });
    it("Grid.parse() 'turn on 0,0 through 999,999' end equals [999,999]", function(){
        var lightGrid = new lights.Grid(1000,1000);
        expect(lightGrid.parse('turn on 0,0 through 999,999').end).to.eql([999,999]);
    });
  });
  describe("Grid switching tests", function(){
    it("Grid(2,2).parse('turn on 0,0 through 1,0') grid should be [[1,0],[1,0]]", function(){
        var lightGrid = new lights.Grid(2,2);
        lightGrid.parse('turn on 0,0 through 1,0');
        expect(lightGrid.grid).to.eql([[1,0],[1,0]]);
    });
    it("Grid(4,4).parse('turn on 1,1 through 2,2') grid should be [[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]", function(){
        var lightGrid = new lights.Grid(4,4);
        lightGrid.parse('turn on 1,1 through 2,2');
        expect(lightGrid.grid).to.eql([[0,0,0,0],[0,1,1,0],[0,1,1,0],[0,0,0,0]]);
    });
  });
  describe("Grid count tests", function(){
    it("Grid(2,2).parse('turn on 0,0 through 1,1').count() should equal 4", function(){
        var lightGrid = new lights.Grid(2,2);
        lightGrid.parse('turn on 0,0 through 1,0');
        expect(lightGrid.count()).to.eql(2);
    });
    it("Grid(4,4).parse('turn on 1,1 through 2,2').count() should equal 4", function(){
        var lightGrid = new lights.Grid(4,4);
        lightGrid.parse('turn on 1,1 through 2,2');
        expect(lightGrid.count()).to.eql(4);
    });
    it("Grid(4,4).parse('turn on 1,1 through 2,2').parse('toggle 0,0 through 3,3').count() should equal 12", function(){
        var lightGrid = new lights.Grid(4,4);
        lightGrid.parse('turn on 1,1 through 2,2');
        lightGrid.parse('toggle 0,0 through 3,3');
        expect(lightGrid.count()).to.eql(12);
    });
  });
  describe("Grid2 brightness tests", function(){
    it("Grid2(1,1).parse('turn on 0,0 through 0,0') should equal [[1]]", function(){
        var lightGrid = new lights.Grid2(1,1);
        lightGrid.parse('turn on 0,0 through 0,0');
        expect(lightGrid.grid).to.eql([[1]]);
    });
    it("Grid2(1,1).parse('toggle 0,0 through 0,0') should equal [[2]]", function(){
        var lightGrid = new lights.Grid2(1,1);
        lightGrid.parse('toggle 0,0 through 0,0');
        expect(lightGrid.grid).to.eql([[2]]);
    });
    it("Grid2(1,1).parse('turn on 0,0 through 0,0').parse('turn off 0,0 through 0,0') should equal [[0]]", function(){
        var lightGrid = new lights.Grid2(1,1);
        lightGrid.parse('turn on 0,0 through 0,0');
        lightGrid.parse('turn off 0,0 through 0,0');
        expect(lightGrid.grid).to.eql([[0]]);
    });
    it("Grid2(1,1).parse('turn on 0,0 through 0,0').parse('turn off 0,0 through 0,0').parse('turn off 0,0 through 0,0') should equal [[0]]", function(){
        var lightGrid = new lights.Grid2(1,1);
        lightGrid.parse('turn on 0,0 through 0,0');
        lightGrid.parse('turn off 0,0 through 0,0');
        lightGrid.parse('turn off 0,0 through 0,0');
        expect(lightGrid.grid).to.eql([[0]]);
    });
  });
});
