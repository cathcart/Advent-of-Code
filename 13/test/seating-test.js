var expect = require("chai").expect;
var fs = require("fs");
var seating = require("../lib/seating.js");

describe("Seating puzzle", function() {

  describe("Problem case", function(){
    var file = "test.dat";
    var str = fs.readFileSync(file, 'ascii')
    var happy = new seating.Seating();
    happy.parse(str);
    var peopleArray = ['Alice', 'Bob', 'Carol', 'David'];
    var happiness = 330;
    it("Seating.parse("+str+").people should give "+peopleArray, function(){
        expect(happy.people).to.eql(peopleArray);
    });
    it("Seating.totalHappiness("+peopleArray+") should be "+happiness, function(){
        expect(happy.totalHappiness(peopleArray)).to.eql(happiness);
    });
    it("Seating.simulatedAnnealingMax() should give the optimum seating to be "+peopleArray, function(){
        var optSeating = happy.simulatedAnnealingMax(peopleArray);
        expect(optSeating).to.eql(peopleArray);
    });
    it("Seating.simulatedAnnealingMax() should give the optimum happiness to be "+happiness, function(){
        var optSeating = happy.simulatedAnnealingMax(peopleArray);
        //expect(optSeating).to.eql(peopleArray);
        expect(happy.totalHappiness(optSeating)).to.eql(happiness);
    });/*
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
    });*/
  });
});
