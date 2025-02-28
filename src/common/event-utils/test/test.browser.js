import { beforeEach, describe, it, expect, vi } from "vitest";
import { fireEvent } from "@marko/testing-library";
import { waitFrames } from "../../test-utils/browser";
import * as eventUtils from "../";

const resizeUtil = eventUtils.resizeUtil;
const handleActionKeydown = eventUtils.handleActionKeydown;
const handleEscapeKeydown = eventUtils.handleEscapeKeydown;
const handleUpDownArrowsKeydown = eventUtils.handleUpDownArrowsKeydown;
const handleLeftRightArrowsKeydown = eventUtils.handleLeftRightArrowsKeydown;
const preventDefaultIfHijax = eventUtils.preventDefaultIfHijax;

describe("handleActionKeydown()", () => {
    [{ key: " " }, { key: "Enter" }].forEach((event) => {
        it(`calls callback for key=${event.key}`, () => {
            const callback = vi.fn();
            handleActionKeydown(event, callback);
            expect(callback).toBeCalledTimes(1);
        });
    });

    it("doesn't call callback for other key", () => {
        const callback = vi.fn();
        handleActionKeydown({ key: "A" }, callback);
        expect(callback).toBeCalledTimes(0);
    });
});

describe("handleEscapeKeydown()", () => {
    const escapeKey = "Escape";
    it(`calls callback for key=${escapeKey}`, () => {
        const callback = vi.fn();
        handleEscapeKeydown({ key: escapeKey }, callback);
        expect(callback).toBeCalledTimes(1);
    });
});

describe("handleUpDownArrowsKeydown()", () => {
    [{ key: "ArrowUp" }, { key: "ArrowDown" }].forEach((event) => {
        it(`calls callback for key=${event.key}`, () => {
            const callback = vi.fn();
            handleUpDownArrowsKeydown(event, callback);
            expect(callback).toBeCalledTimes(1);
        });
    });

    it("doesn't call callback for other key", () => {
        const callback = vi.fn();
        handleUpDownArrowsKeydown({ key: "A" }, callback);
        expect(callback).toBeCalledTimes(0);
    });
});

describe("handleLeftRightArrowsKeydown()", () => {
    [{ key: "ArrowLeft" }, { key: "ArrowRight" }].forEach((event) => {
        it(`calls callback for key=${event.key}`, () => {
            const callback = vi.fn();
            handleLeftRightArrowsKeydown(event, callback);
            expect(callback).toBeCalledTimes(1);
        });
    });

    it("doesn't call callback for other key", () => {
        const callback = vi.fn();
        handleLeftRightArrowsKeydown({ key: "A" }, callback);
        expect(callback).toBeCalledTimes(0);
    });
});

describe("preventDefaultIfHijax()", () => {
    let preventDefaultSpy;
    beforeEach(() => {
        preventDefaultSpy = vi.fn();
    });

    it("executes preventDefault if hijax", () => {
        const e = { preventDefault: preventDefaultSpy };
        preventDefaultIfHijax(e, true);
        expect(preventDefaultSpy).toBeCalledTimes(1);
    });

    it("does not execute preventDefault if not hijax", () => {
        const e = { preventDefault: preventDefaultSpy };
        preventDefaultIfHijax(e, false);
        expect(preventDefaultSpy).toBeCalledTimes(0);
    });
});

describe("resizeEventUtil", () => {
    it("the root element listens for a window resize, then calls a callback", async () => {
        const mockCallback = vi.fn();
        resizeUtil.addEventListener("resize", mockCallback.bind(this));
        expect(mockCallback).toBeCalledTimes(0);
        fireEvent(window, new Event("resize"));
        await new Promise((resolve) => {
            waitFrames(2, () => {
                expect(mockCallback).toBeCalledTimes(1);
                resolve();
            });
        });
    });

    it("the root element does not listen for a window resize, after eventListener is removed", async () => {
        const mockCallback = vi.fn();
        resizeUtil.addEventListener("resize", mockCallback.bind(this));
        resizeUtil.removeEventListener("resize", mockCallback.bind(this));
        expect(mockCallback).toBeCalledTimes(0);
        fireEvent(window, new Event("resize"));
        await new Promise((resolve) => {
            waitFrames(2, () => {
                expect(mockCallback).toBeCalledTimes(0);
                resolve();
            });
        });
    });
});
