const expect = require('chai').expect;
const renderer = require('../');

let widget;

function renderAndGetRoot(input) {
    const renderedWidget = renderer.renderSync(input);
    let el = null;

    if (renderedWidget.html) {
        widget = renderedWidget.appendTo(document.body).getWidget();
        el = document.querySelector('.badge');
    } else {
        el = null;
    }

    return el;
}

describe('given a badge with a number', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ number: 5 });
    });
    afterEach(() => widget.destroy());

    test('then the text will equal the input number', () => {
        expect(root.innerText).to.equal('5');
    });
});

describe('given a badge with a number greater than 99', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ number: 150 });
    });
    afterEach(() => widget.destroy());

    test('then the text will truncate', () => {
        expect(root.innerText).to.equal('99+');
    });
});

describe('given a badge with a number which is a string number', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ number: '5' });
    });
    afterEach(() => widget.destroy());

    test('then the text will be ', () => {
        expect(root.innerText).to.equal('5');
    });
});

describe('given a badge with a number which is an invalid string', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ number: 'five' });
    });
    afterEach(() => { if (widget) widget.destroy(); });

    test('then nothing will be rendered', () => {
        expect(root).to.equal(null);
    });
});
