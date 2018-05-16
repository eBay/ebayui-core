const expect = require('chai').expect;
const bodyScroll = require('../');
const { body } = document;

describe('body-scroll', () => {
    const contentDiv = document.createElement('div');
    contentDiv.innerHTML += '<br/>'.repeat(1000);

    before(() => {
        window.scrollTo(0, 0);
        // Ensure the document can scroll.
        document.body.appendChild(contentDiv);
    });

    after(() => {
        document.body.removeChild(contentDiv);
    });

    afterEach(() => {
        window.scrollTo(0, 0);
    });

    test('applies correct styles when at top of the page', () => {
        expect(body.getAttribute('style')).to.equal(null);
        bodyScroll.prevent();
        expect(body.getAttribute('style'))
            .to.contain('overflow:hidden')
            .and.to.contain('position:fixed')
            .and.to.not.contain('margin-top')
            .and.to.not.contain('margin-left');

        bodyScroll.restore();
        expect(body.getAttribute('style')).to.equal(null);
    });

    test('applies correct styles when scrolled', () => {
        window.scrollTo(0, 10);
        expect(body.getAttribute('style')).to.equal(null);
        bodyScroll.prevent();
        expect(body.getAttribute('style'))
            .to.contain('overflow:hidden')
            .and.to.contain('position:fixed')
            .and.to.contain('margin-top:-10px')
            .and.to.not.contain('margin-left');

        bodyScroll.restore();
        expect(body.getAttribute('style')).to.equal(null);
    });

    test('preserves existing inline body styles', () => {
        expect(body.getAttribute('style')).to.equal(null);

        const initialStyleText = 'color:green';
        body.setAttribute('style', initialStyleText);
        bodyScroll.prevent();
        expect(body.getAttribute('style'))
            .to.contain(initialStyleText)
            .and.to.contain('overflow:hidden');

        bodyScroll.restore();
        expect(body.getAttribute('style')).to.equal(initialStyleText);

        body.removeAttribute('style');
    });
});
