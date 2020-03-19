var expect = require('chai').expect;
var script = require('../fs.js');
var fs = require('fs');

describe('The path reader', function() {
    it('Should return, that it is a directory', function() {
      expect(script.check("node_modules")).to.equal(1);
    });
    it('Should returns file contents', function() {
        expect(script.check("test/test.js")).to.equal(fs.readFileSync("test/test.js", 'utf8'));
    });
    it('Should return, that don\'t exists', function() {
        expect(script.check("nothing")).to.equal(0);
    });
});