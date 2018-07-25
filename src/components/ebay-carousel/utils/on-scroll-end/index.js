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
    let stage = 0;
    el.addEventListener('touchmove', handleTouchMove);

    return cancel;

    // First we wait for a touch move (means scrolling as started).
    function handleTouchMove() {
        stage++;
        cancelTouchMove();
        el.addEventListener('touchend', handleTouchEnd);
    }

    // Then we wait for the touch to end (user has stopped scrolling).
    function handleTouchEnd() {
        stage++;
        cancelTouchEnd();
        el.addEventListener('touchstart', handleTouchStart);
        frame = requestAnimationFrame(() => checkScrollEnded(el.scrollLeft));
    }

    // If the user touches again before the inertial scrolling has stopped then we reset.
    function handleTouchStart() {
        cancel();
        stage--;
        el.addEventListener('touchend', handleTouchEnd);
    }

    // Finally after the touch end we poll the scroll state every animation frame
    // to determine when inertial scrolling has stopped.
    function checkScrollEnded(lastOffset) {
        frame = requestAnimationFrame(() => {
            const newOffset = el.scrollLeft;
            if (lastOffset !== newOffset) {
                checkScrollEnded(newOffset);
            } else {
                cancelTouchStart();
                fn(newOffset);
                stage = 0;
                el.addEventListener('touchmove', handleTouchMove);
            }
        });
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

    function cancel() {
        cancelAnimationFrame(frame);

        switch (stage) {
            case 0: cancelTouchMove(); break;
            case 1: cancelTouchEnd(); break;
            default: cancelTouchStart(); break;
        }
    }
};
