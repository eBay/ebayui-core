const fs = require('fs');
require.extensions['.md'] = (module, filename) =>
    module._compile(
        `module.exports = ${JSON.stringify(fs.readFileSync(filename, 'utf-8'))}`,
        filename
    );
