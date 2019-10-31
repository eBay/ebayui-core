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
            const { queryByText, getByText, getByLabelText, getAllByLabelText } = await render(template, input);
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

            input.items.forEach(item => expect(queryByText(item.renderBody.text)).not.to.equal(null));
            expect(getAllByLabelText(/go to slide/)).has.length(2);
        });

        it('renders without paddles', async() => {
            const input = assign({}, mock.Discrete_1PerSlide_3Items, { itemsPerSlide: '3' });
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPreviousText)).to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).to.equal(null);
            expect(queryByLabelText(/go to slide/)).to.equal(null);
        });

        it('renders no-dots enabled', async() => {
            const input = assign({}, mock.Discrete_1PerSlide_3Items, { noDots: true });
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPreviousText)).not.to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).not.to.equal(null);
            expect(queryByLabelText(/go to slide/)).to.equal(null);

            expect(queryByLabelText(input.a11yPreviousText)).has.class('carousel__control--show');
            expect(queryByLabelText(input.a11yNextText)).has.class('carousel__control--show');
        });

        it('renders autoplay with no-dots', async() => {
            const input = assign({}, mock.Discrete_1PerSlide_3Items_AutoPlay, { noDots: true });
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPauseText)).to.not.equal(null);

            expect(queryByLabelText(input.a11yPreviousText)).does.not.have.class('carousel__control--show');
            expect(queryByLabelText(input.a11yNextText)).does.not.have.class('carousel__control--show');
        });

        it('renders without any provided items', async() => {
            const input = mock.Discrete_1PerSlide_0Items;
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPreviousText)).to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).to.equal(null);
            expect(queryByLabelText(/go to slide/)).to.equal(null);
        });

        describe('with autoplay enabled', () => {
            it('renders base version', async() => {
                const input = mock.Discrete_1PerSlide_3Items_AutoPlay;
                const { queryByLabelText } = await render(template, input);

                expect(queryByLabelText(input.a11yPauseText)).to.not.equal(null);
            });

            it('renders paused version', async() => {
                const input = assign({}, mock.Discrete_1PerSlide_3Items_AutoPlay, { paused: true });
                const { queryByLabelText } = await render(template, input);

                expect(queryByLabelText(input.a11yPlayText)).to.not.equal(null);
            });
        });
    });

    describe('without items per slide (continuous)', () => {
        it('renders base version', async() => {
            const input = mock.Continuous_6Items;
            const { queryByText, queryByLabelText, getByLabelText } = await render(template, input);

            // Status text is only used for discrete carousels.
            expect(queryByText(/\d+ of \d+/)).equals(null);

            // Also it should not have the dot controls.
            expect(queryByLabelText(/go to slide/)).equals(null);

            // Controls should not be linked to the status text (slide x of y).
            expect(getByLabelText(input.a11yPreviousText)).not.has.attr('aria-describedby');
            expect(getByLabelText(input.a11yNextText)).not.has.attr('aria-describedby');

            input.items.forEach(item => expect(queryByText(item.renderBody.text)).does.not.equal(null));
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
