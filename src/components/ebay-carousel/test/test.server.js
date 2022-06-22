import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const { testPassThroughAttributes } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('carousel', () => {
    describe('with discrete items per slide', () => {
        it('renders base version', async () => {
            const input = mock.discrete1PerSlide3Items;
            const { queryByText, getByRole } = await render(template, input);

            expect(getByRole('group')).to.have.attr('aria-roledescription');

            input.items.forEach((item) =>
                expect(queryByText(item.renderBody.text)).not.to.equal(null)
            );
        });

        describe('with hidden scrollbar', () => {
            it('renders', async () => {
                const input = Object.assign({}, mock.discrete1PerSlide3Items, {
                    hiddenScrollbar: true,
                });
                const { getByRole } = await render(template, input);

                expect(getByRole('group')).to.have.class('carousel--hidden-scrollbar');
            });
        });

        it('renders without any provided items', async () => {
            const input = mock.discrete1PerSlide0Items;
            const { getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });

        describe('with autoplay enabled', () => {
            it('renders base version', async () => {
                const input = mock.discrete1PerSlide3ItemsAutoPlay;
                const { queryByLabelText } = await render(template, input);

                expect(queryByLabelText(input.a11yPauseText)).to.not.equal(null);
            });

            it('renders paused version', async () => {
                const input = Object.assign({}, mock.discrete1PerSlide3ItemsAutoPlay, {
                    paused: true,
                });
                const { queryByLabelText } = await render(template, input);

                expect(queryByLabelText(input.a11yPlayText)).to.not.equal(null);
            });
        });
    });

    describe('without items per slide (continuous)', () => {
        it('renders base version', async () => {
            const input = mock.continuous6Items;
            const { queryByText, queryByLabelText, getByLabelText } = await render(template, input);

            // Also it should not have the dot controls.
            expect(queryByLabelText(/go to slide/)).equals(null);

            // Controls should not be linked to the status text (slide x of y).
            expect(getByLabelText(input.a11yPreviousText)).not.has.attr('aria-describedby');
            expect(getByLabelText(input.a11yNextText)).not.has.attr('aria-describedby');

            input.items.forEach((item) =>
                expect(queryByText(item.renderBody.text)).does.not.equal(null)
            );
        });

        it('renders without any provided items', async () => {
            const input = mock.continuous0Items;
            const { getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).has.attr('aria-disabled', 'true');
            expect(getByLabelText(input.a11yNextText)).has.attr('aria-disabled', 'true');
        });
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true,
        },
    });
});
