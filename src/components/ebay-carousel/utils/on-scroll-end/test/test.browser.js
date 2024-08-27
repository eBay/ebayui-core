import {
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
    vi,
} from "vitest";
import {
    simulateScroll,
    waitFrames,
} from "../../../../../common/test-utils/browser";
import { onScrollEnd } from "..";

describe("scroll-end", () => {
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

    it("calls a function when a scroll has ended", async () => {
        const scrollEndSpy = vi.fn();
        onScrollEnd(scrollEl, scrollEndSpy);
        await new Promise((resolve) => {
            simulateScroll(scrollEl, 50, () => {
                setTimeout(() => {
                    expect(scrollEndSpy).toBeCalled();
                    expect(scrollEndSpy).toHaveBeenCalledWith(50);
                    resolve();
                }, 250);
            });
        });
    });

    it("groups scroll events with additional touches", async () => {
        const scrollEndSpy = vi.fn();
        onScrollEnd(scrollEl, scrollEndSpy);

        await new Promise((resolve) => {
            setTimeout(() => {
                simulateScroll(scrollEl, 100, () => {
                    setTimeout(() => {
                        expect(scrollEndSpy).toBeCalled("success called");
                        expect(scrollEndSpy).toHaveBeenCalledWith(100);
                        resolve();
                    }, 250);
                });
            }, 0);
        });
        simulateScroll(scrollEl, 50);
    });

    it("can be canceled immediately", async () => {
        const scrollEndSpy = vi.fn();
        const cancel = onScrollEnd(scrollEl, scrollEndSpy);
        simulateScroll(scrollEl, 100);
        await new Promise((resolve) => {
            waitFrames(5, () => {
                expect(scrollEndSpy).toBeCalledTimes(0);
                resolve();
            });
        });

        cancel();
    });

    it("can be canceled after scrolling starts", async () => {
        const scrollEndSpy = vi.fn();
        const cancel = onScrollEnd(scrollEl, scrollEndSpy);
        const startLeft = scrollEl.scrollLeft;
        simulateScroll(scrollEl, 100);

        await new Promise((resolve) => {
            waitFrames(2, () => {
                cancel();
                waitFrames(3, () => {
                    expect(scrollEndSpy).toBeCalledTimes(0);
                    expect(scrollEl.scrollLeft).to.not.equal(startLeft);
                    resolve();
                });
            });
        });
    });
});
