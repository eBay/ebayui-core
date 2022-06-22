/**
 * Checks on an interval to see if the element is scrolling.
 * When the scrolling has finished it then calls the function.
 *
 * @param {HTMLElement} el The element which scrolls.
 * @param {(offset: number)=>{}} fn The function to call after scrolling completes.
 * @return {function} A function to cancel the scroll listener.
 */
export function onScrollEnd(el, fn) {
    let timeout;
    let frame;
    let lastPos;

    (function checkMoved() {
        const { scrollLeft } = el;
        if (lastPos !== scrollLeft) {
            lastPos = scrollLeft;
            timeout = setTimeout(() => {
                frame = requestAnimationFrame(checkMoved);
            }, 90);
            return;
        }

        fn(lastPos);
    })();

    return () => {
        clearTimeout(timeout);
        cancelAnimationFrame(frame);
    };
}
