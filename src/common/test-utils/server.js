const markoCompiler = require('marko/compiler');
const { prettyPrintAst } = require('marko-prettyprint');
const { render } = require('@marko/testing-library');
const { expect, use } = require('chai');

use(require('chai-dom'));

let CompileContext;
let Builder;

try {
    // v3 paths
    CompileContext = require('marko/compiler/CompileContext');
    Builder = require('marko/compiler/Builder');
} catch (e) {
    // v4 paths
    const target = require('marko/env').isDebug ? 'src' : 'dist';
    CompileContext = require(`marko/${target}/compiler/CompileContext`);
    Builder = require(`marko/${target}/compiler/Builder`);
}

module.exports = {
    /**
     * Adds a test to assert that a template passes through additional attributes.
     */
    testPassThroughAttributes(template, { input, child, getClassAndStyleEl } = {}) {
        it(
            `passes through additional html attributes${child ? ` from child ${child.name}` : ''}`,
            async() => {
                for (const key of ['*', 'htmlAttributes']) {
                    const testId = 'AttributePassthrough';
                    const clonedInput = Object.assign({}, input);
                    let targetInput = clonedInput;

                    if (child) {
                        targetInput = Object.assign({}, child.input);
                        clonedInput[child.name] = child.multiple ? [targetInput] : child;
                    }

                    Object.assign(targetInput, {
                        [key]: { 'data-testid': testId, 'data-passed-through': 'true' },
                        // class and style are special attributes
                        class: { class1: true, class2: false },
                        style: { color: 'red' }
                    });

                    const component = await render(template, clonedInput);
                    const passThroughEl = component.getByTestId(testId);
                    expect(passThroughEl).has.attr('data-passed-through');

                    const classAndStyleEl = getClassAndStyleEl ? getClassAndStyleEl(component) : passThroughEl;
                    expect(classAndStyleEl).has.class('class1');
                    expect(classAndStyleEl).not.has.class('class2');
                    expect(classAndStyleEl).attr('style', 'color:red');
                }
            }
        );
    },
    getTransformedTemplate(transformer, srcString, componentPath) {
        const { context, templateAST } = getTransformerData(srcString, componentPath);
        context.root = templateAST;
        transformer(templateAST.body.array[0], context);
        return prettyPrintAst(templateAST).replace(/\n/g, '').replace(/\s{4}/g, '');
    },
    runTransformer(transformer, srcString, componentPath) {
        const { context, templateAST } = getTransformerData(srcString, componentPath);
        transformer(templateAST.body.array[0], context);
        return {
            context,
            el: templateAST.body.array[0]
        };
    }
};

function getTransformerData(srcString, componentPath) {
    const templateAST = markoCompiler.parseRaw(
        srcString,
        componentPath
    );
    const context = new CompileContext(
        srcString,
        componentPath,
        Builder.DEFAULT_BUILDER
    );

    return { context, templateAST };
}
