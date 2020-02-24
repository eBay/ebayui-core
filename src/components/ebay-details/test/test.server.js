const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const mock = require('./mock');
const template = require('..');

use(require('chai-dom'));

describe('details', () => {
    it('renders basic version', async() => {
        const input = mock.Default_Details;
        const { getByText } = await render(template, input);
        expect(getByText(input.text)).has.class('details__label');
        expect(getByText(input.renderBody.text)).has.property('tagName', 'P');
    });

    it('renders in open state', async() => {
        const input = mock.Open_Details;
        const { getByText, getByTestId } = await render(template, input);
        expect(getByText(input.text)).has.class('details__label');
        expect(getByText(input.renderBody.text)).has.property('tagName', 'P');
        expect(getByTestId('test')).has.property('open', true);
    });

    it('renders left-to-right', async() => {
        const input = Object.assign({}, mock.Default_Details, { rtl: true });
        const { getByTestId } = await render(template, input);
        expect(getByTestId('test')).has.property('dir', 'rtl');
    });

    it('renders small version', async() => {
        const input = Object.assign({}, mock.Default_Details, { size: 'small' });
        const { getByTestId } = await render(template, input);
        expect(getByTestId('test').firstChild).has.class('details__summary--small');
    });

    it('renders center version', async() => {
        const input = Object.assign({}, mock.Default_Details, { type: 'center' });
        const { getByTestId } = await render(template, input);
        expect(getByTestId('test').firstChild).has.class('details__summary--center');
    });

    testPassThroughAttributes(template);
});
