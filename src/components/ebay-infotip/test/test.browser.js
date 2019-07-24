const { expect, use } = require('chai');
const { render, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the default infotip', () => {
    const input = mock.WithContent;

    beforeEach(async() => {
        component = await render(template, input);
    });

    thenItCanBeOpenAndClosed();

    describe('when it is rerendered', () => {
        beforeEach(async() => await component.rerender(input));
        thenItCanBeOpenAndClosed();
    });

    function thenItCanBeOpenAndClosed() {
        describe('when the host element is clicked', () => {
            beforeEach(() => {
                component.getByLabelText(input.ariaLabel).click();
            });

            test('then it emits the tooltip-expand event', () => {
                expect(component.emitted('tooltip-expand')).has.length(1);
            });

            test('then it is expanded', () => {
                expect(component.getByLabelText(input.ariaLabel)).has.attr('aria-expanded', 'true');
            });

            describe('when the host element is clicked a second time to close', () => {
                beforeEach(() => {
                    component.getByLabelText(input.ariaLabel).click();
                });
    
                test('then it emits the tooltip-collapse event', () => {
                    expect(component.emitted('tooltip-collapse')).has.length(1);
                });

                test('then it is collapsed', () => {
                    expect(component.getByLabelText(input.ariaLabel)).does.not.have.attr('aria-expanded', 'true');
                });
            });
        });
    }
});
