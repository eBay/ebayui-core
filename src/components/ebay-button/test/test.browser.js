const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

let widget;

function renderAndGetRoot(input) {
    widget = renderer.renderSync(input).appendTo(document.body).getWidget();
    return document.querySelector('.btn');
}

// TODO: spy on lasso-ed emitAndFire?

describe('given button is enabled', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot();
    });
    afterEach(() => widget.destroy());

    describe('when button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'click');
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });

    describe('when button is clicked via action key', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'keydown', 32);
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });

    describe('when escape key is pressed', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-escape', spy);
            testUtils.triggerEvent(root, 'keydown', 27);
        });

        test('then it emits the event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            testUtils.testOriginalEvent(spy);
        });
    });
});

describe('given button is disabled', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ disabled: true });
    });
    afterEach(() => widget.destroy());

    describe('when button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-click', spy);
            testUtils.triggerEvent(root, 'click');
        });

        test('then it doesn\'t emit the event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when escape key is pressed', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('button-escape', spy);
            testUtils.triggerEvent(root, 'keydown', 27);
        });

        test('then it doesn\'t emit the event', () => {
            expect(spy.called).to.equal(false);
        });
    });
});

describe('given pill button', () => {
    let root;
    const content = 'Lots of text that should be truncated at 2 lines';
    const styles = 'style="max-height:36px;white-space: normal"'; // remove this once pill comes from skin
    const bodyHtml = `<span class="btn__cell"><span ${styles}>${content}</span></span>`;
    beforeEach(() => {
        root = renderAndGetRoot({
            pill: true,
            style: 'width:80px',
            renderBody: out => out.write(bodyHtml)
        });
    });
    afterEach(() => widget.destroy());

    describe('when should be truncated', () => {
        test('then it is truncated', () => {
            expect(root.querySelector('*[aria-hidden]').textContent.slice(-3)).to.equal('...');
        });
    });
});
