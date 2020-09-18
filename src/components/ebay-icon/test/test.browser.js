const { expect, use } = require('chai');
const { render, cleanup } = require('@marko/testing-library');
const template = require('../icons/ebay-add-icon');
const template2 = require('../icons/ebay-arrow-left-icon');
const template3 = require('../icons/ebay-arrow-right-icon');

use(require('chai-dom'));
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

function checkIcon(iconId) {
    const svg = document.body.firstChild.firstChild;
    expect(svg.tagName).to.equal('SVG');

    let iconAdd;
    svg.childNodes.forEach((child) => {
        expect(child.tagName).to.equal('symbol');
        if (child.id === iconId) {
            if (!!iconAdd) {
                throw new Error(`Found multiple ${iconId}, expect only 1.`);
            } else {
                iconAdd = child;
            }
        }
    });
    if (!iconAdd) {
        throw new Error(`${iconId} is not being added into SVG symbols`);
    }
}

describe('rendering an icon in the browser', () => {
    beforeEach(async() => {
        component = await render(template, { a11yText: 'icon' });
    });

    it('should create root SVG', () => {
        expect(document.body.firstChild.hasAttribute('hidden')).to.equal(true);
        expect(() => checkIcon('icon-add')).to.not.throw(Error);
    });

    it('should not have defs tag', () => {
        const icon = component.getByLabelText('icon');

        icon.childNodes.forEach((child) => {
            expect(child.tagName).to.not.equal('DEFS');
        });
    });
});

describe('rendering multiple icons in the browser', () => {
    beforeEach(async() => {
        await render(template, { a11yText: 'icon' });
        await render(template2, { a11yText: 'icon2' });
        await render(template3, { a11yText: 'icon3' });
        // render first template again;
        component = await render(template, { a11yText: 'another icon' });
    });

    it('should create root SVG', () => {
        expect(document.body.firstChild.hasAttribute('hidden')).to.equal(true);
        const svg = document.body.firstChild.firstChild;
        expect(svg.tagName).to.equal('SVG');

        expect(() => checkIcon('icon-add')).to.not.throw(Error);
        expect(() => checkIcon('icon-arrow-right')).to.not.throw(Error);
        expect(() => checkIcon('icon-arrow-left')).to.not.throw(Error);
        // Should have at least 3 icon symbols
        expect(svg.childNodes.length).to.be.greaterThan(2);
    });
});
