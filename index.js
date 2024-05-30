let False = require('false-value')
let f = () => False

module.exports = f
Object.defineProperty(require.cache, require.resolve('false'), {
   writable: false,
   configurable: false,
   enumerable: true,
   value: module.exports
})
