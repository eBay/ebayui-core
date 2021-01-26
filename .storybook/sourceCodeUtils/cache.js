const Highlights = require("highlights");
const { parseFile } = require('../utils');

const highlighter = new Highlights();

var cache = {}

module.exports = {
  register(rawPath, source, compiled) {
    const {fulltagId, title } = parseFile(rawPath);
    const path = `${fulltagId}--${title}`;
    if (!cache[path]) {
      cache[path] = {}
    }
    cache[path][compiled ? 'compiled' : 'raw'] = highlighter.highlightSync({
      fileContents: source,
      sync: "text.marko",
    });
  },
  getSources() {
    return cache
  },
  cleanCache() {
    cache = {}
  },
}
