// import { strictEqual } from "assert";
// import countAllFromTown from "../countAllFromTown";
let assert = require("assert");
let countAllFromTown = require("../countAllFromTown");

describe('The countAllFromTown function',function(){
  it('should take in a string of registration numbers and return how many are from a certain town',function(){

    assert.strictEqual(countAllFromTown('CJ 123456, CA 123456, CJ 123456, CA 12353456, CJ 525865, CJ 345586, CA 123456, CA 12456',"CJ"),4);
  });
  it('should take in a string of registration numbers and return how many are from a certain town',function(){

    assert.strictEqual(countAllFromTown('CJ 123456, CA 123456, CJ 123456, CA 12353456, CJ 525865, CJ 345586, CA 123456, CA 12456',"CY"),0);
  });
});
