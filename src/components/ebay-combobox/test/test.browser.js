const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const mock = require('../mock');
const renderer = require('../');

describe('given the combobox is in the default state', () => {
    let widget;
    let root;
    let ariaControl;
    let firstOption;
    let secondOption;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.options });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.combobox');
        ariaControl = root.querySelector('input');
        firstOption = root.querySelector('.combobox__options .combobox__option:nth-child(1)');
        secondOption = root.querySelector('.combobox__options .combobox__option:nth-child(2)');
    });

    afterEach(() => widget.destroy());

    thenReadyForInteraction();

    describe('after it is rerendered', () => {
        before(() => {
            widget.setStateDirty('test');
            widget.update();
        });

        thenReadyForInteraction();
    });

    function thenReadyForInteraction() {
        describe('when the input receives focus', () => {
            beforeEach((done) => {
                testUtils.triggerEvent(ariaControl, 'focus');
                setTimeout(done);
            });

            test('then it should expand the combobox', () => {
                expect(ariaControl.getAttribute('aria-expanded')).to.equal('true');
            });

            describe('when any character key is pressed', () => {
                let arrowSpy;

                beforeEach(() => {
                    arrowSpy = sinon.spy();
                    widget.on('combobox-change', arrowSpy);
                    testUtils.triggerEvent(ariaControl, 'keyup', 65);
                });

                test('then it should emit a change event', () => {
                    expect(arrowSpy.calledOnce).to.equal(true);
                });
            });

            describe('when the down arrow key is pressed', () => {
                beforeEach(() => {
                    testUtils.triggerEvent(ariaControl, 'keydown', 40);
                });

                test('then it should correctly set aria for the listbox', () => {
                    expect(firstOption.getAttribute('aria-selected')).to.equal('true');
                });

                describe('when the enter key is pressed', () => {
                    let arrowSpy;

                    beforeEach(() => {
                        arrowSpy = sinon.spy();
                        widget.on('combobox-change', arrowSpy);
                        testUtils.triggerEvent(ariaControl, 'keydown', 13);
                        testUtils.triggerEvent(ariaControl, 'keyup', 13);
                    });

                    test('then it should correctly set value for the input', () => {
                        expect(ariaControl.value).to.equal(mock.options[0].text);
                        expect(arrowSpy.calledOnce).to.equal(true);
                    });
                });

                describe('when the down arrow key is pressed a second time', () => {
                    beforeEach(() => {
                        testUtils.triggerEvent(ariaControl, 'keydown', 40);
                    });

                    test('then it should correctly set aria for the listbox', () => {
                        expect(secondOption.getAttribute('aria-selected')).to.equal('true');
                    });
                });
            });

            describe('when any option is clicked', () => {
                let clickSpy;

                beforeEach(() => {
                    clickSpy = sinon.spy();
                    widget.on('combobox-change', clickSpy);
                    testUtils.triggerEvent(secondOption, 'click');
                });

                test('then it should emit a change event', () => {
                    expect(clickSpy.called).to.equal(true);
                });
            });

            describe('when the escape key is pressed', () => {
                beforeEach(() => {
                    testUtils.triggerEvent(ariaControl, 'keydown', 27);
                });

                test('then it should collapse the combobox', () => {
                    expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
                });
            });
        });
    }
});
