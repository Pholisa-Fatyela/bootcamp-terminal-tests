let assert = require("assert");
let greet = require("../greet");

describe('The greet function', function(){

    it('should greet Papi correctly', function(){
        assert.strictEqual('Hello, Papi', greet('Papi'));
    });
    it('should greet Pholisa correctly', function(){
        assert.strictEqual('Hello, Pholisa', greet('Pholisa'));
    });

});