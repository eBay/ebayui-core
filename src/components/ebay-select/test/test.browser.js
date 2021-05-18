const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the select with 3 options', () => {
    const input = mock.Basic_3Options;
    beforeEach(async () => {
        component = await render(template, input);
    });

    it('then the first option should be selected', () => {
        component.getAllByRole('option').forEach((optionEl, i) => {
            expect(optionEl).has.property('selected', i === 0);
        });
    });

    describe('when the index is set through dom change event', () => {
        beforeEach(async () => {
            const combobox = component.getByRole('combobox');
            combobox.selectedIndex = 1;
            await fireEvent.change(combobox);
        });

        it('then it emits the change event with the correct data', () => {
            const changeEvents = component.emitted('change');
            expect(changeEvents).has.length(1);

            const [[eventArg]] = changeEvents;
            expect(eventArg).has.property('index', 1);
            expect(eventArg).has.property('selected').deep.equal([input.options[1].value]);
        });
    });
});
