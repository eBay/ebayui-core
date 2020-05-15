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
            const { queryByText, getByText } = await render(template, input);
            const statusEl = getByText(/\d+ of \d+/).parentElement;

            expect(statusEl).has.property('tagName', input.a11yStatusTag.toUpperCase());
            expect(statusEl).has.text('1 of 3');
            expect(statusEl).has.attr('aria-live', 'polite');

            input.items.forEach(item => expect(queryByText(item.renderBody.text)).not.to.equal(null));
        });

        it('renders without paddles', async() => {
            const input = assign({}, mock.Discrete_1PerSlide_3Items, { itemsPerSlide: '3' });
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPreviousText)).to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).to.equal(null);
        });

        it('renders without any provided items', async() => {
            const input = mock.Discrete_1PerSlide_0Items;
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPreviousText)).to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).to.equal(null);
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
            const { queryByText, queryByLabelText } = await render(template, input);

            // Status text is only used for discrete carousels.
            expect(queryByText(/\d+ of \d+/)).equals(null);

            // Also it should not have the dot controls.
            expect(queryByLabelText(/go to slide/)).equals(null);

            // Controls will not be rendered by server because server cannot check carousel width
            expect(queryByLabelText(input.a11yPreviousText)).to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).to.equal(null);

            input.items.forEach(item => expect(queryByText(item.renderBody.text)).does.not.equal(null));
        });

        it('renders without any provided items', async() => {
            const input = mock.Continuous_0Items;
            const { queryByLabelText } = await render(template, input);

            expect(queryByLabelText(input.a11yPreviousText)).to.equal(null);
            expect(queryByLabelText(input.a11yNextText)).to.equal(null);
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
