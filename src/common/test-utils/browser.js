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
 * Simulates a touch based scroll event over 100ms.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The new scrollLeft for the element.
 */
function simulateScroll(el, to) {
    const { scrollLeft } = el;
    const distance = to - scrollLeft;
    const duration = 100;
    triggerEvent(el, 'touchstart');
    requestAnimationFrame(startTime => {
        (function animate(curTime) {
            const delta = curTime - startTime;
            if (delta > duration) {
                triggerEvent(el, 'touchend');
                el.scrollLeft = to;
                return;
            }

            triggerEvent(el, 'touchmove');
            el.scrollLeft = (delta / duration) * distance + scrollLeft;
            requestAnimationFrame(animate);
        }(startTime));
    });
}

module.exports = {
    triggerEvent,
    testOriginalEvent,
    simulateScroll
};
