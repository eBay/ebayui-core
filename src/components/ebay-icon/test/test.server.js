import { describe, it } from "vitest";

import { snapshotHTML } from "../../../common/test-utils/snapshots";
import template from "../index.marko";

const iconName = "mic";
const progrmaBadgeIcon = "program-badge-authenticity-guaranteed";
const htmlSnap = snapshotHTML(__dirname);

describe("icon", () => {
    it("renders icon inline type with title text", async () => {
        const input = {
            _name: iconName,
            _type: "icon",
            a11yText: "inline icon",
        };
        await htmlSnap(template, input);
    });

    it("renders icon inline type without title text", async () => {
        const input = {
            _name: iconName,
            _type: "icon",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });

    it("renders icon no-skin-classes", async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: "icon",
            class: "custom-class",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });
});

describe("program badges", () => {
    it("renders program badge inline type with title text", async () => {
        const input = {
            _name: progrmaBadgeIcon,
            _type: "program-badge",
            a11yText: "inline icon",
        };

        await htmlSnap(template, input);
    });

    it("renders program badge inline type without title text", async () => {
        const input = {
            _name: iconName,
            _type: "program-badge",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });

    it("renders program badge no-skin-classes", async () => {
        const input = {
            _name: iconName,
            noSkinClasses: true,
            _type: "program-badge",
            class: "custom-class",
            htmlAttributes: {
                "data-testid": "icon",
            },
        };
        await htmlSnap(template, input);
    });
});
