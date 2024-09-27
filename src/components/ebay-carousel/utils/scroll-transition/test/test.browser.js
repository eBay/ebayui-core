import {
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
    vi,
} from "vitest";

import { scrollTransition } from "../";

describe("scroll-transition", () => {
    let scrollEl;

    beforeAll(() => {
        scrollEl = document.createElement("div");
        scrollEl.style.overflowX = "scroll";
        scrollEl.innerHTML = `<div style="width: 200%; border: 25px dashed #000;"></div>`;
        document.body.appendChild(scrollEl);
    });

    beforeEach(() => {
        scrollEl.scrollLeft = 0;
    });

    afterAll(() => {
        document.body.removeChild(scrollEl);
    });

    it("scrolls an element to an offset and calls a function once done", async () => {
        await new Promise((resolve) => {
            scrollTransition(scrollEl, 100, () => {
                expect(scrollEl.scrollLeft).to.equal(100);
                resolve();
            });
        });
    });

    it("does not call finish function if scroll is canceled", async () => {
        const spy = vi.fn();
        const cancel = scrollTransition(scrollEl, 100, spy);
        await new Promise((resolve) => {
            setTimeout(() => {
                cancel();
                setTimeout(() => {
                    expect(spy).toBeCalledTimes(0);
                    resolve();
                }, 300);
            }, 50);
        });
    });
});
