const { expect, use } = require('chai');
const { render, cleanup } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given checkbox button is enabled', () => {
    const input = {
        type: 'infotip',
        tooltipId: 'fakeID-1',
        a11yCloseText: 'Close',
        heading: {},
        content: {}
    };

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the close button is clicked', () => {
        beforeEach(() => {
            component.getByLabelText(input.a11yCloseText).click();
        });

        it('then it emits the marko event from button click', () => {
            expect(component.emitted('overlay-close')).has.length(1);
        });
    });
});
