/**
 * Calculates the maximum width for an element within its container.
 * Works my making the element as large as possible, reading its width,
 * and then restoring its original width.
 *
 * @param {HTMLElement} el the element to get the max width for
 * @return {number}
 */
export function getMaxWidth(el) {
    el.style.width = '100vw';
    const result = el.offsetWidth;
    el.style.width = null;
    return result;
}
