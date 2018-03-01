const expect = require('chai').expect;
const processHtmlAttributes = require('../');

test('creates attributes object based on inputs', () => {
    const input = { '*': { b: 2, ariaRole: 'link' } };
    const htmlAttributes = { b: 2, 'aria-role': 'link' };
    expect(processHtmlAttributes(input)).to.deep.equal(htmlAttributes);
});
