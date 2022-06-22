'use strict';
const fs = require('fs');
module.exports = function (lasso) {
    lasso.dependencies.registerRequireExtension('md', {
        read: async function (path) {
            return `module.exports = ${JSON.stringify(await fs.promises.readFile(path, 'utf-8'))}`;
        },

        getLastModified: function (path, lassoContext, callback) {
            return lassoContext.getFileLastModified(path, callback);
        },
    });
};
