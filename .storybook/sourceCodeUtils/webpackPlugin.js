const cache = require('./cache')
let sourceId = 0
let previousFiles = {}
class SourcePlugin {
  apply(compiler) {
    compiler.hooks.entryOption.tap('Source Code Plugin', () => {
      cache.cleanCache()
    })
    compiler.hooks.emit.tapAsync(
      'Source Code Plugin',
      (compilation, callback) => {
        const data = {
          files: {
            ...previousFiles,
            ...cache.getSources(),
          },
          id: sourceId++,
        }
        previousFiles = data.files
        const sources = JSON.stringify(data)
        cache.cleanCache()
        compilation.assets['rawSources.json'] = {
          source: () => sources,
          size: () => sources.length,
        }
        callback()
      }
    )
  }
}

module.exports = SourcePlugin
