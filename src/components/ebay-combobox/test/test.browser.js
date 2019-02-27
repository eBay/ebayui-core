// const sinon = require('sinon');
// const expect = require('chai').expect;
// const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given the combobox is in the default state', () => {
    let widget;
    // let root;
    // let ariaControl;
    // let secondOption;
    // let nativeSelect;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        // root = document.querySelector('.combobox');
        // ariaControl = root.querySelector('input');
        // secondOption = root.querySelector('.combobox__options .combobox__option:nth-child(2)');
    });

    afterEach(() => widget.destroy());

    describe('when the down arrow key is pressed', () => {
        // let spy;

        // beforeEach((done) => {
        //     spy = sinon.spy();
        //     widget.on('combobox-change', spy);
        //     ariaControl.focus();
        //     testUtils.triggerEvent(ariaControl, 'keydown', 40);
        //     setTimeout(done);
        // });

        // test('then it should not expand the combobox', () => {
        //     expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        // });

        // test('then it emits the combobox-change event with the correct data', () => {
        //     expect(spy.calledOnce).to.equal(true);
        //     const eventData = spy.getCall(0).args[0];
        //     expect(eventData.currentInput).to.equal('option 1');
        //     expect(eventData.index).to.equal(1);
        //     expect(eventData.selected).to.deep.equal(['2']);
        //     const nativeOption = nativeSelect.options[nativeSelect.selectedIndex].value;
        //     expect(nativeOption).to.equal('2');
        // });
    });

    describe('when the up arrow key is pressed', () => {
        // let spy;

        // beforeEach(() => {
        //     spy = sinon.spy();
        //     widget.on('combobox-change', spy);
        //     testUtils.triggerEvent(ariaControl, 'keydown', 38);
        // });

        // test('then it should not expand the combobox', () => {
        //     expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
        // });

        // test('then it emits the combobox-change event with the correct data', () => {
        //     expect(spy.calledOnce).to.equal(true);
        //     const eventData = spy.getCall(0).args[0];
        //     expect(eventData.index).to.equal(0);
        //     expect(eventData.selected).to.deep.equal(['1']);
        //     const nativeOption = nativeSelect.options[nativeSelect.selectedIndex].value;
        //     expect(nativeOption).to.equal('1');
        // });
    });

    describe('when the option is set programmatically', () => {
        // let spy;

        // beforeEach((done) => {
        //     spy = sinon.spy();
        //     widget.on('combobox-change', spy);
        //     secondOption.selected = true;
        //     setTimeout(done);
        // });

        // test('then it emits the combobox-change event with the correct data', () => {
        //     expect(spy.calledOnce).to.equal(true);
        //     const eventData = spy.getCall(0).args[0];
        //     expect(eventData.index).to.equal(1);
        //     expect(eventData.selected).to.deep.equal(['2']);
        //     const nativeOption = nativeSelect.options[nativeSelect.selectedIndex].value;
        //     expect(nativeOption).to.equal('2');
        // });
    });
});
