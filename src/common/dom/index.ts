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

/**
 * Determines if the user has requested reduced motion in their system preferences.
 *
 * This function checks the `prefers-reduced-motion` media query to see if the user
 * has indicated that they prefer reduced motion. This can be useful for improving
 * accessibility by disabling animations or transitions for users who may be sensitive
 * to motion.
 *
 * @returns {boolean} `true` if the user prefers reduced motion, `false` otherwise.
 */
export const useReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
