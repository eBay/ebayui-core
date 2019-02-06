const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given the listbox is in the default state', () => {
    let widget;
    let root;
    let ariaControl;
    let secondOption;
    let nativeSelect;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.listbox');
        ariaControl = root.querySelector('.listbox__control');
        secondOption = root.querySelector('.listbox__options .listbox__option:nth-child(2)');
        nativeSelect = root.querySelector('.listbox__native');
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
            widget.on('listbox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 40);
            setTimeout(done);
        });

        test('then it should not expand the listbox', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the listbox-change event with the correct data', () => {
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
            widget.on('listbox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 38);
        });

        test('then it should not expand the listbox', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the listbox-change event with the correct data', () => {
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
            widget.on('listbox-change', spy);
            secondOption.selected = true;
            setTimeout(done);
        });

        test('then it emits the listbox-change event with the correct data', () => {
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
            widget.on('listbox-expand', spy);
            testUtils.triggerEvent(ariaControl, 'click');
        });

        test('then it emits the event from expander-expand', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the button is clicked twice', () => {
        let spy;

        beforeEach(() => {
            spy = sinon.spy();
            widget.on('listbox-collapse', spy);
            testUtils.triggerEvent(ariaControl, 'click');
            testUtils.triggerEvent(ariaControl, 'click');
        });

        test('then it emits the event from expander-collapse', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given the listbox is in an expanded state', () => {
    let widget;
    let root;
    let ariaControl;
    let secondOption;
    let secondOptionText;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.listbox');
        ariaControl = root.querySelector('.listbox__control');
        secondOption = root.querySelector('.listbox__options .listbox__option:nth-child(2)');
        secondOptionText = secondOption.querySelector('span:not(.listbox__status)');
        testUtils.triggerEvent(ariaControl, 'click');
    });

    afterEach(() => widget.destroy());

    describe('when an option is clicked', () => {
        let selectSpy;

        beforeEach(() => {
            selectSpy = sinon.spy();
            widget.on('listbox-change', selectSpy);
            testUtils.triggerEvent(secondOption, 'click');
        });

        test('then it emits the listbox-select event with correct data', () => {
            expect(selectSpy.calledOnce).to.equal(true);
            const eventData = selectSpy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.selected).to.deep.equal(['2']);
            expect(eventData.el).to.deep.equal(secondOption);
        });
    });

    describe('when an option is clicked on the text', () => {
        let selectSpy;

        beforeEach(() => {
            selectSpy = sinon.spy();
            widget.on('listbox-change', selectSpy);
            testUtils.triggerEvent(secondOptionText, 'click');
        });

        test('then it emits the listbox-select event with correct data', () => {
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
            widget.on('listbox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 40);
        });

        test('then it emits the listbox-change event with the correct data', () => {
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
            widget.on('listbox-change', spy);
            testUtils.triggerEvent(ariaControl, 'keydown', 38);
        });

        test('then it emits the listbox-change event with the correct data', () => {
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
            widget.on('listbox-collapse', spy);
            testUtils.triggerEvent(ariaControl, 'click');
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

describe('given the listbox is in an disabled state', () => {
    let widget;
    let root;
    let ariaControl;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({
            options: mock.options,
            disabled: true
        });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.listbox');
        ariaControl = root.querySelector('.listbox__control');
    });

    afterEach(() => widget.destroy());

    describe('when the button is clicked once', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('listbox-expand', spy);
            testUtils.triggerEvent(ariaControl, 'click');
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
                widget.on('listbox-expand', spy);
                testUtils.triggerEvent(ariaControl, 'click');
            });

            test('then it emits the event from expander-expand', () => {
                expect(spy.calledOnce).to.equal(true);
            });
        });
    });
});
