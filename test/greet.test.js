let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Papi correctly', function(){
        assert.equal('Hello, Papi', greet('Papi'));
    });
    it('should greet Pholisa correctly', function(){
        assert.equal('Hello, Pholisa', greet('Pholisa'));
    });

});