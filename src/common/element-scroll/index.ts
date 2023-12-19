/**
 * Scrolls the parent element until the child element is in view
 */
function scroll(el: HTMLElement) {
    if (!el) {
        return;
    }

    const parentEl = el && el.parentElement!;
    const offsetBottom = el.offsetTop + el.offsetHeight;
    const scrollBottom = parentEl.scrollTop + parentEl.offsetHeight;

    if (el.offsetTop < parentEl.scrollTop) {
        parentEl.scrollTop = el.offsetTop;
    } else if (offsetBottom > scrollBottom) {
        parentEl.scrollTop = offsetBottom - parentEl.offsetHeight;
    }
}

export { scroll };
