let fileMather = /([^\/]+)\/examples\/(?:(?:\d+-)?([^\/]+)\/)?\d+-([^\/]+)/;

function parseFile(file) {
    const match = fileMather.exec(file);
    if (match) {
        const [, tag, group, title] = match;
        let fulltag = tag;
        let fulltagId = tag;
        if (group) {
            fulltag = `${tag}/${group}`;
            fulltagId = `${tag}-${group}`;
        }
        return { tag, group, title, fulltag, fulltagId };
    }
    return {};
}

function addRenderBodies(input) {
    if (input && typeof input === 'object') {
        if (Array.isArray(input)) {
            return input.map(addRenderBodies);
        }

        const clone = {};
        for (const key in input) {
            clone[key] = addRenderBodies(input[key]);
        }

        const { renderBody } = clone;
        if (typeof renderBody === 'string') {
            clone.renderBody = (out) => out.html(renderBody);
        }

        return clone;
    }

    return input;
}

module.exports = {
    parseFile,
    addRenderBodies,
};
