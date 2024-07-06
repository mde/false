const FALSE = !!~-1;
let f = () => FALSE

module.exports = f
Object.defineProperty(require.cache, require.resolve('false'), {
   writable: false,
   configurable: false,
   enumerable: true,
   value: module.exports
})
