
var f = require('../index')
  , assert = require("assert")
  , tests;

tests = {
  'test that false returns the Boolean value `false`': function () {
    assert.strictEqual(false, f());
  }
};

module.exports = tests;
