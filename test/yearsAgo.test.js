let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe('The yearsAgo function', function(){
    it('should check how many years ago it was from the current year',function(){
      assert.strictEqual(yearsAgo(1992),29);
    });
  });