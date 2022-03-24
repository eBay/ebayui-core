const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const { pressKey } = require('../../../common/test-utils/browser');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given button is enabled', () => {
    beforeEach(async () => {
        component = await render(template, mock.Basic_3Items);
    });

    describe('when button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText('button'));
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('click')).has.length(1);
        });
    });

    describe('when escape key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getByText('button'), {
                key: 'Escape',
                keyCode: 27,
            });
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('escape')).has.length(1);
        });
    });
    describe('when menu is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText('menu'));
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('expand')).has.length(1);
        });

        describe('when menu is clicked again', () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText('menu'));
            });

            it('then it emits the event with correct data', () => {
                expect(component.emitted('collapse')).has.length(1);
            });
        });
    });
});

describe('given button is disabled', () => {
    beforeEach(async () => {
        component = await render(
            template,
            Object.assign({}, mock.Basic_3Items, { disabled: true })
        );
    });

    describe('when button is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText('button'));
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('click')).has.length(0);
        });
    });

    describe('when escape key is pressed', () => {
        beforeEach(async () => {
            await pressKey(component.getByText('button'), {
                key: 'Escape',
                keyCode: 27,
            });
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('escape')).has.length(0);
        });
    });
    describe('when menu is clicked', () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText('menu'));
        });

        it('then it does not emit the event', () => {
            expect(component.emitted('expand')).has.length(0);
            expect(component.emitted('collapse')).has.length(0);
        });
    });
});
