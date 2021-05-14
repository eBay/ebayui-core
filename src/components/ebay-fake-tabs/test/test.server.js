const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('fake tabs', () => {
    it('renders fake version with 3 tabs', async () => {
        const input = mock.Fake_3Headings_No_Index;
        const { getByText } = await render(template, input);

        input.tabs.forEach((heading, i) => {
            const headingEl = getByText(heading.renderBody.text);
            expect(headingEl).has.property('parentElement').with.class('fake-tabs__item');
            expect(headingEl).has.attr('href', heading.href);

            if (i === 0) {
                expect(headingEl).has.attr('aria-current', 'page');
            } else {
                expect(headingEl).does.not.have.attr('aria-current');
            }
        });

        const panelEl = getByText(input.renderBody.text);
        expect(panelEl).has.property('parentElement').with.class('fake-tabs__cell');
    });

    it('renders fake version with 3 tabs on the second panel', async () => {
        const input = mock.Fake_3Headings_1Index;
        const { getByText } = await render(template, input);
        input.tabs.forEach((heading, i) => {
            const headingEl = getByText(heading.renderBody.text);

            if (i === 1) {
                expect(headingEl).has.attr('aria-current', 'page');
            } else {
                expect(headingEl).does.not.have.attr('aria-current');
            }
        });
    });

    testPassThroughAttributes(template);
});

describe('tabs-heading', () => {
    describe('when fake', () => {
        testPassThroughAttributes(template, {
            child: {
                name: 'tabs',
                multiple: true,
            },
        });
    });
});
