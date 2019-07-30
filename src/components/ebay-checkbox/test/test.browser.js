const { expect, use } = require('chai');
const { render, wait, cleanup } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given checkbox button is enabled', () => {
    beforeEach(async() => {
        component = await render(template, { htmlAttributes: { value: 'food' } });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async() => {
            component.getByRole('checkbox').click();
            await wait();
        });

        it('then it emitted the change event', () => {
            const changeEvents = component.emitted('checkbox-change');
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property('value', 'food');
            expect(changeEvent).has.property('checked', true);
        });

        it('then it is checked', () => {
            expect(component.getByRole('checkbox')).has.property('checked', true);
        });
    });
});

describe('given checkbox button is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when checkbox button is clicked', () => {
        beforeEach(async() => {
            component.getByRole('checkbox').click();
            await wait();
        });

        it('then it does not emit the change event', () => {
            expect(component.emitted('checkbox-change')).has.length(0);
        });

        it('then it remains unchecked', () => {
            expect(component.getByRole('checkbox')).has.property('checked', false);
        });
    });
});
