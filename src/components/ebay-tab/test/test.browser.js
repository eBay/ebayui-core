const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given tabs with first item selected', () => {
    let widget;
    let secondItem;

    beforeEach(() => {
        widget = renderer.renderSync({ items: mock.items }).appendTo(document.body).getWidget();
        secondItem = document.querySelectorAll('.tabs__item')[1];
    });
    afterEach(() => widget.destroy());

    describe('when the second item is clicked once', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('tab-select', spy);
            testUtils.triggerEvent(secondItem, 'click');
        });

        test('then it emits the select event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});
