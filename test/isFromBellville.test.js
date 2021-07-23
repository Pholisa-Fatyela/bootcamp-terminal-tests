let assert = require("assert");
let isFromBellville = require("../isFromBellville");

describe('The isFromBellville function', function(){

    it('should return true if registration number is from Bellville', function(){
      assert.strictEqual(isFromBellville("CY 358 254"),true);
    });
    it('should return false if registration number is not from Bellville', function(){
      assert.strictEqual(isFromBellville("CA 358 254"),false);
    });
  
  });