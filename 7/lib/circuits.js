function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

var Circuit = function(){
  this.wires = [];
  this.values = [];
  this.sources = [];

  this.parse = function(str){
    var input = str.split(" ");
    switch(input.length){
      case 3:
        //assign source
        var val = parseInt(input[0],10);
        if(isNaN(val)){
          //apparently wires can be assigned values from other wires
          this.add(input[2],null,[[input[0]],["ASSIGN"]]);
        }else{
          this.add(input[2],parseInt(input[0],10),null);
        }
        break;

      case 4:
        //bitwise not
        //this.add(input[3],null,[[input[1]],[input[0]]]);
        //easier to call xor on the value and 65535
        this.add(input[3],null,[[input[1],65535],['XOR']]);
        break;

      case 5:
        //bitwise << >> & |
        if(input[1] == "LSHIFT" || input[1] == "RSHIFT"){
          this.add(input[4],null,[[input[0]],[input[1], parseInt(input[2],10)]]);
        }else{
          this.add(input[4],null,[[input[0],input[2]],[input[1]]]);
        }
        break;
    }
    return this;
  }

  this.add = function(wire, value, wireSource){
    var idx = this.wires.indexOf(wire);
    if(idx < 0){
      this.wires.push(wire);
      this.values.push(value);
      this.sources.push(wireSource);
    }else if(value != null){
      this.values[idx] = value;
    }
  }
 
  this.calculate = function(wire){
    var idx = this.wires.indexOf(wire);
    if(this.values[idx] != null){ return this.values[idx];}
    if(isNumeric(wire)){return parseInt(wire,10);}

    var cmd = this.sources[idx][1][0];
    switch(cmd){
      case "AND":
        var value = this.calculate(this.sources[idx][0][0]) & this.calculate(this.sources[idx][0][1]);
        break;
      case "OR":
        var value = this.calculate(this.sources[idx][0][0]) | this.calculate(this.sources[idx][0][1]);
        break;
      case "XOR":
        var value = this.calculate(this.sources[idx][0][0]) ^ this.calculate(this.sources[idx][0][1]);
        break;
      case "LSHIFT":
        var value = this.calculate(this.sources[idx][0][0]) << this.sources[idx][1][1];
        break;
      case "RSHIFT":
        var value = this.calculate(this.sources[idx][0][0]) >> this.sources[idx][1][1];
        break;
      case "NOT":
        var value = ~ this.calculate(this.sources[idx][0][0]);
        break;
      case "ASSIGN":
        var value = this.calculate(this.sources[idx][0][0]);
        break;
    }

    this.add(wire,value,null);
    return this.calculate(wire);
  }
}

module.exports.Circuit = Circuit;
