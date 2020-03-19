var expect = require('chai').expect;
var module = require('../module.js');
  
describe('The sum() method', function() {
  it('Returns 4 for 2+2', function() {
    var op = new module.Operation(2,2);
    expect(op.sum()).to.equal(4);
  });
  it('Returns 0 for -2+2', function() {
    var op = new module.Operation(-2,2);
    expect(op.sum()).to.equal(0);
  });
});