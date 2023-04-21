import { fireEvent, createEvent } from "@marko/testing-library";
/**
 * Simulates a touch based scroll event over 4 animation frames.
 *
 * @param {HTMLElement} el The element to scroll.
 * @param {number} to The new scrollLeft for the element.
 * @param {function} cb A callback to call after the scroll.
 */
function simulateScroll(el, to, cb) {
    fireEvent.scroll(el);
    el.scrollLeft = to;
    setTimeout(cb, 600);
}

function waitFrames(count, cb) {
    if (count) {
        return requestAnimationFrame(() => {
            waitFrames(count - 1, cb);
        });
    }

    cb();
}

async function pressKey(el, info) {
    for (const event of [
        createEvent.keyDown(el, info),
        createEvent.keyUp(el, info),
    ]) {
        // we assign properties to them for older browsers (chrome 49)
        Object.keys(info).forEach((key) => {
            if (event[key] !== info[key]) {
                Object.defineProperty(event, key, { value: info[key] });
            }
        });

        await fireEvent(el, event);
    }
}

const fastAnimations = {
    // Adds an style to the document which forces all transitions to run more quickly for the tests.
    start() {
        if (this.fastAnimationStyle) {
            return;
        }

        this.fastAnimationStyle = document.createElement("style");
        this.fastAnimationStyle.innerHTML = `* {
                transition-duration: 0.1s !important;
                scroll-behavior: auto !important;
            }`;
        document.head.appendChild(this.fastAnimationStyle);
    },
    stop() {
        if (!this.fastAnimationStyle) {
            return;
        }

        document.head.removeChild(this.fastAnimationStyle);
        this.fastAnimationStyle = undefined;
    },
};

export { fastAnimations, waitFrames, pressKey, simulateScroll };
