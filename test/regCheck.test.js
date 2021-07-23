let assert = require("assert");
let regCheck = require("../regCheck");

describe('The regCheck function', function(){

    it('should check where the registration number ends with the location identifier', function(){
        assert.strictEqual(regCheck("CY 123 456",'GP'),false);
    });
    it('should check where the registration number ends with the location identifier', function(){
        assert.strictEqual(regCheck("NK 358 254 GP","GP"),true);
    });

});