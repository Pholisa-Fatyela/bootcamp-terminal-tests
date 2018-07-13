describe('The countRegNumber function', function(){
    it('should take a string of registration numbers and count how many there are', function(){
        assert.equal(countRegNumber("NK 358 254 GP,CK 256365,CA 235252"),3);
    });
    it('should take a string of registration numbers and count how many there are', function(){
        assert.equal(countRegNumber("NK 358 254 GP,CK 256365,CA 235252,CK 205 489,CA 835 658"),5);
    });
});