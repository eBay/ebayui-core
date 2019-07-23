const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given button is enabled', () => {
    beforeEach(async() => {
        component = await render(template);
    });

    describe('when button is clicked', () => {
        beforeEach(() => {
            fireEvent.click(component.getByRole('button'));
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('button-click')).has.length(1);
        });
    });

    describe('when escape key is pressed', () => {
        beforeEach(() => {
            fireEvent.keyDown(component.getByRole('button'), {
                key: 'Escape',
                charCode: 27
            });
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('button-escape')).has.length(1);
        });
    });
});

describe('given button is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when button is clicked', () => {
        beforeEach(() => {
            fireEvent.click(component.getByRole('button'));
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('button-click')).has.length(0);
        });
    });

    describe('when escape key is pressed', () => {
        beforeEach(() => {
            fireEvent.keyDown(component.getByRole('button'), {
                key: 'Escape',
                charCode: 27
            });
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('button-escape')).has.length(0);
        });
    });
});
