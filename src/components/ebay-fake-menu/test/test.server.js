const assign = require('core-js-pure/features/object/assign');
const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const testUtils = require('../../../common/test-utils/server');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('fake-menu', () => {
    it('renders base version', async() => {
        const input = mock.Basic_2Items;
        const { getByText } = await render(template, input);

        input.items.forEach(item => {
            expect(getByText(item.renderBody.text).closest('.fake-menu__item'))
                .has.attr('href', item.href);
        });
    });

    it('renders with reverse=true', async() => {
        const input = assign({ reverse: true }, mock.Basic_2Items);
        const { getByText } = await render(template, input);
        expect(getByText(input.items[0].renderBody.text).closest('.fake-menu__menu--reverse'))
            .does.not.equal(null);
    });

    it('renders with fix-width=true', async() => {
        const input = assign({ fixWidth: true }, mock.Basic_2Items);
        const { getByText } = await render(template, input);
        expect(getByText(input.items[0].renderBody.text).closest('.fake-menu__menu--fix-width'))
            .does.not.equal(null);
    });

    it('renders with separators', async() => {
        const input = mock.Separator_4Items;
        const { queryByText, getAllByRole } = await render(template, input);
        const separators = getAllByRole('separator');
        input.items.forEach((item) => {
            if (item._isSeparator) {
                const menuItemEl = separators.shift();
                const textEl = queryByText(item.renderBody.text);
                expect(textEl).to.equal(null);
                expect(menuItemEl).has.class('fake-menu__separator');
            }
        });
    });

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            name: 'items',
            multiple: true
        }
    });
});
