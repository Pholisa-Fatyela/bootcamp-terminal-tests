let assert = require("assert");
let findItemsOver20 = require("../findItemsOver20");

describe('The findItemsOver20 function',function(){

    it('should take in a list of objects and return how many items have quantities over 20',function(){
      assert.strictEqual(findItemsOver20([
        {name : 'apples', qty : 9},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'kiwi', qty : 13}
      ]),2);
    });
    it('should take in a list of objects and return how many items have quantities over 20',function(){
      assert.strictEqual(findItemsOver20([
        {name : 'apples', qty : 30},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'grapes', qty : 30},
        {name : 'oranges', qty : 21},
        {name : 'kiwi', qty : 32}
      ]),6);
    });
  });