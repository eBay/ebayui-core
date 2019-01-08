const expect = require('chai').expect;
const multilineEllipsis = require('../');

describe('multiline-ellipsis', () => {
    const contentDiv = document.createElement('div');
    contentDiv.setAttribute('style', 'height: 50px; width: 180px;');
    contentDiv.innerHTML = 'Pariatur est ut nisi sint voluptate in nostrud amet dolore ullamco ex anim';
    let spans;

    before(() => {
        document.body.appendChild(contentDiv);
        multilineEllipsis.truncate(contentDiv);
        spans = contentDiv.querySelectorAll('span');
    });

    after(() => {
        document.body.removeChild(contentDiv);
    });

    test('adds two spans for accessibility', () => {
        expect(spans.length).to.equal(2);
        expect(spans[0].getAttribute('aria-hidden')).to.equal('true');
        expect(spans[1].className.indexOf('clipped')).to.not.equal(-1);
    });

    test('adds an ellipsis character to the end of the content', () => {
        expect(spans[0].innerText.slice(-1)).to.equal('…');
    });
});
