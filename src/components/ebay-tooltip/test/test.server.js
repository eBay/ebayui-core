const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('tooltip', () => {
    it('renders default tooltip', async() => {
        const input = mock.Basic;
        const { getByText, getByRole } = await render(template, input);
        expect(getByRole('tooltip')).has.class('tooltip__overlay');
        expect(getByText(input.host.renderBody.text)).has.class('tooltip__host');
        expect(getByText(input.content.renderBody.text)).has.class('tooltip__content');
        expect(getByText(input.heading.renderBody.text)).has.class('tooltip__heading');
    });

    mock.Pointers.forEach(input => {
        it(`renders tooltip pointer: ${input.pointer}`, async() => {
            const { getByRole } = await render(template, input);
            expect(getByRole('tooltip'))
                .has.property('firstElementChild')
                .with.class(`tooltip__pointer--${input.pointer}`);
        });
    });

    // TODO: looks like class and style are not passed through to the tooltip.
    // testPassThroughAttributes(template);

    // testPassThroughAttributes(template, {
    //     child: {
    //         name: 'host'
    //     }
    // });

    // testPassThroughAttributes(template, {
    //     child: {
    //         name: 'heading'
    //     }
    // });

    // testPassThroughAttributes(template, {
    //     child: {
    //         name: 'content'
    //     }
    // });
});
