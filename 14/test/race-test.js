var expect = require("chai").expect;
var race = require("../lib/race.js");

describe("Reindeer racing puzzle", function() {

  describe("test Reindeer()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.";
    var name = "Comet";
    var speed = 14
    var comet = new race.Reindeer(str);
    it("Reindeer.setup("+str+").name should give "+name, function(){
      expect(comet.name).to.eql(name);
    });
    it("Reindeer.setup("+str+").maxSpeed should give "+speed, function(){
      expect(comet.maxSpeed).to.eql(speed);
    });
  });
  describe("test Race().parse()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.";
    var ans = [["Comet",14,10,127]];
    var test = new race.Race().parse(str);
    it("Race.parse("+str+").entries should give "+ans, function(){
      expect(test.entries).to.eql(ans);
    });
  });
  describe("test Race().distanceCovered()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.";
    var entry = ["Comet",14,10,127];
    var ans = 14;
    var test = new race.Race().parse(str);
    it("Race.parse("+str+").distanceCovered([],1) should give "+ans, function(){
      expect(test.distanceCovered(entry,1)).to.eql(ans);
    });
  });
  describe("test Race().distanceCovered()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.";
    var entry = ["Comet",14,10,127];
    var ans = 140;
    var test = new race.Race().parse(str);
    it("Race.parse("+str+").distanceCovered([],10) should give "+ans, function(){
      expect(test.distanceCovered(entry,10)).to.eql(ans);
    });
  });
  describe("test Race().distanceCovered()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.";
    var entry = ["Comet",14,10,127];
    var ans = 140;
    var test = new race.Race().parse(str);
    it("Race.parse("+str+").distanceCovered([],11) should give "+ans, function(){
      expect(test.distanceCovered(entry,11)).to.eql(ans);
    });
  });
  describe("test Race().winningDistance()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.\nDancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.";
    var ans = 1120;
    var test = new race.Race().parse(str);
    var time = 1000
    it("Race.parse("+str+").winningDistance("+time+") should give "+ans, function(){
      expect(test.winningDistance(time)).to.eql(ans);
    });
  });
  describe("test Race().totalPoints()", function(){
    var str = "Comet can fly 14 km/s for 10 seconds, but then must rest for 127 seconds.\nDancer can fly 16 km/s for 11 seconds, but then must rest for 162 seconds.";
    var ans = 689;
    var test = new race.Race().parse(str);
    var time = 1000;
    it("Race.parse("+str+").winningPoints("+time+") should give "+ans, function(){
      expect(test.winningPoints(time)).to.eql(ans);
    });
  });
});
