#!/usr/bin/env node

var f = require('../index')

try {
  if (f() === false) {
      let myFalseValue = f()
      console.log(myFalseValue)
      process.exit(0);
  } else {
      throw new Error('false is not false');
  }
} catch (err) {
  console.log(err.message);
  console.log(err.stack);
  process.exit(1);
}
