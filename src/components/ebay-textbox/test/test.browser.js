const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

let widget;

describe('given an input textbox', () => {
    let root;
    let input;
    beforeEach(() => {
        widget = renderer.renderSync({ '*': { value: 'val' } }).appendTo(document.body).getWidget();
        root = document.querySelector('.textbox');
        input = root.querySelector('input');
    });
    afterEach(() => widget.destroy());

    ['change', 'input', 'focus', 'blur'].forEach(eventName => {
        describe(`when native event is fired: ${eventName}`, () => {
            let spy;
            beforeEach(() => {
                spy = sinon.spy();
                widget.on(`textbox-${eventName}`, spy);
                testUtils.triggerEvent(input, eventName);
            });

            test('then it emits the event', () => {
                expect(spy.calledOnce).to.equal(true);
                const eventData = spy.getCall(0).args[0];
                expect(eventData.value).to.equal('val');
                testUtils.testOriginalEvent(spy);
            });
        });
    });
});
