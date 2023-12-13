/**
 * Checks on an interval to see if the element is scrolling.
 * When the scrolling has finished it then calls the function.
 *
 * @param el The element that scrolls.
 * @param fn The function to call after scrolling completes.
 * @return A function to cancel the scroll listener.
 */
export function onScrollEnd(el: HTMLElement, fn: (offet: number) => void) {
    let timeout: ReturnType<typeof setTimeout>;
    let frame: ReturnType<typeof requestAnimationFrame>;
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
