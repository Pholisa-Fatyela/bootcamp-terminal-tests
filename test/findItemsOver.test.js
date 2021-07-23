let assert = require("assert");
let findItemsOver = require("../findItemsOver");

describe('The findItemsOver function',function(){
    it('should take in a list of objects and return how many items over the threshold',function(){
      assert.strictEqual(findItemsOver([
        {name : 'apples', qty : 9},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      ],10),2);
    });
    it('should take in a list of objects and return how many items over the threshold',function(){
      assert.strictEqual(findItemsOver([
        {name : 'apples', qty : 9},
        {name : 'pears', qty : 37},
        {name : 'bananas', qty : 27},
        {name : 'apples', qty : 3},
      ],4),3);
    });
  });