import { expect, use } from 'chai';
import chaiDom from 'chai-dom';
import { composeStories } from '@storybook/marko/dist/testing';
import { render, fireEvent, cleanup, waitFor } from '@marko/testing-library';
import * as stories from '../tooltip.stories';
const pointerStyles = require('./location-styles.json');

const Pointers = Object.keys(pointerStyles);

const { Standard } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

const renderBodyText = 'View options';

describe('given the default tooltip', () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    describe('when the host element is hovered', () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it('then it emits the expand event', async () => {
            await waitFor(() => expect(component.emitted('expand')).has.length(1));
        });

        describe('when the host element loses hover', () => {
            beforeEach(async () => {
                await fireEvent.mouseLeave(component.getByText(renderBodyText).parentElement);
            });

            it('then it emits the collapse event', async () => {
                await waitFor(() => expect(component.emitted('collapse')).has.length(1));
            });
        });

        describe('when the escape key is pressed', () => {
            beforeEach(async () => {
                await fireEvent.keyDown(component.getByText(renderBodyText).parentElement, {
                    key: 'Escape',
                    keyCode: 27,
                });
            });

            it('then it emits the collapse event', async () => {
                await waitFor(() => expect(component.emitted('collapse')).has.length(1));
            });
        });
    });
});

describe('given the a custom aligned tooltip', () => {
    beforeEach(async () => {
        component = await render(Standard, {
            styleTop: '20px',
            styleLeft: '20px',
        });
    });

    describe('when the host element is hovered', () => {
        beforeEach(async () => {
            await fireEvent.mouseEnter(component.getByText(renderBodyText));
        });

        it('then it sets the overlay styles correctly', () => {
            const overlay = component.getByText(renderBodyText).nextElementSibling;
            expect(overlay.style.transform).to.equal('');
            expect(overlay.style.left).to.equal('20px');
            expect(overlay.style.top).to.equal('20px');
            expect(overlay.style.right).to.equal('');
            expect(overlay.style.bottom).to.equal('');
        });
    });
});

Pointers.forEach((pointer) => {
    describe(`given the tooltip with pointer ${pointer}`, () => {
        beforeEach(async () => {
            component = await render(Standard, { pointer });
        });

        describe('when the host element is hovered', () => {
            beforeEach(async () => {
                await fireEvent.mouseEnter(component.getByText(renderBodyText));
            });

            it('then it sets the overlay styles correctly', () => {
                const overlay = component.getByText(renderBodyText).nextElementSibling;
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
