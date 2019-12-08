const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given filter is enabled', () => {
    const input = mock.Basic;
    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is not selected', () => {
        expect(component.getByRole('button')).does.not.have.attr('aria-pressed');
    });

    describe('when filter is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByRole('button'));
        });

        it('then it emits the event with correct data', () => {
            const clickEvents = component.emitted('filter-click');
            expect(clickEvents).has.length(1);
            const [[clickEventArg]] = clickEvents;
            expect(clickEventArg).has.property('originalEvent');
            expect(clickEventArg).has.property('selected', true);
        });

        it('then it is selected', () => {
            expect(component.getByRole('button')).has.attr('aria-pressed', 'true');
        });

        describe('when it is clicked again', () => {
            beforeEach(async() => {
                await fireEvent.click(component.getByRole('button'));
            });

            it('then it is not selected', () => {
                expect(component.getByRole('button')).does.not.have.attr('aria-pressed');
            });
        });
    });
});

describe('given filter is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when filter is clicked', () => {
        beforeEach(async() => {
            await fireEvent.click(component.getByRole('button'));
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('filter-click')).has.length(0);
        });
    });
});
