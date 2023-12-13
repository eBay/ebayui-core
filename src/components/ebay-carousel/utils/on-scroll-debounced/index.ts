const eventOptions: EventListenerOptions & { passive: boolean } = {
    passive: true,
};

export function onScrollDebounced(el: HTMLElement, cb: () => void) {
    let timeout: ReturnType<typeof setTimeout>;
    waitForScroll();
    return cancel;

    function waitForScroll() {
        el.addEventListener("scroll", handleScroll, eventOptions);
    }

    function handleScroll() {
        cancelWaitForScroll();
        timeout = setTimeout(finish, 640);
    }

    function finish() {
        cb();
        waitForScroll();
    }

    function cancelWaitForScroll() {
        el.removeEventListener("scroll", handleScroll, eventOptions);
    }

    function cancel() {
        cancelWaitForScroll();
        clearTimeout(timeout);
    }
}
