const expect = require('chai').expect;
const elementScroll = require('../');

describe('element-scroll', () => {
    const contentDiv = document.createElement('div');

    for (let index = 0; index < 10; index += 1) {
        const innerDiv = `<div class="item${index}" style="height: 50px">content</div>`;
        contentDiv.innerHTML += innerDiv;
    }

    const fifthItemEl = contentDiv.querySelectorAll('.item5')[0];
    const secondItemEl = contentDiv.querySelectorAll('.item2')[0];

    before(() => {
        document.body.appendChild(contentDiv);
        contentDiv.setAttribute('style', 'max-height:100px; overflow-y: auto;');
    });

    after(() => {
        document.body.removeChild(contentDiv);
    });

    test('scrolls the parent so the child element below the view is visible', () => {
        elementScroll.scroll(fifthItemEl);
        expect(contentDiv.scrollTop)
            .to.equal((fifthItemEl.offsetTop + fifthItemEl.offsetHeight) - contentDiv.offsetHeight);
    });

    test('scrolls the parent so the child element above the view is visible', () => {
        contentDiv.scrollTop = fifthItemEl.offsetTop;
        elementScroll.scroll(secondItemEl);
        expect(contentDiv.scrollTop).to.equal(secondItemEl.offsetTop);
    });
});
