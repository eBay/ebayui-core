import { expect, use } from 'chai';
import { render } from '@marko/testing-library';
import { testPassThroughAttributes } from '../../../common/test-utils/server';
import template from '..';
import * as mock from './mock';

use(require('chai-dom'));

describe('details', () => {
    it('renders basic version', async () => {
        const input = mock.Default_Details;
        const { getByText } = await render(template, input);
        expect(getByText(input.text)).has.class('details__label');
        expect(getByText(input.renderBody.text)).has.property('tagName', 'P');
        expect(getByText(input.text).closest('details')).has.property('open', false);
        expect(getByText(input.renderBody.text).closest('details')).has.property('open', false);
    });

    it('renders as div version', async () => {
        const input = Object.assign({}, mock.Default_Details, { as: 'div' });
        const { getByText } = await render(template, input);
        expect(getByText(input.text)).has.class('details__label');
        expect(getByText(input.renderBody.text)).has.property('tagName', 'DIV');
    });

    it('renders in open state', async () => {
        const input = mock.Open_Details;
        const { getByText } = await render(template, input);
        expect(getByText(input.text)).has.class('details__label');
        expect(getByText(input.renderBody.text)).has.property('tagName', 'P');
        expect(getByText(input.text).closest('details')).has.property('open', true);
        expect(getByText(input.renderBody.text).closest('details')).has.property('open', true);
    });

    it('renders small version', async () => {
        const input = Object.assign({}, mock.Default_Details, { size: 'small' });
        const { getByText } = await render(template, input);
        expect(getByText(input.text).closest('summary')).has.class('details__summary--small');
    });

    it('renders center version', async () => {
        const input = Object.assign({}, mock.Default_Details, { alignment: 'center' });
        const { getByText } = await render(template, input);
        expect(getByText(input.text).closest('summary')).has.class('details__summary--center');
    });

    testPassThroughAttributes(template);
});
