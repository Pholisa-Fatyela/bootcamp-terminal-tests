describe('The transportFee function',function(){

  it('should return that your transportation cost is R20 if your shift starts in the morning',function(){
    assert.equal(transportFee('morning'),'R20');
  });

  it('should return that your transportation cost is R10 if your shift starts in the afternoon',function(){
    assert.equal(transportFee("afternoon"),'R10');
  });
});
