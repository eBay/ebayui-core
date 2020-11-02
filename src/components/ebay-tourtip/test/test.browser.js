const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const template = require('..');
const mock = require('./mock');

require('../component-browser').renderer = template._; // Allow re-rendering the split component for testing.
use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the default tourtip', () => {
    const input = mock.Basic;

    beforeEach(async() => {
        component = await render(template, input);
    });

    thenItIsOpen();
    thenItCanBeClosed();

    describe('after it is rerendered', () => {
        beforeEach(async() => {
            await component.rerender(assign({}, input, { disabled: false }));
        });

        thenItIsOpen();
        thenItCanBeClosed();
    });

    function thenItIsOpen() {
        it('then it is open', () => {
            expect(component.getByText(input.host.renderBody.text).parentElement)
                .has.attr('aria-expanded', 'true');
        });
    }

    function thenItCanBeClosed() {
        describe('when the close button is clicked', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByLabelText(input.a11yCloseText));
            });

            it('then it emits the collapse event', () => {
                expect(component.emitted('collapse')).has.length(1);
            });

            it('then it is closed', () => {
                expect(component.getByText(input.host.renderBody.text).parentElement)
                    .has.attr('aria-expanded', 'false');
            });
        });
    }
});
