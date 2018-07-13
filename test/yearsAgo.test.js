describe('The yearsAgo function', function(){
    it('should check how many years ago it was from the current year',function(){
      assert.equal(yearsAgo(1992),26);
    });
  });