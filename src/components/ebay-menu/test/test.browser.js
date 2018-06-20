const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given the menu is in the default state', () => {
    let widget;
    let root;
    let button;
    let buttonLabel;

    beforeEach(() => {
        widget = renderer.renderSync({ label: 'label', items: mock.items }).appendTo(document.body).getWidget();
        root = document.querySelector('span.menu');
        button = document.querySelector('.expand-btn');
        buttonLabel = root.querySelector('.expand-btn > span');
    });
    afterEach(() => widget.destroy());

    describe('when the button is clicked once', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-expand', spy);
            testUtils.triggerEvent(button, 'click');
        });

        test('then it emits the marko event from expander-expand', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the button is clicked twice', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-collapse', spy);
            testUtils.triggerEvent(button, 'click');
            testUtils.triggerEvent(button, 'click');
        });

        test('then it emits the marko event from expander-collapse', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when the label property is set', () => {
        const newLabel = 'label2';
        beforeEach(() => {
            root.label = newLabel;
        });

        test('then it rerenders with the new label', (context, done) => {
            setTimeout(() => {
                expect(buttonLabel.innerText.trim()).to.equal(newLabel);
                done();
            }, 10);
        });
    });

    describe('when the expanded property is set to false', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-collapse', spy);
            root.expanded = false;
        });

        test('then it remains collapsed', () => {
            expect(button.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it doesn\'t emit the marko collapse event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when the expanded property is set to true', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-expand', spy);
            root.expanded = true;
        });

        test('then it expands', (context, done) => {
            setTimeout(() => {
                expect(button.getAttribute('aria-expanded')).to.equal('true');
                done();
            }, 10);
        });

        test('then it emits the marko expand event', (context, done) => {
            setTimeout(() => {
                expect(spy.calledOnce).to.equal(true);
                done();
            }, 10);
        });
    });
});

describe('given the menu is in the expanded state', () => {
    let widget;
    let root;
    let button;
    let firstItem;

    beforeEach((done) => {
        widget = renderer.renderSync({ items: mock.items }).appendTo(document.body).getWidget();
        root = document.querySelector('span.menu');
        button = document.querySelector('.expand-btn');
        firstItem = document.querySelector('.menu__item');
        root.expanded = true;
        setTimeout(done);
    });
    afterEach(() => widget.destroy());

    describe('when the expanded property is set to true', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-expand', spy);
            root.expanded = true;
        });

        test('then it remains expanded', () => {
            expect(button.getAttribute('aria-expanded')).to.equal('true');
        });

        test('then it doesn\'t emit the marko expand event', () => {
            expect(spy.called).to.equal(false);
        });
    });

    describe('when the expanded property is set to false', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-collapse', spy);
            widget.update_expanded(false); // FIXME: fails with root.expanded = false
        });

        test('then it collapses', () => {
            expect(button.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the marko collapse event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });

    describe('when an item is clicked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-select', spy);
            testUtils.triggerEvent(firstItem, 'click');
        });

        test('then it emits the menu-select event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });
    });

    describe('when the escape key is pressed', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-collapse', spy);
            testUtils.triggerEvent(firstItem, 'keydown', 27);
            setTimeout(done);
        });

        test('then it collapses', () => {
            expect(button.getAttribute('aria-expanded')).to.equal('false');
        });

        test('then it emits the marko collapse event', () => {
            expect(spy.calledOnce).to.equal(true);
        });
    });
});

describe('given the menu is in the expanded state with radio items', () => {
    let root;
    let widget;
    let firstItem;
    let secondItem;
    let firstItemInner;

    beforeEach((done) => {
        widget = renderer.renderSync({
            expanded: true,
            type: 'radio',
            items: mock.items }).appendTo(document.body).getWidget();
        [firstItem, secondItem] = document.querySelectorAll('.menu__item');
        firstItemInner = firstItem.querySelector('span');
        root = document.querySelector('span.menu');
        root.expanded = true;
        setTimeout(done);
    });
    afterEach(() => widget.destroy());

    describe('when an item is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            testUtils.triggerEvent(firstItem, 'click');
            setTimeout(done);
        });

        test('then it emits the menu-change event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        test('then it selects the item', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when an item is clicked programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            firstItem.checked = true;
            setTimeout(done);
        });

        test('then it emits the menu-change event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        test('then it selects the item', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when an item is set to checked programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            root.checked = 1;
            setTimeout(done);
        });

        test('then it emits the menu-change event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(1);
            expect(eventData.checked).to.deep.equal([1]);
        });

        test('then it selects the item', () => {
            expect(secondItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when an item\'s inner span is clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            testUtils.triggerEvent(firstItemInner, 'click');
            setTimeout(done);
        });

        test('then it emits the menu-change event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        test('then it selects the item', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when an action button is pressed on an item', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            testUtils.triggerEvent(firstItem, 'keydown', 32);
            setTimeout(done);
        });

        test('then it emits the menu-change event with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const eventData = spy.getCall(0).args[0];
            expect(eventData.index).to.equal(0);
            expect(eventData.checked).to.deep.equal([0]);
        });

        test('then it selects the item', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when two items are clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            testUtils.triggerEvent(firstItem, 'click');
            testUtils.triggerEvent(secondItem, 'click');
            setTimeout(done);
        });

        test('then it emits the menu-change events with correct data', () => {
            const firstEventData = spy.getCall(0).args[0];
            const secondEventData = spy.getCall(1).args[0];
            expect(spy.calledTwice).to.equal(true);
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(1);
            expect(secondEventData.checked).to.deep.equal([1]);
        });

        test('then it only selects the second item', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('false');
            expect(secondItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when two items are clicked programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            firstItem.checked = true;
            secondItem.checked = true;
            setTimeout(done);
        });

        test('then it emits the menu-change events with correct data', () => {
            const firstEventData = spy.getCall(0).args[0];
            const secondEventData = spy.getCall(1).args[0];
            expect(spy.calledTwice).to.equal(true);
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(1);
            expect(secondEventData.checked).to.deep.equal([1]);
        });

        test('then it only selects the second item', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('false');
            expect(secondItem.getAttribute('aria-checked')).to.equal('true');
        });
    });
});

describe('given the menu is in the expanded state with checkbox items', () => {
    let root;
    let widget;
    let firstItem;
    let secondItem;

    beforeEach((done) => {
        widget = renderer.renderSync({
            expanded: true,
            type: 'checkbox',
            items: mock.items }).appendTo(document.body).getWidget();
        [firstItem, secondItem] = document.querySelectorAll('.menu__item');
        root = document.querySelector('span.menu');
        root.expanded = true;
        setTimeout(done);
    });
    afterEach(() => widget.destroy());

    describe('when two items are clicked', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            testUtils.triggerEvent(firstItem, 'click');
            testUtils.triggerEvent(secondItem, 'click');
            setTimeout(done);
        });

        test('then it emits the menu-change events with correct data', () => {
            const firstEventData = spy.getCall(0).args[0];
            const secondEventData = spy.getCall(1).args[0];
            expect(spy.calledTwice).to.equal(true);
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(1);
            expect(secondEventData.checked).to.deep.equal([0, 1]);
        });

        test('then it selects both items', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('true');
            expect(secondItem.getAttribute('aria-checked')).to.equal('true');
        });
    });

    describe('when an item is checked and then unchecked', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            testUtils.triggerEvent(firstItem, 'click');
            testUtils.triggerEvent(firstItem, 'click');
        });

        test('then it emits the menu-change events with correct data', () => {
            const firstEventData = spy.getCall(0).args[0];
            const secondEventData = spy.getCall(1).args[0];
            expect(spy.calledTwice).to.equal(true);
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(0);
            expect(secondEventData.checked).to.deep.equal([]);
        });

        test('then the item is unchecked', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('false');
        });
    });

    describe('when an item is checked programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            firstItem.checked = true;
            setTimeout(done);
        });

        test('then it emits the menu-change events with correct data', () => {
            const firstEventData = spy.getCall(0).args[0];
            expect(spy.calledOnce).to.equal(true);
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
        });

        test('then the item is checked', (context, done) => {
            setTimeout(() => {
                expect(firstItem.getAttribute('aria-checked')).to.equal('true');
                done();
            }, 10);
        });
    });

    describe('when an item is checked and then unchecked programmatically', () => {
        let spy;
        beforeEach(() => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            firstItem.checked = true;
            firstItem.checked = false;
        });

        test('then it emits the menu-change events with correct data', () => {
            const firstEventData = spy.getCall(0).args[0];
            const secondEventData = spy.getCall(1).args[0];
            expect(spy.calledTwice).to.equal(true);
            expect(firstEventData.index).to.equal(0);
            expect(firstEventData.checked).to.deep.equal([0]);
            expect(secondEventData.index).to.equal(0);
            expect(secondEventData.checked).to.deep.equal([]);
        });

        test('then the item is unchecked', (context, done) => {
            setTimeout(() => {
                expect(firstItem.getAttribute('aria-checked')).to.equal('false');
                done();
            }, 10);
        });
    });

    describe('when two items are checked programmatically', () => {
        let spy;
        beforeEach((done) => {
            spy = sinon.spy();
            widget.on('menu-change', spy);
            root.setCheckedList([0, 1]);
            setTimeout(done);
        });

        test('then it emits the menu-change events with correct data', () => {
            expect(spy.calledOnce).to.equal(true);
            const firstEventData = spy.getCall(0).args[0];
            expect(firstEventData.indexes).to.deep.equal([0, 1]);
            expect(firstEventData.checked).to.deep.equal([0, 1]);
        });

        test('then the items are checked', () => {
            expect(firstItem.getAttribute('aria-checked')).to.equal('true');
            expect(secondItem.getAttribute('aria-checked')).to.equal('true');
        });
    });
});
