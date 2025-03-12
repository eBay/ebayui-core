import {
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
    vi,
} from "vitest";

import { simulateScroll } from "../../../../../common/test-utils/browser";
import { onScrollDebounced } from "..";

describe("scroll-debounced", () => {
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

    it("calls a handler at most every 600ms", async () => {
        await new Promise((resolve) => {
            const scrollSpy = vi.fn();
            onScrollDebounced(scrollEl, scrollSpy);
            simulateScroll(scrollEl, 50, () => {
                simulateScroll(scrollEl, 100, () => {
                    setTimeout(() => {
                        expect(scrollSpy).toBeCalledTimes(1);
                        resolve();
                    }, 400);
                });
            });
        });
    });

    it("can be canceled", async () => {
        await new Promise((resolve) => {
            const scrollEndSpy = vi.fn();
            const cancel = onScrollDebounced(scrollEl, scrollEndSpy);
            simulateScroll(scrollEl, 100);
            setTimeout(() => {
                expect(scrollEndSpy).toBeCalledTimes(0);
                resolve();
            }, 700);

            cancel();
        });
    });
});
