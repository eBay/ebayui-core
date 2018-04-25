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
            expect(document.body.style.overflow).to.equal('');
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
            widget.once('update', () => setTimeout(done));
            root.open = true;
        });

        thenItIsOpen();
    });

    describe('when the show method is called on the widget', () => {
        beforeEach((done) => {
            widget.once('update', () => setTimeout(done));
            widget.show();
        });

        thenItIsOpen();
    });

    function thenItIsOpen(skipRerender) {
        test('then the show event is called', (done) => {
            root.addEventListener('dialog-show', () => done());
        });

        test('then it is visible in the DOM', () => {
            expect(dialog.hidden).to.equal(false);
            expect(dialog.getAttribute('aria-hidden')).to.equal('false');
        });

        test('then it\'s siblings are hidden', () => {
            expect(sibling.getAttribute('aria-hidden')).to.equal('true');
        });

        test('then <body> is not scrollable', () => {
            expect(document.body.style.overflow).to.equal('hidden');
        });

        test('then it traps focus', (done) => {
            expect(dialog.classList.contains('keyboard-trap--active')).to.equal(true);
            root.addEventListener('dialog-show', () => {
                expect(document.activeElement.className).to.eql(close.className);
                done();
            });
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
            expect(document.body.style.overflow).to.equal('hidden');
        });

        test('then it traps focus', (done) => {
            expect(dialog.classList.contains('keyboard-trap--active')).to.equal(true);
            root.addEventListener('dialog-show', () => {
                expect(document.activeElement.className).to.eql(close.className);
                done();
            });
        });
    });

    describe('when open is set to false on the DOM', () => {
        beforeEach((done) => {
            widget.once('update', () => setTimeout(done));
            root.open = false;
        });

        thenItIsClosed();
    });

    describe('when close is called on the widget', () => {
        beforeEach((done) => {
            widget.once('update', () => setTimeout(done));
            widget.close();
        });

        thenItIsClosed();
    });

    describe('when the close button is clicked', () => {
        beforeEach((done) => {
            widget.once('update', () => setTimeout(done));
            close.click();
        });

        thenItIsClosed();
    });

    describe('when the mask is clicked', () => {
        beforeEach((done) => {
            widget.once('update', () => setTimeout(done));
            dialog.click(); // simulate clicking outside the dialog.
        });

        thenItIsClosed();
    });

    function thenItIsClosed(skipRerender) {
        test('then the close event is called', (done) => {
            root.addEventListener('dialog-close', () => done());
        });

        test('then it is hidden in the DOM', () => {
            expect(dialog.hidden).to.equal(true);
        });

        test('then <body> is scrollable', () => {
            expect(document.body.style.overflow).to.equal('');
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
