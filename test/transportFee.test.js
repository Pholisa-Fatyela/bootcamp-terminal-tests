let assert = require("assert");
let transportFee = require("../transportFee");

describe('The transportFee function',function(){

  it('should return that your transportation cost is R20 if your shift starts in the morning',function(){
    assert.strictEqual(transportFee('morning'),'R20');
  });

  it('should return that your transportation cost is R10 if your shift starts in the afternoon',function(){
    assert.strictEqual(transportFee("afternoon"),'R10');
  });
});
