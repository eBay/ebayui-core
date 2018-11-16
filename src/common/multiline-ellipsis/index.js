/**
 * Adds an ellipsis to a el based on the height and width
 * specified in CSS rules
 */
function truncate(el) {
    if (!el) {
        return;
    }

    const text = el.textContent;

    if (this.isTextOverflowing(el)) {
        const checkFunc = i => {
            el.textContent = text.substring(0, i);
            return this.isTextOverflowing(el) ? -1 : 0;
        };
        const len = binarySearch(text.length - 1, checkFunc);
        const truncatedText = text.substring(0, len).slice(0, -2);
        el.innerHTML = `<span aria-hidden="true">${truncatedText}…</span><span class="clipped">${text}</span>`;
    }
}

function isTextOverflowing(el) {
    const currentOverflow = el.style.overflow;
    if (!currentOverflow || currentOverflow === 'visible') {
        el.style.overflow = 'hidden';
    }

    const isOverflowing = el.clientWidth < el.scrollWidth || el.clientHeight < el.scrollHeight;
    el.style.overflow = currentOverflow;
    return isOverflowing;
}

function binarySearch(length, callback) {
    let low = 0;
    let high = length - 1;
    let best = -1;
    let mid;

    while (low <= high) {
        mid = Math.floor((low + high) / 2);
        const result = callback(mid);
        if (result < 0) {
            high = mid - 1;
        } else if (result > 0) {
            low = mid + 1;
        } else {
            best = mid;
            low = mid + 1;
        }
    }
    return best;
}

module.exports = {
    truncate,
    isTextOverflowing
};
