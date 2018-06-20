/**
 * Utility to animate scroll position of an element using an `ease-out` curve over 250ms.
 * Cancels the animation if the user touches back down.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The offset to animate to.
 * @param {function} fn A function that will be called after the transition completes.
 * @return {function} A function that cancels the transition.
 */
module.exports = function scrollTransition(el, to, fn) {
    const duration = 250;
    el.addEventListener('touchstart', cancel);
    let frame = requestAnimationFrame(startTime => {
        const { scrollLeft } = el;
        const distance = to - scrollLeft;
        (function animate(curTime) {
            const delta = curTime - startTime;
            if (delta > duration) {
                el.scrollLeft = to;
                cancel();
                return fn();
            }

            el.scrollLeft = easeOut(delta / duration) * distance + scrollLeft;
            frame = requestAnimationFrame(animate);
        }(startTime));
    });

    return cancel;

    function cancel() {
        el.removeEventListener('touchstart', cancel);
        cancelAnimationFrame(frame);
    }
};

/**
 * Ease out timing function.
 * Based on https://gist.github.com/gre/1650294.
 *
 * @param {number} val - A number between 0 and 1.
 * @return {number}
 */
function easeOut(v) {
    const t = v - 1;
    return t * t * t + 1;
}
