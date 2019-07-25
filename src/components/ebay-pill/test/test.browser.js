const { expect, use } = require('chai');
const { render, fireEvent, waitForDomChange: __oldWaitForDomChange, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe.only('given pill is enabled', () => {
    const input = mock.Basic;
    beforeEach(async() => {
        component = await render(template, input);
    });

    it('then it is not pressed', () => {
        expect(component.getByRole('button')).does.not.have.attr('aria-pressed');
    });

    describe('when pill is clicked', () => {
        beforeEach(async () => {
            await waitForDomChange(() => {
                fireEvent.click(component.getByRole('button'));
            });
        });

        it('then it emits the event with correct data', () => {
            expect(component.emitted('button-click')).has.length(1);
        });

        it('then it is pressed', () => {
            expect(component.getByRole('button')).has.attr('aria-pressed', 'true');
        });

        describe('when it is clicked again', () => {
            beforeEach(async() => {
                await waitForDomChange(() => {
                    fireEvent.click(component.getByRole('button'));
                });
            });

            it('then it is not pressed', () => {
                expect(component.getByRole('button')).does.not.have.attr('aria-pressed');
            });
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

describe('given pill is disabled', () => {
    beforeEach(async() => {
        component = await render(template, { disabled: true });
    });

    describe('when pill is clicked', () => {
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

async function waitForDomChange(fn) {
    const change = __oldWaitForDomChange();
    if (fn) await fn();
    await change;
}