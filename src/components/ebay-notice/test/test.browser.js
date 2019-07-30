const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the dismissable page notice', () => {
    const input = mock.Page_Dismissible;

    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is visible in the dom', () => {
        expect(() => component.queryByLabelText(input.a11yHeadingText)).to.not.throw();
    });

    describe('when the dismiss button is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByLabelText(input.a11yCloseText));
        });

        it('then it is removed from the DOM', async() => {
            expect(component.queryAllByLabelText(input.a11yHeadingText)).has.length(0);
        });

        it('then it emits the close event', () => {
            expect(component.emitted('notice-close')).has.length(1);
        });
    });
});
