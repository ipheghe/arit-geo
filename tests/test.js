const assert = require('chai').assert;
const myApp = require ('../src/main.js');

describe('Arithmetic Calculations', function() {
  describe('handle valid input', function() {
    it('should return Arithmetic when the input is valid', function() {
      assert.deepEqual(myApp.aritGeo([3,6,9,12,15]),'Arithmetic');
    });
    it('should return Geometric when the input is valid', function() {
      assert.deepEqual(myApp.aritGeo([3,9,27,81]),'Geometric');
    });
    it('should return Arithmetic when the input is valid', function() {
      assert.deepEqual(myApp.aritGeo([-2,-7,-12,-17]),'Arithmetic');
    });
    it('should return Geometric when the input is valid', function() {
      assert.deepEqual(myApp.aritGeo([4,16,64]),'Geometric');
    });
    it('should return -1 when the input is neither Arithmetic or Geometric', function() {
      assert.equal(myApp.aritGeo([2,7,7,8]),-1);
    });
    it('should return -1 when the input is neither Arithmetic or Geometric', function() {
      assert.equal(myApp.aritGeo([1,3,5,10]),-1);
    });
    it('should return Arithmetic when the input is valid', function() {
      assert.equal(myApp.aritGeo([8,16,24,32,40,48,56]),"Arithmetic");
    });
    it('should return -1 when the input value is [2,4]', function() {
      assert.equal(myApp.aritGeo([2,4]),-1);
    });
  });
});

describe('Arithmetic Calculations', function() {
  describe('handle invalid input', function() {
    it('should return 0 when the input is an empty array', function() {
      assert.equal(myApp.aritGeo([]),0);
    });
    it('should return invalid input when the input is of type string', function() {
      assert.equal(myApp.aritGeo("demo"),"Invalid input");
    });
    it('should return invalid input when the input is of type {}', function() {
      assert.equal(myApp.aritGeo({}),"Invalid input");
    });
    it('should return only numbers are allowed if one of the elements is a string', function() {
      assert.equal(myApp.aritGeo([4,16,64,"hello"]),'only numbers are allowed');
    });
  });
});
