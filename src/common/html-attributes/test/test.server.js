import { expect } from 'chai';
import { processHtmlAttributes } from '../';

it('creates attributes object based on html-attributes', () => {
    const input = { htmlAttributes: { b: 2, ariaRole: 'link' }, other: 'other' };
    const htmlAttributes = { b: 2, 'aria-role': 'link', other: 'other' };
    expect(processHtmlAttributes(input, [])).to.deep.equal(htmlAttributes);
});

it('merges htmlAttributes', () => {
    const input = { ariaRole: 'link', htmlAttributes: { b: 2 } };
    const htmlAttributes = { b: 2, 'aria-role': 'link' };
    expect(processHtmlAttributes(input, [])).to.deep.equal(htmlAttributes);
});

it('uses htmlAttributes in case of conflict', () => {
    const input = { ariaRole: 'link', htmlAttributes: { ariaRole: 'button' } };
    const htmlAttributes = { 'aria-role': 'button' };
    expect(processHtmlAttributes(input, [])).to.deep.equal(htmlAttributes);
});

it('should use the ignore list', () => {
    const input = {
        htmlAttributes: { b: 2 },
        dataAttribute: 'something',
        style: 'some style',
        renderBody: () => {},
    };
    const ignoreList = ['style'];
    const htmlAttributes = { b: 2, 'data-attribute': 'something' };
    expect(processHtmlAttributes(input, ignoreList)).to.deep.equal(htmlAttributes);
});
