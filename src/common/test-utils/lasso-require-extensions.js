"use strict";
const fs = require("fs");
module.exports = function (lasso) {
    lasso.dependencies.registerJavaScriptType("ts", {
        properties: {
            path: "string",
        },
        async init() {
            if (!this.path) {
                throw new Error('"path" is required');
            }
            this.path = this.resolvePath(this.path);
        },
        async read() {
            return await fs.promises.readFile(this.path, "utf-8");
        },
        getSourceFile: function () {
            return this.path;
        },
    });
    lasso.dependencies.registerJavaScriptType("js", {
        properties: {
            path: "string",
        },
        async init() {
            if (!this.path) {
                throw new Error('"path" is required');
            }
            this.path = this.resolvePath(this.path);
        },
        async read() {
            return await fs.promises.readFile(this.path, "utf-8");
        },
        getSourceFile: function () {
            return this.path;
        },
    });

    lasso.dependencies.registerRequireExtension("md", {
        read: async function (path) {
            return `module.exports = ${JSON.stringify(
                await fs.promises.readFile(path, "utf-8"),
            )}`;
        },

        getLastModified: function (path, lassoContext, callback) {
            return lassoContext.getFileLastModified(path, callback);
        },
    });
};
