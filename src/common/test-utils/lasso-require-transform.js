"use strict";
module.exports = {
    id: __filename,
    stream: false,
    createTransform() {
        return function removeRaw(code) {
            return code.replace(/\.marko\?raw/g, ".marko");
        };
    },
};
