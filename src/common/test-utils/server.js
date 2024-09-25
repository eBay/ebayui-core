import { render } from "@marko/testing-library";
import { it, expect } from "vitest";

let markoCompiler;
let CompileContext;
let compiler;
let Builder;
let isMarko5 = false;

try {
    // v3 paths
    compiler = require("@marko/compiler");
    isMarko5 = true;
    // eslint-disable-next-line no-unused-vars
} catch (e) {
    // v4 paths
    const target = require("marko/env").isDebug ? "src" : "dist";
    markoCompiler = require("marko/compiler");
    CompileContext = require(`marko/${target}/compiler/CompileContext`);
    Builder = require(`marko/${target}/compiler/Builder`);
}

function testPassThroughAttributes(
    template,
    { input, child, getClassAndStyleEl } = {},
) {
    it(`passes through additional html attributes${
        child ? ` from child ${child.name}` : ""
    }`, async () => {
        const testId = "AttributePassthrough";
        const clonedInput = Object.assign({}, input);
        let targetInput = clonedInput;

        if (child) {
            targetInput = Object.assign({}, child.input);
            clonedInput[child.name] = child.multiple ? [targetInput] : child;
        }
        Object.assign(targetInput, {
            htmlAttributes: {
                type: "number",
            },
            "data-testid": testId,
            "data-passed-through": "true",
            // class and style are special attributes
            class: { class1: true, class2: false },
            style: { color: "red" },
        });

        const component = await render(template, clonedInput);
        const passThroughEl = component.getByTestId(testId);
        expect(passThroughEl).toMatchSnapshot();
        const classAndStyleEl = getClassAndStyleEl
            ? getClassAndStyleEl(component)
            : passThroughEl;
        expect(classAndStyleEl).toMatchSnapshot();
    });
}

function getTransformedTemplate(transformer, srcString, componentPath) {
    const { context, templateAST, code } = getTransformerData(
        srcString,
        componentPath,
        {
            output: "html",
        },
    );
    if (code) {
        return code;
    }
    const { prettyPrintAST } = require("@marko/prettyprint");
    context.root = templateAST;
    transformer(templateAST.body.array[0], context, { output: "" });
    return prettyPrintAST(templateAST, { filename: componentPath })
        .replace(/\n/g, "")
        .replace(/\s{4}/g, "");
}

function runTransformer(transformer, srcString, componentPath) {
    const { context, templateAST, code } = getTransformerData(
        srcString,
        componentPath,
        {
            output: "html",
            writeVersionComment: false,
        },
    );
    if (code) {
        return { code };
    }
    transformer(templateAST.body.array[0], context);
    return {
        context,
        el: templateAST.body.array[0],
    };
}
function runMigrateTransformer(transformer, srcString, componentPath) {
    const { context, templateAST, code } = getTransformerData(
        srcString,
        componentPath,
        {
            output: "migrate",
        },
    );
    if (context && templateAST) {
        transformer(templateAST.body.array[0], context);
        return {
            context,
            el: templateAST.body.array[0],
        };
    }
    return { code };
}

function getTransformerData(srcString, componentPath, options) {
    if (compiler) {
        const { code } = compiler.compileSync(
            srcString,
            componentPath,
            options,
        );
        return { code };
    }
    const templateAST = markoCompiler.parseRaw(srcString, componentPath);
    const context = new CompileContext(
        srcString,
        componentPath,
        Builder.DEFAULT_BUILDER,
    );
    return { context, templateAST };
}

export {
    isMarko5,
    runMigrateTransformer,
    runTransformer,
    getTransformedTemplate,
    testPassThroughAttributes,
};
