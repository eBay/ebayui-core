const expect = require('chai').expect;
const truncate = require('../');
const testText = 'this is very long text that needs to be truncated';

describe('truncate', () => {
    let styleSheet;
    let truncateEl;

    beforeEach(() => {
        truncateEl = document.createElement('div');
        truncateEl.id = 'truncate-test';

        styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
            #truncate-test {
                max-height: 24px;
                width: 50px;
            }
        `;

        document.head.appendChild(styleSheet);
        document.body.appendChild(truncateEl);
    });

    afterEach(() => {
        document.head.removeChild(styleSheet);
        document.body.removeChild(truncateEl);
    });

    it('truncates long text', () => {
        truncateEl.innerHTML = testText;
        truncate({ el: truncateEl });
        const childNodes = truncateEl.childNodes;
        expect(childNodes.length).to.equal(2);
        expect(childNodes[1].textContent.length).to.be.below(testText.length);
        expect(childNodes[0].textContent).to.equal(testText);
    });

    it('does not truncate complex content', () => {
        const testHtml = `<b>${testText}</b>`;
        truncateEl.innerHTML = testHtml;
        truncate({ el: truncateEl });
        expect(truncateEl.innerHTML = testHtml);
    });
});
