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

module.exports = {
    triggerEvent,
    testOriginalEvent
};
