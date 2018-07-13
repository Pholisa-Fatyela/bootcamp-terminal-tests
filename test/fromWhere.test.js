describe('The fromWhere function',function(){

    it('should return what town a registration number is from',function(){
      assert.equal(fromWhere('CA 123 456'),'Cape Town');
    });
    it('should return what town a registration number is from',function(){
      assert.equal(fromWhere('CY 123 456'),'Bellville');
    });
  });