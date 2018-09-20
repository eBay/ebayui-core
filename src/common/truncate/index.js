/**
 * Will truncate text at the specified number of lines.
 * Aborts if the container contains more than just simple text.
 *
 * @param {HTMLElement} el: The root element.
 * @param {Number} lines: Number of lines to display before truncation. Default: 2
 */

module.exports = ({ el, lines = 2 }) => {
    if (el.children.length) {
        return;
    }

    // get element text
    const text = el.textContent;

    // remember original max height
    const computedStyle = getComputedStyle(el);
    const maxHeight = computedStyle.getPropertyValue('max-height');
    el.style.maxHeight = 'none';

    // get height
    const origHeight = el.clientHeight;
    const targetHeight = getTargetHeight(el, computedStyle, lines);

    if (origHeight <= targetHeight) {
        el.textContent = text;
        el.style.maxHeight = maxHeight;
        return;
    }

    let start = 1,
        length = 0,
        end = text.length;

    while (start < end) { // Binary search for max length
        length = Math.ceil((start + end) / 2);

        el.textContent = `${text.slice(0, length) }...`;

        if (el.clientHeight <= targetHeight) {
            start = length;
        } else {
            end = length - 1;
        }
    }
    el.innerHTML = `<span class="clipped">${text}</span><span aria-hidden="true">${text.slice(0, start) }...</span>`;
    el.style.maxHeight = maxHeight;
};

function getTargetHeight(el, computedStyle, lines) {
    el.textContent = 'j';
    const lineHeight = Math.ceil(parseFloat(computedStyle.lineHeight), 10);
    const rowHeight = Math.ceil(el.clientHeight);
    const gapHeight = lineHeight > rowHeight ? (lineHeight - rowHeight) : 0;
    return gapHeight * (lines - 1) + rowHeight * lines;
}
