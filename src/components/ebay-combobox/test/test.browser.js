const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given the combobox is in the default state', () => {
    let widget;
    let root;
    let button;
    let ariaControl;
    let secondOption;
    let nativeSelect;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.combobox');
        button = root.querySelector('.combobox__control');
        ariaControl = button.querySelector('input');
        secondOption = root.querySelector('.combobox__options .combobox__option:nth-child(2)');
        nativeSelect = root.querySelector('.combobox__native');
    });

    afterEach(() => widget.destroy());

    describe('when the select has been initialized', () => {
        test('then the select options should have a selected state set', () => {
            expect(nativeSelect['0'].selected).to.equal(true);
            expect(nativeSelect['1'].selected).to.equal(false);
            expect(nativeSelect['2'].selected).to.equal(false);
        });
    });

    describe('when the down arrow key is pressed', () => {
        let spy;

        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('combobox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 40);
            setTimeout(done);
        });

        test('then it should not expand the combobox', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the combobox-change event with the correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.selected).to.deep.equal(['2']);
            const nativeOption = nativeSelect.options[nativeSelect.selectedIndex].value;
            expect(nativeOption).to.equal('2');
        });
    });

    describe('when the up arrow key is pressed', () => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 38);
        });

        test('then it should not expand the combobox', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the combobox-change event with the correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.selected).to.deep.equal(['1']);
            const nativeOption = nativeSelect.options[nativeSelect.selectedIndex].value;
            expect(nativeOption).to.equal('1');
        });
    });

    describe('when the option is set programmatically', () => {
        let spy;

        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('combobox-change', spy);
            secondOption.selected = true;
            setTimeout(done);
        });

        test('then it emits the combobox-change event with the correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.selected).to.deep.equal(['2']);
            const nativeOption = nativeSelect.options[nativeSelect.selectedIndex].value;
            expect(nativeOption).to.equal('2');
        });
    });

    describe('when the button is clicked once', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-expand', spy);
            testUtils.triggerEvent(button, 'click');
        });

        test('then it emits the event from expander-expand', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the button is clicked twice', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-collapse', spy);
            testUtils.triggerEvent(button, 'click');
            testUtils.triggerEvent(button, 'click');
        });

        test('then it emits the event from expander-collapse', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given the combobox is in an expanded state', () => {
    let widget;
    let root;
    let button;
    let ariaControl;
    let secondOption;
    let secondOptionLabel;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.combobox');
        button = root.querySelector('.combobox__control');
        ariaControl = button.querySelector('input');
        secondOption = root.querySelector('.combobox__options .combobox__option:nth-child(2)');
        secondOptionLabel = secondOption.querySelector('span:not(.combobox__status)');
        testUtils.triggerEvent(button, 'click');
    });

    afterEach(() => widget.destroy());

    describe('when an option is clicked', () => {
        let selectSpy;

        beforeEach(() => {
            selectSpy = sinon.spy();
            widget.on('combobox-change', selectSpy);
            testUtils.triggerEvent(secondOption, 'click');
        });

        test('then it emits the combobox-select event with correct data', () => {
            expect(selectSpy.calledOnce).to.equal(true);
            const eventData = selectSpy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.selected).to.deep.equal(['2']);
            expect(eventData.el).to.deep.equal(secondOption);
        });
    });

    describe('when an option is clicked on the label', () => {
        let selectSpy;

        beforeEach(() => {
            selectSpy = sinon.spy();
            widget.on('combobox-change', selectSpy);
            testUtils.triggerEvent(secondOptionLabel, 'click');
        });

        test('then it emits the combobox-select event with correct data', () => {
            expect(selectSpy.calledOnce).to.equal(true);
            const eventData = selectSpy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.selected).to.deep.equal(['2']);
            expect(eventData.el).to.deep.equal(secondOption);
        });
    });

    describe('when the down arrow key is pressed', () => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 40);
        });

        test('then it emits the combobox-change event with the correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.selected).to.deep.equal(['2']);
        });
    });

    describe('when the up arrow key is pressed', () => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 38);
        });

        test('then it emits the combobox-change event with the correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.selected).to.deep.equal(['1']);
        });
    });

    describe('when the escape key is pressed', () => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-collapse', spy);
            testUtils.triggerEvent(root, 'click');
            testUtils.triggerEvent(ariaControl, 'keydown', 27);
        });

        test('then it collapses', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the collapse event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given the combobox is in an disabled state', () => {
    let widget;
    let root;
    let button;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({
            options: mock.options,
            disabled: true
        });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.combobox');
        button = root.querySelector('.combobox__control');
    });

    afterEach(() => widget.destroy());

    describe('when the button is clicked once', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('combobox-expand', spy);
            testUtils.triggerEvent(button, 'click');
        });

        test('then it does not emit the event from expander-expand', () => {
            expect(spy.calledOnce).to.equal(false);
        });
    });

    describe('when the disabled state is changed programmatically', () => {
        beforeEach((done) => {
            root.disabled = false;
            setTimeout(done);
        });

        describe('when the button is clicked once', () => {
            let spy;
            beforeEach(() => {
                spy = sinon.spy();
                widget.on('combobox-expand', spy);
                testUtils.triggerEvent(button, 'click');
            });

            test('then it emits the event from expander-expand', () => {
                expect(spy.calledOnce).to.equal(true);
            });
        });
    });
});
