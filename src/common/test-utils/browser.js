const expect = require('chai').expect;

/**
 * Trigger generic DOM event
 * @param {HTMLElement} el
 * @param {String} type
 * @param {Number} keyCode
 */
function triggerEvent(el, type, keyCode) {
    const event = document.createEvent('Event');
    event.initEvent(type, true, true, null);
    event.keyCode = keyCode;
    el.dispatchEvent(event);
}

/**
 * Check that the spy was called with an originalEvent
 * @param {Object} spy
 */
function testOriginalEvent(spy) {
    expect(spy.getCall(0).args[0].originalEvent instanceof Event).to.equal(true);
}

/**
 * Simulates a touch based scroll event over 4 animation frames.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The new scrollLeft for the element.
 * @param {function} cb A callback to call after the scroll.
 */
function simulateScroll(el, to, cb) {
    triggerEvent(el, 'scroll', undefined, false);
    el.scrollTo({ left: to });
    setTimeout(cb, 600);
}

function waitFrames(count, cb) {
    if (count) {
        return requestAnimationFrame(() => waitFrames(count - 1, cb));
    }

    cb();
}

module.exports = {
    triggerEvent,
    testOriginalEvent,
    simulateScroll,
    waitFrames
};
