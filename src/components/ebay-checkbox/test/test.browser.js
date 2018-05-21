const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

let widget;

function renderAndGetRoot(input) {
    widget = renderer.renderSync(input).appendTo(document.body).getWidget();
    return document.querySelector('.checkbox');
}

describe('given checkbox button is enabled', () => {
    let root;
    let input;
    beforeEach(() => {
        root = renderAndGetRoot({ '*': { value: 'food' } });
        input = root.querySelector('.checkbox__control');
    });
    afterEach(() => widget.destroy());

    describe('when checkbox button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('checkbox-select', spy);
            input.click();
        });

        test('then it emits the event', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.originalEvent instanceof Event).to.equal(true);
            expect(eventData.value).to.equal('food');
            expect(eventData.checked).to.equal(true);
        });
    });
});

describe('given checkbox button is disabled', () => {
    let root;
    beforeEach(() => {
        root = renderAndGetRoot({ disabled: true });
    });
    afterEach(() => widget.destroy());

    describe('when checkbox button is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('checkbox-select', spy);
            testUtils.triggerEvent(root, 'click');
        });

        test('then it doesn\'t emit the event', () => {
            expect(spy.called).to.equal(false);
        });
    });
});
