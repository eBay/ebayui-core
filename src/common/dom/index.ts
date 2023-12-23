/**
 * Calculates the maximum width for an element within its container.
 * Works my making the element as large as possible, reading its width,
 * and then restoring its original width.
 *
 * @param {HTMLElement} el the element to get the max width for
 */
export function getMaxWidth(el: HTMLElement) {
    const width = el.style.width;

    el.style.width = "100vw";
    const result = el.offsetWidth;

    el.style.width = width;
    return result;
}
