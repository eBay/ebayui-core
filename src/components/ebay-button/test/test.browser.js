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
});
