import { onScrollEnd } from '../on-scroll-end';
const supportsScrollBehavior =
    typeof window !== 'undefined' && 'scrollBehavior' in document.documentElement.style;
/**
 * Utility to animate scroll position of an element using an `ease-out` curve over 250ms.
 * Cancels the animation if the user touches back down.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The offset to animate to.
 * @param {function} fn A function that will be called after the transition completes.
 * @return {function} A function that cancels the transition.
 */
export function scrollTransition(el, to, fn) {
    if (supportsScrollBehavior) {
        el.scrollTo({ left: to });
        return onScrollEnd(el, fn);
    }

    let lastPosition, cancelInterruptTransition;
    let frame = requestAnimationFrame((startTime) => {
        const { scrollLeft } = el;
        const distance = to - scrollLeft;
        const duration = 450;
        (function animate(curTime) {
            const delta = curTime - startTime;
            if (delta > duration) {
                el.scrollLeft = to;
                cancel();
                return fn();
            }

            el.scrollLeft = easeInOut(delta / duration) * distance + scrollLeft;
            frame = requestAnimationFrame(animate);
        })(startTime);
    });

    // The animation can be interrupted by new touch events.
    el.addEventListener('touchstart', handleTouchStart);

    return cancel;

    function cancel() {
        cancelAnimationFrame(frame);

        if (lastPosition === undefined) {
            cancelTouchStart();
        } else {
            if (cancelInterruptTransition) cancelInterruptTransition();
            cancelTouchEnd();
        }
    }

    function handleTouchStart() {
        cancel();
        lastPosition = el.scrollLeft;
        // If we were interrupted by a touch start we wait for a touch end to see if we moved.
        el.addEventListener('touchend', handleTouchEnd);
    }

    function handleTouchEnd() {
        cancelTouchEnd();
        // If we haven't moved because of the interrupt we continue to transition.
        if (lastPosition === el.scrollLeft) {
            cancelInterruptTransition = scrollTransition(el, to, fn);
        }
    }

    function cancelTouchStart() {
        el.removeEventListener('touchstart', handleTouchStart);
    }

    function cancelTouchEnd() {
        el.removeEventListener('touchend', handleTouchEnd);
    }
}

/**
 * Ease out timing function.
 * Based on https://gist.github.com/gre/1650294.
 *
 * @param {number} val - A number between 0 and 1.
 * @return {number}
 */
function easeInOut(v) {
    return v < 0.5 ? 2 * v * v : -1 + (4 - 2 * v) * v;
}
