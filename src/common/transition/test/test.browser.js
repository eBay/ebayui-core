import { beforeEach, afterEach, describe, it, expect, vi } from "vitest";
import * as testUtils from "../../test-utils/browser";
import transition from "../";

describe("transition", () => {
    let styleSheet;
    let transitionEl;

    beforeEach(() => {
        transitionEl = document.createElement("div");
        transitionEl.id = "transition-test";
        transitionEl.setAttribute("hidden", "");

        styleSheet = document.createElement("style");
        styleSheet.innerHTML = `
            #transition-test[hidden] {
                display: none;
            }

            #transition-test.show-init {
                opacity: 0;
            }

            #transition-test.show {
                display: block !important;
                opacity: 1;
                transition: opacity 0.1s ease;
            }
        `;

        document.head.appendChild(styleSheet);
        document.body.appendChild(transitionEl);
    });

    afterEach(() => {
        document.head.removeChild(styleSheet);
        document.body.removeChild(transitionEl);
    });

    it("applies classes in correct order", async () => {
        transition({
            el: transitionEl,
            className: "show",
            waitFor: [transitionEl],
        });
        transitionEl.removeAttribute("hidden");
        expect(transitionEl).toHaveClass("show-init");

        await new Promise((resolve) => {
            testUtils.waitFrames(2, () => {
                const handleEnd = () => {
                    transitionEl.removeEventListener(
                        "transitionend",
                        handleEnd,
                    );
                    expect(transitionEl).not.toHaveClass("show");
                    resolve();
                };
                expect(transitionEl).not.toHaveClass("show-init");
                expect(transitionEl).toHaveClass("show");
                transitionEl.addEventListener("transitionend", handleEnd);
            });
        });
    });

    it("triggers a callback once complete", (done) => {
        const spy = vi.fn();
        transition(
            { el: transitionEl, className: "show", waitFor: [transitionEl] },
            spy,
        );
        transitionEl.removeAttribute("hidden");
        transitionEl.addEventListener("transitionend", () =>
            setTimeout(() => {
                expect(spy).toBeCalledTimes(1);
                done();
            }),
        );
    });
});
