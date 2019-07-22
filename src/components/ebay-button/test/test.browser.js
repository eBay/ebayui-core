const { render, fireEvent } = require('@marko/testing-library');
const { expect } = require('../../../common/test-utils/browser');
const template = require('..');

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

        test('then it emits the event with correct data', () => {
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

        test('then it emits the event with correct data', () => {
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

        test('then it does not emit the event', () => {
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

        test('then it does not emit the event', () => {
            expect(component.emitted('button-escape')).has.length(0);
        });
    });
});
