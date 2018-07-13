describe('The countAllPaarl function',function(){
  
    it('should take in a string of registration numbers and return how many are from Paarl',function(){
      assert.equal(countAllPaarl('CJ 123456, CA 123456, CJ 123456, CA 12353456, CJ 525865, CJ 345586, CA 123456, CA 12456, '),4);
    });
    it('should take in a string of registration numbers and return how many are from Paarl',function(){
      assert.equal(countAllPaarl('CA 123456, CA 123456, CA 123456, CA 12353456, CA 525865, CA 345586, CA 123456, CA 12456, '),0);
    });
  });