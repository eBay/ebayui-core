const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('carousel', () => {
    describe('with discrete items per slide', () => {
        it('renders base version', async() => {
            const input = mock.Discrete_1PerSlide_3Items;
            const { getByText, getByLabelText, getAllByLabelText } = await render(template, input);
            const firstDotLabel = input.a11yCurrentText.replace('{currentSlide}', 1);
            const secondDotLabel = input.a11yOtherText.replace('{slide}', 2);
            const statusEl = getByText(/\d+ of \d+/).parentElement;

            expect(statusEl).has.property('tagName', input.a11yStatusTag.toUpperCase());
            expect(statusEl).has.text('1 of 3');
            expect(statusEl).has.attr('aria-live', 'polite');

            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-describedby', statusEl.id);
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-describedby', statusEl.id);

            expect(getByLabelText(firstDotLabel)).has.attr('aria-describedby', statusEl.id);
            expect(getByLabelText(firstDotLabel)).has.attr('aria-disabled', 'true');

            expect(getByLabelText(secondDotLabel)).has.attr('aria-describedby', statusEl.id);
            expect(getByLabelText(secondDotLabel)).not.has.attr('aria-disabled');

            input.items.forEach(item => expect(() => getByText(item.renderBody.text)).not.to.throw());
            expect(getAllByLabelText(/go to slide/)).has.length(2);
        });

        it('renders no-dots enabled', async() => {
            const input = assign({ noDots: true }, mock.Discrete_1PerSlide_3Items);
            const { getByLabelText } = await render(template, input);

            expect(() => getByLabelText(input.a11yPreviousText)).not.to.throw();
            expect(() => getByLabelText(input.a11yNextText)).not.to.throw();
            expect(() => getByLabelText(/go to slide/)).to.throw(/Unable to find a label/);
        });

        it('renders without any provided items', async() => {
            const input = mock.Discrete_1PerSlide_0Items;
            const { getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
            expect(() => getByLabelText(/go to slide/)).to.throw(/Unable to find a label/);
        });

        describe('with autoplay enabled', () => {
            it('renders base version', async() => {
                const input = mock.Discrete_1PerSlide_3Items_AutoPlay;
                const { getByLabelText } = await render(template, input);

                expect(() => getByLabelText(input.a11yPauseText)).not.to.throw();
            });

            it('renders paused version', async() => {
                const input = assign({ paused: true }, mock.Discrete_1PerSlide_3Items_AutoPlay);
                const { getByLabelText } = await render(template, input);

                expect(() => getByLabelText(input.a11yPlayText)).not.to.throw();
            });
        });
    });

    describe('without items per slide (continuous)', () => {
        it('renders base version', async() => {
            const input = mock.Continuous_6Items;
            const { getByText, getByLabelText } = await render(template, input);

            // Status text is only used for discrete carousels.
            expect(() => getByText(/\d+ of \d+/)).to.throw(/Unable to find an element/);

            // Also it should not have the dot controls.
            expect(() => getByLabelText(/go to slide/)).to.throw(/Unable to find a label/);

            // Controls should not be linked to the status text (slide x of y).
            expect(getByLabelText(input.a11yPreviousText)).not.has.attr('aria-describedby');
            expect(getByLabelText(input.a11yNextText)).not.has.attr('aria-describedby');

            input.items.forEach(item => expect(() => getByText(item.renderBody.text)).not.to.throw());
        });

        it('renders without any provided items', async() => {
            const input = mock.Continuous_0Items;
            const { getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true
        }
    });
});
