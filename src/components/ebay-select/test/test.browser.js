const sinon = require('sinon');
const expect = require('chai').expect;
const mock = require('../mock');
const renderer = require('../');

describe('given the select is in the default state', () => {
    let widget;
    let root;
    let selectElement;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.select');
        selectElement = root.querySelector('select');
    });

    afterEach(() => widget.destroy());

    describe('when the select has been initialized', () => {
        test('then the select options should have a selected state set', () => {
            expect(selectElement['0'].selected).to.equal(true);
            expect(selectElement['1'].selected).to.equal(false);
            expect(selectElement['2'].selected).to.equal(false);
        });
    });

    describe('when the index is set through the selectedIndex attribute', () => {
        const expectedIndex = 1;
        const expectedValue = '2';
        let spy;

        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('select-change', spy);
            root.selectedIndex = expectedIndex;
            setTimeout(done);
        });

        test('then it emits the select-change event with the correct data', () => {
            const eventData = spy.getCall(0).args[0];
            expect(spy.calledOnce).to.equal(true);
            expect(eventData.index).to.equal(expectedIndex);
            expect(eventData.selected).to.deep.equal([expectedValue]);
            expect(root.value).to.equal(expectedValue);
            expect(root.selectedIndex).to.equal(expectedIndex);
            expect(selectElement.value).to.equal(expectedValue);
            expect(selectElement.selectedIndex).to.equal(expectedIndex);
        });
    });

    describe('when the value is set through the value attribute', () => {
        const expectedIndex = 0;
        const expectedValue = '1';
        let spy;

        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('select-change', spy);
            root.value = expectedValue;
            setTimeout(done);
        });

        test('then it emits the select-change event with the correct data', () => {
            const eventData = spy.getCall(0).args[0];
            expect(spy.calledOnce).to.equal(true);
            expect(eventData.index).to.equal(expectedIndex);
            expect(eventData.selected).to.deep.equal([expectedValue]);
            expect(root.value).to.equal(expectedValue);
            expect(root.selectedIndex).to.equal(expectedIndex);
            expect(selectElement.value).to.equal(expectedValue);
            expect(selectElement.selectedIndex).to.equal(expectedIndex);
        });
    });
});
