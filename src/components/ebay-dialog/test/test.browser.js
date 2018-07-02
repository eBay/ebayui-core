const expect = require('chai').expect;
const renderer = require('../');

describe('given the dialog is in the default state', () => {
    let widget;
    let root;
    let dialog;
    let close;
    let sibling;

    beforeEach(() => {
        sibling = document.createElement('div');
        document.body.appendChild(sibling);

        widget = renderer.renderSync({}).appendTo(document.body).getWidget();
        root = widget.el;
        dialog = root.querySelector('.dialog');
        close = dialog.querySelector('.dialog__close');
    });

    afterEach(() => widget.destroy());

    describe('when it is rendered', () => {
        test('then it is hidden in the DOM', () => {
            expect(dialog.hidden).to.equal(true);
        });

        test('then <body> is scrollable', () => {
            expect(document.body.getAttribute('style')).to.equal(null);
        });

        test('then it\'s siblings are visible', () => {
            expect(sibling.hasAttribute('aria-hidden')).to.equal(false);
        });

        test('then it exposes state on root element', () => {
            expect(root.open).to.equal(false);
        });

        test('then it does not trap focus', () => {
            expect(dialog.classList.contains('keyboard-trap--active')).to.equal(false);
        });
    });

    describe('when open is set to true on the DOM', () => {
        beforeEach((done) => {
            widget.subscribeTo(root).once('dialog-show', done);
            root.open = true;
        });

        thenItIsOpen();
    });

    describe('when the show method is called on the widget', () => {
        beforeEach((done) => {
            widget.subscribeTo(root).once('dialog-show', done);
            widget.show();
        });

        thenItIsOpen();
    });

    function thenItIsOpen(skipRerender) {
        test('then it is visible in the DOM', () => {
            expect(dialog.hidden).to.equal(false);
            expect(dialog.getAttribute('aria-hidden')).to.equal('false');
        });

        test('then it\'s siblings are hidden', () => {
            expect(sibling.getAttribute('aria-hidden')).to.equal('true');
        });

        test('then <body> is not scrollable', () => {
            expect(document.body.getAttribute('style')).to.contain('overflow:hidden;');
        });

        test('then it traps focus', () => {
            expect(dialog.classList.contains('keyboard-trap--active')).to.equal(true);
            expect(document.activeElement.className).to.eql(close.className);
        });

        if (!skipRerender) {
            describe('when it is rerendered', () => {
                beforeEach((done) => {
                    widget.once('update', () => setTimeout(done));
                    widget.setStateDirty('test', true);
                });

                thenItIsOpen(true);
            });
        }
    }
});

describe('given the dialog is in the open state', () => {
    let widget;
    let root;
    let dialog;
    let close;
    let sibling;

    beforeEach(() => {
        sibling = document.createElement('div');
        document.body.appendChild(sibling);

        widget = renderer.renderSync({ open: true }).appendTo(document.body).getWidget();
        root = widget.el;
        dialog = root.querySelector('.dialog');
        close = dialog.querySelector('.dialog__close');
    });

    afterEach(() => widget.destroy());

    describe('when it is rendered', () => {
        test('then it is visible in the DOM', () => {
            expect(dialog.hidden).to.equal(false);
            expect(dialog.getAttribute('aria-hidden')).to.equal('false');
        });

        test('then it\'s siblings are hidden', () => {
            expect(sibling.getAttribute('aria-hidden')).to.equal('true');
        });

        test('then <body> is not scrollable', () => {
            expect(document.body.getAttribute('style')).to.contain('overflow:hidden;');
        });

        test('then it traps focus', () => {
            expect(dialog.classList.contains('keyboard-trap--active')).to.equal(true);
            expect(document.activeElement.className).to.eql(close.className);
        });
    });

    describe('when open is set to false on the DOM', () => {
        beforeEach((done) => {
            widget.subscribeTo(root).once('dialog-close', done);
            root.open = false;
        });

        thenItIsClosed();
    });

    describe('when close is called on the widget', () => {
        beforeEach((done) => {
            widget.subscribeTo(root).once('dialog-close', done);
            widget.close();
        });

        thenItIsClosed();
    });

    describe('when the close button is clicked', () => {
        beforeEach((done) => {
            widget.subscribeTo(root).once('dialog-close', done);
            close.click();
        });

        thenItIsClosed();
    });

    describe('when the mask is clicked', () => {
        beforeEach((done) => {
            widget.subscribeTo(root).once('dialog-close', done);
            dialog.click(); // simulate clicking outside the dialog.
        });

        thenItIsClosed();
    });

    function thenItIsClosed(skipRerender) {
        test('then it is hidden in the DOM', () => {
            expect(dialog.hidden).to.equal(true);
        });

        test('then <body> is scrollable', () => {
            expect(document.body.getAttribute('style')).to.equal(null);
        });

        test('then it\'s siblings are visible', () => {
            expect(sibling.hasAttribute('aria-hidden')).to.equal(false);
        });

        test('then it exposes state on root element', () => {
            expect(root.open).to.equal(false);
        });

        test('then it does not trap focus', () => {
            expect(dialog.classList.contains('keyboard-trap--active')).to.equal(false);
        });

        if (!skipRerender) {
            describe('when it is rerendered', () => {
                beforeEach((done) => {
                    widget.once('update', () => setTimeout(done));
                    widget.setStateDirty('test', true);
                });

                thenItIsClosed(true);
            });
        }
    }
});
