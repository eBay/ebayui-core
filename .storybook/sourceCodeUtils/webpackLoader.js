const cache = require('./cache')

module.exports = function sourceLoader(source) {
  const opts = this.query || {}
  const { root = '', compiled } = opts
  const path = this.resourcePath
  if (!root || path.match(root)) {
    cache.register(
      path.substr(root.length).replace(/^\//, ''),
      source,
      compiled
    )
  }
  // if it was a test file we don't want to execute it
  return path.match('.test.') && compiled ? '' : source
}
