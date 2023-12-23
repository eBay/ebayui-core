const fs = require("fs");
const Module = require("module");
const originalLoad = Module._load;

require("@babel/register")({
    extensions: [".js", ".ts"],
});

Module._load = (request, parent, isMain) => {
    if (/\?raw$/.test(request)) {
        return "";
    }

    return originalLoad(request, parent, isMain);
};

require.extensions[".md"] = (module, filename) =>
    module._compile(
        `module.exports = ${JSON.stringify(
            fs.readFileSync(filename, "utf-8"),
        )}`,
        filename,
    );
