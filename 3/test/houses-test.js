var expect = require("chai").expect;
var houses = require("../houses.js");

describe("Santa moves from house to house recording his current and past positions", function() {
  describe("Test santas inital position", function() {
    it("Santas inital position should be 0,0", function() {
      //position test code
      var santa = new houses.Santa();

      expect(santa.pos()).eql([0,0]);
    });
  });
  describe("Test santas move command", function() {
    it(".move() method should throw an error for any string not in the array [^,v,<,>]", function() {
      var santa = new houses.Santa();
      expect(santa.move).to.throw(ReferenceError);
    });
    it("After the move command `^`, santas position should be 0,1", function() {
      var santa = new houses.Santa();
      santa.move('^');
      expect(santa.pos()).eql([0,1]);
    });
    it("After the move command `v`, santas position should be 0,-1", function() {
      var santa = new houses.Santa();
      santa.move('v');
      expect(santa.pos()).eql([0,-1]);
    });
    it("After the move command `<`, santas position should be -1,0", function() {
      var santa = new houses.Santa();
      santa.move('<');
      expect(santa.pos()).eql([-1,0]);
    });
    it("After the move command `>`, santas position should be 1,0", function() {
      var santa = new houses.Santa();
      santa.move('>');
      expect(santa.pos()).eql([1,0]);
    });
  });
  describe("Test list of saved houses", function() {
    it("After zero commands the list of houses should equal [[0,0]]", function() {
      var santa = new houses.Santa();

      expect(santa.list()).eql([[0,0]]);
    });
    it("After `>` command the list of houses should equal [[0,0],[1,0]]", function() {
      var santa = new houses.Santa();
      santa.move('>');
      expect(santa.list()).eql([[0,0],[1,0]]);
    });
    it("After the two commands `><` the list of houses should equal [[0,0],[1,0]] (test with two move commands)", function() {
      var santa = new houses.Santa();
      santa.move('>');
      santa.move('<');
      expect(santa.list()).eql([[0,0],[1,0]]);
    });
    it("After the two commands `><` the list of houses should equal [[0,0],[1,0]] (test with a single tell command)", function() {
      var santa = new houses.Santa();
      santa.tell('><');
      expect(santa.list()).eql([[0,0],[1,0]]);
    });
  });
  describe("Test cases from problem", function() {
    it("`>` delivers presents to 2 houses", function() {
      var santa = new houses.Santa();
      santa.tell('>');
      expect(santa.list().length).eql(2);
    });
    it("`^>v<` delivers presents to 4 houses", function() {
      var santa = new houses.Santa();
      santa.tell('^>v<');
      expect(santa.list().length).eql(4);
    });
    it("`^v^v^v^v^v` delivers presents to 2 houses", function() {
      var santa = new houses.Santa();
      santa.tell('^v^v^v^v^v');
      expect(santa.list().length).eql(2);
    });
  });
  describe("Test cases from problem - part 2", function() {
    it("`^v` delivers presents to 3 houses", function() {
      var data = "^v";
      expect(houses.elfController(data)).eql(3);
    });
    it("`^>v<` delivers presents to 3 houses", function() {
      var data = "^>v<";
      expect(houses.elfController(data)).eql(3);
    });
    it("`^v^v^v^v^v` delivers presents to 11 houses", function() {
      var data = "^v^v^v^v^v";
      expect(houses.elfController(data)).eql(11);
    });
  });
});

