const { expect, use } = require('chai');
const { render } = require('@marko/testing-library');
const { testPassThroughAttributes } = require('../../../common/test-utils/server');
const template = require('../index.marko');
const mock = require('./mock');

use(require('chai-dom'));

it('renders default success-message', async() => {
    const input = mock.Base;
    const { getByRole } = await render(template, input);
    const successMessage = getByRole('region');
    const titleEl = successMessage.firstChild;
    expect(successMessage).to.have.class('success-message');
    expect(successMessage).has.property('tagName', 'SECTION');
    expect(titleEl).has.property('tagName', 'H2');
    expect(titleEl).has.property('id');
    expect(titleEl).to.have.class('success-message__title');
    expect(titleEl.firstChild).to.have.class('success-message__status');
    expect(titleEl.firstChild).has.attribute('aria-label', input.iconA11yText);
    expect(titleEl.lastChild).has.text(input.title);
    expect(successMessage.lastChild).to.have.class('success-message__button');
});

it('renders full screen success-message with h3 for title', async() => {
    const input = mock.Full_TitleAsH3;
    const { getByRole, getByText } = await render(template, input);
    expect(getByRole('region')).to.have.class('success-message--full');
    expect(getByText(input.title).parentElement).has.property('tagName', 'H3');
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole('region');
    }
});
