const sinon = require('sinon');
const expect = require('chai').expect;
const transition = require('../');

describe('transition', () => {
    let styleSheet;
    let transitionEl;

    beforeEach(() => {
        transitionEl = document.createElement('div');
        transitionEl.id = 'transition-test';
        transitionEl.setAttribute('hidden', '');

        styleSheet = document.createElement('style');
        styleSheet.innerHTML = `
            #transition-test[hidden] {
                display: none;
            }

            #transition-test.show-init {
                opacity: 0;
            }

            #transition-test.show {
                display: block !important;
                opacity: 1;
                transition: opacity 0.1s ease;
            }
        `;

        document.head.appendChild(styleSheet);
        document.body.appendChild(transitionEl);
    });

    afterEach(() => {
        document.head.removeChild(styleSheet);
        document.body.removeChild(transitionEl);
    });

    it('applies classes in correct order', (done) => {
        transition(transitionEl, 'show');
        transitionEl.removeAttribute('hidden');
        expect(transitionEl.classList.contains('show-init')).to.equal(true);

        setTimeout(() => {
            const handleEnd = () => {
                transitionEl.removeEventListener('transitionend', handleEnd);
                expect(transitionEl.classList.contains('show')).to.equal(false);
                done();
            };
            expect(transitionEl.classList.contains('show-init')).to.equal(false);
            expect(transitionEl.classList.contains('show')).to.equal(true);
            transitionEl.addEventListener('transitionend', handleEnd);
        }, 30);
    });

    it('triggers a callback once complete', (done) => {
        const spy = sinon.spy();
        transition(transitionEl, 'show', spy);
        transitionEl.removeAttribute('hidden');
        transitionEl.addEventListener('transitionend', spy);
        setTimeout(() => {
            transitionEl.removeEventListener('transitionend', spy);
            expect(spy.callCount).to.equal(2);
            done();
        }, 200);
    });
});

