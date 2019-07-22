const { expect, use } = require('chai');
const { cleanup, fireEvent } = require('@marko/testing-library');

afterEach(cleanup);
use(require('chai-dom'));
use(require('sinon-chai'));

// Adds an style to the document which forces all transitions to run more quickly for the tests.
const style = document.createElement('style');
style.innerHTML = `* { transition-duration: 0.1s !important; }`;
document.head.appendChild(style);

module.exports = {
    expect,
    /**
     * Simulates a touch based scroll event over 4 animation frames.
     *
     * @param {HTMLElement} el The element to scroll.
     * @param {number} to The new scrollLeft for the element.
     * @param {function} cb A callback to call after the scroll.
     */
    simulateScroll(el, to, cb) {
        fireEvent.scroll(el);
        el.scrollLeft = to;
        setTimeout(cb, 600);
    },
    waitFrames(count, cb) {
        if (count) {
            return requestAnimationFrame(() => waitFrames(count - 1, cb));
        }
    
        cb();
    }
};
