var expect = require("chai").expect;
var distance = require("../lib/distance.js");

describe("Travelling santa puzzle", function() {

/*  describe("test Distance.Parse()", function(){
    var str = "London to Dublin = 464\nLondon to Belfast = 518\nDublin to Belfast = 141";
    var citiesArray = ['London', "Dublin", "Belfast"];
    it("Distance.parse("+str+").cities should be "+citiesArray, function(){
        var travel = new distance.Distance();
        travel.parse(str)
        expect(travel.cities).to.eql(citiesArray);
    });
  });
*/
  describe("Problem case", function(){
    var str = "London to Dublin = 464\nLondon to Belfast = 518\nDublin to Belfast = 141";
    var citiesArray = ['London', "Dublin", "Belfast"];
    var shortDistance = 605;/*
    it("Distance.parse("+str+").simulatedAnnealing() should give the shortest route to be "+citiesArray, function(){
        var travel = new distance.Distance();
        travel.parse(str)
        var optRoute = travel.simulatedAnnealing();
        //console.log(travel.totalDistance(citiesArray));
        expect(optRoute).to.eql(citiesArray);
    });*/
    var str = "London to Dublin = 464\nLondon to Belfast = 518\nDublin to Belfast = 141";
    var citiesArray = ['Dublin', "London", "Belfast"];
    var totalDistance = 982;
    it("Distance.parse("+str+").totalDistance("+citiesArray+") should be "+totalDistance, function(){
        var travel = new distance.Distance();
        travel.parse(str)
        expect(travel.totalDistance(citiesArray)).to.eql(totalDistance);
    });
    it("Shortest distance should be "+shortDistance, function(){
        var travel = new distance.Distance();
        travel.parse(str)
        var optRoute = travel.simulatedAnnealing();
        //console.log(travel.totalDistance(citiesArray));
        expect(travel.totalDistance(optRoute)).to.eql(shortDistance);
    });
  });

});
