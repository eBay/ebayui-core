const sinon = require('sinon');
const expect = require('chai').expect;
const testUtils = require('../../../common/test-utils/browser');
const renderer = require('../');
const mock = require('./mock');

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
            beforeEach(() => {
                testUtils.triggerEvent(ariaControl, 'focus');
            });

            test('then it should expand the combobox', () => {
                expect(ariaControl.getAttribute('aria-expanded')).to.equal('true');
            });

            describe('when any character key is pressed', () => {
                let arrowSpy;

                beforeEach(() => {
                    arrowSpy = sinon.spy();
                    widget.on('combobox-input', arrowSpy);
                    testUtils.triggerEvent(ariaControl, 'keyup', 65);
                });

                test('then it should emit a input event', () => {
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
                    let enterSpy;

                    beforeEach((done) => {
                        enterSpy = sinon.spy();
                        widget.on('combobox-select', enterSpy);
                        testUtils.triggerEvent(ariaControl, 'keyup', 13);
                        setTimeout(done);
                    });

                    test('then it should correctly set value for the input', () => {
                        expect(ariaControl.value).to.equal(mock.options[0].text);
                    });

                    test('then it should emit a change event', () => {
                        expect(enterSpy.calledOnce).to.equal(true);
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
                    widget.on('combobox-select', clickSpy);
                    testUtils.triggerEvent(secondOption, 'mousedown');
                    testUtils.triggerEvent(secondOption, 'click');
                });

                test('then it should emit a change event', () => {
                    expect(clickSpy.called).to.equal(true);
                });
            });

            describe('when the escape key is pressed', () => {
                beforeEach(() => {
                    testUtils.triggerEvent(ariaControl, 'keyup', 27);
                });

                test('then it should collapse the combobox', () => {
                    expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
                });
            });
        });
    }
});

describe('given the combobox starts with zero options', () => {
    let widget;
    let root;
    let ariaControl;
    let firstOption;
    let secondOption;

    beforeEach(() => {
        const renderedWidget = renderer.renderSync({ options: mock.zeroOptions });
        widget = renderedWidget.appendTo(document.body).getWidget();
        root = document.querySelector('.combobox');
        ariaControl = root.querySelector('input');
    });

    afterEach(() => widget.destroy());

    describe('when the input receives focus', () => {
        beforeEach(done => {
            testUtils.triggerEvent(ariaControl, 'focus');
            setTimeout(done);
        });

        test('then it should not yet have an aria-expanded attribute', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal(null);
        });

        test('then it should have no options', () => {
            expect(root.querySelectorAll('.combobox__option[role="option"]').length).to.equal(mock.zeroOptions.length);
        });
    });

    describe('after it is rerendered and receives focus', () => {
        beforeEach(done => {
            widget.setProps({ options: mock.options });
            widget.update();
            testUtils.triggerEvent(ariaControl, 'focus');
            setTimeout(done);
            firstOption = root.querySelector('.combobox__options .combobox__option:nth-child(1)');
            secondOption = root.querySelector('.combobox__options .combobox__option:nth-child(2)');
        });

        test('then it should set aria-expanded to true', () => {
            expect(ariaControl.getAttribute('aria-expanded')).to.equal('true');
        });

        test('then it should have options', () => {
            expect(root.querySelectorAll('.combobox__option[role="option"]').length).to.equal(mock.options.length);
        });

        describe('when any character key is pressed', () => {
            let arrowSpy;

            beforeEach(() => {
                arrowSpy = sinon.spy();
                widget.on('combobox-input', arrowSpy);
                testUtils.triggerEvent(ariaControl, 'keyup', 65);
            });

            test('then it should emit a input event', () => {
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
                let enterSpy;

                beforeEach((done) => {
                    enterSpy = sinon.spy();
                    widget.on('combobox-select', enterSpy);
                    testUtils.triggerEvent(ariaControl, 'keyup', 13);
                    setTimeout(done);
                });

                test('then it should correctly set value for the input', () => {
                    expect(ariaControl.value).to.equal(mock.options[0].text);
                });

                test('then it should emit a change event', () => {
                    expect(enterSpy.calledOnce).to.equal(true);
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
                widget.on('combobox-select', clickSpy);
                testUtils.triggerEvent(secondOption, 'mousedown');
                testUtils.triggerEvent(secondOption, 'click');
            });

            test('then it should emit a change event', () => {
                expect(clickSpy.called).to.equal(true);
            });
        });

        describe('when the escape key is pressed', () => {
            beforeEach(() => {
                testUtils.triggerEvent(ariaControl, 'keyup', 27);
            });

            test('then it should collapse the combobox', () => {
                expect(ariaControl.getAttribute('aria-expanded')).to.equal('false');
            });
        });
    });
});
