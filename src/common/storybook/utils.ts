function addRenderBodies(input: any): any {
    if (input && typeof input === "object") {
        if (Array.isArray(input)) {
            return input.map(addRenderBodies);
        }

        const clone: typeof input = {};
        for (const key in input) {
            clone[key] = addRenderBodies(input[key]);
        }

        const { renderBody } = clone;
        if (typeof renderBody === "string") {
            clone.renderBody = (out: any) =>
                out.html ? out.html(renderBody) : out.write(renderBody);
        }

        return clone;
    }

    return input;
}

function buildExtensionTemplate(
    template: Marko.Template,
    code: string,
    args: Record<string, any> = {},
) {
    const builder = (args: Record<string, any>) => ({
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

export { addRenderBodies, buildExtensionTemplate };
