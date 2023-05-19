const fs = require('fs');

module.exports = function myPlugin(lasso, config) {
    lasso.dependencies.registerJavaScriptType('ts', {
        // Declare which properties can be passed to the dependency type
        properties: {
            path: 'string',
        },

        // Validation checks and initialization based on properties:
        async init(context) {
            if (!this.path) {
                throw new Error('"path" is required');
            }

            // NOTE: resolvePath can be used to resolve a provided relative path to a full path
            this.path = this.resolvePath(this.path);
        },

        // Read the resource:
        async read(context) {
            const src = await fs.promises.readFile(this.path, { encoding: 'utf8' });
            return myCompiler.compile(src);
            // NOTE: A stream can also be returned
        },

        // getSourceFile is optional and is only used to determine the last modified time
        // stamp and to give the output file a reasonable name when bundling is disabled
        getSourceFile: function () {
            return this.path;
        },
    });
};
