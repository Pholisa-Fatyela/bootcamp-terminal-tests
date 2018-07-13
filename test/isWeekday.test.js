describe('The isWeekDay function', function(){
    it('should check if it is a week day and return true if it is a weekday', function(){
        assert.equal(isWeekDay("Monday"),true);
    });
    it('should check if it is a week day and return false if it is not a weekday', function(){
        assert.equal(isWeekDay("Sunday"),false);
    });

});