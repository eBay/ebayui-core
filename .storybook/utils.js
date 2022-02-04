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
    addRenderBodies,
};
