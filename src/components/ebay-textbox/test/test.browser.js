const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');

let widget;

describe('given an input textbox', () => {
    let root;
    let input;
    beforeEach(() => {
        widget = renderer.renderSync({ value: 'val' }).appendTo(document.body).getWidget();
        root = document.querySelector('.textbox');
        input = root.querySelector('input');
    });
    afterEach(() => widget.destroy());

    ['change', 'input', 'focus', 'blur', 'keydown'].forEach(eventName => {
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

describe('given a disabled input textbox', () => {
    let root;
    let input;

    beforeEach(() => {
        widget = renderer.renderSync({ value: 'val', disabled: true }).appendTo(document.body).getWidget();
        root = document.querySelector('.textbox');
        input = root.querySelector('input');
    });

    afterEach(() => widget.destroy());

    ['change', 'input', 'focus', 'blur', 'keydown'].forEach(eventName => {
        describe(`when native event is fired: ${eventName}`, () => {
            let spy;

            beforeEach(() => {
                spy = sinon.spy();
                widget.on(`textbox-${eventName}`, spy);
                testUtils.triggerEvent(input, eventName);
            });

            test('then it does not emit the event', () => {
                expect(spy.calledOnce).to.equal(false);
            });
        });
    });
});

describe('given an input textbox with floating label', () => {
    let root;
    let input;
    let label;
    beforeEach(() => {
        widget = renderer.renderSync({ 'floatingLabel': 'Email address' }).appendTo(document.body).getWidget();
        root = document.querySelector('.textbox');
        input = root.querySelector('input');
        label = root.querySelector('label');
        testUtils.triggerEvent(window, 'load');
    });
    afterEach(() => widget.destroy());

    describe('when the input is focused', () => {
        test('then the inline class is removed', () => {
            expect(label.classList.contains('floating-label__label--inline')).to.equal(true);
            testUtils.triggerEvent(input, 'focus');
            expect(label.classList.contains('floating-label__label--inline')).to.equal(false);
        });
    });

    describe('when the input is blurred', () => {
        test('then the inline class is added', () => {
            label.classList.remove('floating-label__label--inline');
            expect(label.classList.contains('floating-label__label--inline')).to.equal(false);
            testUtils.triggerEvent(input, 'blur');
            expect(label.classList.contains('floating-label__label--inline')).to.equal(true);
        });
    });

    describe('when the component is updated/re-rendered', () => {
        let updateSpy;

        beforeEach(() => {
            updateSpy = sinon.spy();
            widget.on('textbox-floating-label-init', updateSpy);
            widget.setProps({ 'floatingLabel': 'Email address', test: 1 });
            widget.update();
        });

        test('it should send a textbox floating label init event', () => {
            expect(updateSpy.calledOnce).to.equal(true);
        });
    });
});
