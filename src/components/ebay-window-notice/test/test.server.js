const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const assign = require('core-js-pure/features/object/assign');
const template = require('..');
const mock = require('./mock');

use(require('chai-dom'));

describe('window-notice', () => {
    it('renders normal window', async() => {
        const input = mock.Window_Notice;
        const { getByText } = await render(template, input);
        const content = getByText(input.renderBody.text);
        expect(content).has.property('tagName', 'DIV');

        const container = getByText(input.renderBody.text).parentElement;
        expect(container).has.class('window-notice');
        expect(container).does.not.have.class('window-notice--attention');
        expect(container).does.not.have.class('window-notice--fill');

        const title = getByText(input.title.renderBody.text);
        expect(title).has.class('window-notice__title');
        expect(title.parentElement).has.class('window-notice__main');
    });

    it('renders fill window', async() => {
        const input = assign({}, mock.Window_Notice, { fillWindow: true });
        const { getByText } = await render(template, input);
        const container = getByText(input.renderBody.text).parentElement;
        expect(container).has.class('window-notice');
        expect(container).has.class('window-notice--fill');
    });
});
