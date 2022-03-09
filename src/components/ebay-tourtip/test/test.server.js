import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import template from '..';
import * as mock from './mock';
const { testEventsMigrator } = require('../../../common/test-utils/server');

use(require('chai-dom'));

describe('tourtip', () => {
    it('renders default tourtip', async () => {
        const input = mock.Basic;
        const { getByText, getByRole } = await render(template, input);
        expect(getByRole('region')).has.class('tourtip__overlay');
        expect(getByText(input.host.renderBody.text))
            .has.property('parentElement')
            .with.class('tourtip__host');
        expect(getByText(input.content.renderBody.text)).has.class('tourtip__content');
        expect(getByText(input.heading.renderBody.text)).has.class('tourtip__heading');
    });
    testEventsMigrator(
        require('../migrator'),
        { event: 'tooltip', component: 'tourtip' },
        ['collapse'],
        'src/components/ebay-tourtip/index.marko'
    );

    // TODO: looks like class and style are not passed through to the tourtip.
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
