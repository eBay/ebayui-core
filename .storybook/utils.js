const { render } = require('@marko/testing-library');

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
            clone.renderBody = (out) => (out.html ? out.html(renderBody) : out.write(renderBody));
        }

        return clone;
    }

    return input;
}

function buildExtensionTemplate(template, code, args = {}) {
    const builder = (args) => ({
        input: addRenderBodies(args),
        component: template,
    });

    builder.args = Object.assign({}, args);
    builder.parameters = {
        docs: {
            source: {
                code,
            },
        },
    };

    return builder;
}

module.exports = { addRenderBodies, buildExtensionTemplate };
