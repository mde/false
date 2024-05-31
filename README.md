## false

[![Build Status](https://travis-ci.org/mde/false.png)](https://travis-ci.org/mde/false)

A JavaScript port of the Unix utility 'false'. Returns the Boolean value `false`

### Overview

This module should be used when you need a function that returns the Boolean
value `false`.

### Installing

```bash
$ npm install false
```

### Usage

Simply require the `false` module. The export is a function which returns the
Boolean value `false`:

```javascript
  var f = require('./false')
    , myFalseValue = f();

console.log(myFalseValue === false); // Logs 'true'
```
### CLI

If you install `false` globally, you can call it appropriately as a CLI command:

```bash
$ npm install false -g
```

You will likely have to use `sudo` to install it globally.

### Tests

Running the tests requires the [Jake JavaScript build
tool](https://github.com/mde/jake). In the root project directory, run the
following:

```bash
$ jake test
```

### Contributing

Please feel free to file bugs or suggest improvements here:

https://github.com/mde/false/issues

