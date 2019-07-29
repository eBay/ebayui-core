const { expect, use } = require('chai');
const { render, fireEvent, cleanup } = require('@marko/testing-library');
const mock = require('./mock');
const pointerStyles = require('./location-styles.json');
const template = require('..');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe('given the default tooltip', () => {
    const input = mock.Basic;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the host element is hovered', () => {
        beforeEach(() => {
            fireEvent.mouseEnter(component.getByText(input.host.renderBody.text));
        });

        it('then it emits the tooltip-expand event', () => {
            expect(component.emitted('tooltip-expand')).has.length(1);
        });

        describe('when the host element loses hover', () => {
            beforeEach(() => {
                fireEvent.mouseLeave(component.getByText(input.host.renderBody.text).parentElement);
            });

            it('then it emits the tooltip-collapse event', () => {
                expect(component.emitted('tooltip-collapse')).has.length(1);
            });
        });
    });
});

describe('given the a custom aligned tooltip', () => {
    const input = mock.Custom_Pointer;

    beforeEach(async() => {
        component = await render(template, input);
    });

    describe('when the host element is hovered', () => {
        beforeEach(() => {
            fireEvent.mouseEnter(component.getByText(input.host.renderBody.text));
        });

        it('then it sets the overlay styles correctly', () => {
            const overlay = component.getByText(input.host.renderBody.text).nextElementSibling;
            expect(overlay.style.transform).to.equal('');
            expect(overlay.style.left).to.equal('20px');
            expect(overlay.style.top).to.equal('20px');
            expect(overlay.style.right).to.equal('');
            expect(overlay.style.bottom).to.equal('');
        });
    });
});

mock.Pointers.forEach(input => {
    const { pointer } = input;

    describe(`given the tooltip with pointer ${pointer}`, () => {
        beforeEach(async() => {
            component = await render(template, input);
        });

        describe('when the host element is hovered', () => {
            beforeEach(() => {
                fireEvent.mouseEnter(component.getByText(input.host.renderBody.text));
            });

            it('then it sets the overlay styles correctly', () => {
                const overlay = component.getByText(input.host.renderBody.text).nextElementSibling;
                const overlayStyle = overlay.style;
                const expectedStyles = pointerStyles[pointer];
                expect(overlayStyle).has.property('transform', expectedStyles.overlayTransform);
                expect(overlayStyle).has.property('top', expectedStyles.overlayTop);
                expect(overlayStyle).has.property('left', expectedStyles.overlayLeft);
                expect(overlayStyle).has.property('right', expectedStyles.overlayRight);
                expect(overlayStyle).has.property('bottom', expectedStyles.overlayBottom);
            });
        });
    });
});
