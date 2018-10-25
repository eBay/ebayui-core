/**
 * Calls a function every time scrolling completes for an element.
 * Returns a function to stop listening for scroll ends events.
 *
 * (Only works in mobile and relies on touch events)
 *
 * @param {HTMLElement} el The element which scrolls.
 * @param {(offset: number)=>{}} fn The function to call after scrolling completes.
 * @return {function} A function to cancel the scroll listener.
 */
module.exports = function onScrollEnd(el, fn) {
    let frame;
    let timeout;
    let lastTime;
    let lastLeft;
    let stage = 0;
    el.addEventListener('touchmove', handleTouchMove);

    return cancel;

    // First we wait for a touch move (means scrolling as started).
    function handleTouchMove(e) {
        if (stage !== 1) {
            el.addEventListener('touchend', handleTouchEnd);
        }

        stage = 1;
        lastTime = e.timeStamp;
        lastLeft = el.scrollLeft;
    }

    // Then we wait for the touch to end (user has stopped scrolling).
    function handleTouchEnd(e) {
        stage = 2;
        cancelTouchEnd();

        if (e.cancelable) {
            const time = e.timeStamp - lastTime;
            const distance = el.scrollLeft - lastLeft;
            const velocity = distance / time;
            stage = 0;
            // If it's cancelable then this browser does not inertial scroll by default and we can animate immediately.
            return fn(el.scrollLeft, velocity);
        }

        el.addEventListener('touchstart', handleTouchStart);
        frame = requestAnimationFrame(() => checkScrollEnded(el.scrollLeft));
    }

    // If the user touches again before the inertial scrolling has stopped then we reset.
    function handleTouchStart(e) {
        stage = 0;
        cancelPolling();
        handleTouchMove(e);
    }

    // Finally after the touch end we poll the scroll state every animation frame
    // to determine when inertial scrolling has stopped.
    function checkScrollEnded(lastOffset) {
        timeout = setTimeout(() => {
            frame = requestAnimationFrame(() => {
                const newOffset = el.scrollLeft;
                if (lastOffset !== newOffset) {
                    checkScrollEnded(newOffset);
                } else {
                    cancelTouchStart();
                    fn(newOffset, 0);
                    stage = 0;
                }
            });
        }, 64);
    }

    function cancelTouchMove() {
        el.removeEventListener('touchmove', handleTouchMove);
    }

    function cancelTouchEnd() {
        el.removeEventListener('touchend', handleTouchEnd);
    }

    function cancelTouchStart() {
        el.removeEventListener('touchstart', handleTouchStart);
    }

    function cancelPolling() {
        cancelAnimationFrame(frame);
        clearTimeout(timeout);
    }

    function cancel() {
        cancelTouchMove();

        switch (stage) {
            case 1:
                cancelTouchEnd();
                break;
            case 2:
                cancelPolling();
                cancelTouchStart();
                break;
            default:
                break;
        }
    }
};
