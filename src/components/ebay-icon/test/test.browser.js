import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, cleanup } from "@marko/testing-library";
import template from "../icons/ebay-add-24-icon/index.marko";
import template2 from "../icons/ebay-arrow-left-24-icon/index.marko";
import template3 from "../icons/ebay-arrow-right-24-icon/index.marko";
import template4 from "../icons/ebay-ai-spectrum-16-colored-icon/index.marko";

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

function checkIfHidden() {
    const svg = document.body.firstChild;

    expect(svg.style.position).to.equal(
        "absolute",
        "position should be absolute",
    );
    expect(svg.style.height).to.equal("0px", "height should be 0px");
    expect(svg.style.width).to.equal("0px", "width should be 0px");
}

function checkIcon(iconId) {
    const svg = document.body.firstChild;
    expect(svg.tagName).to.equal("svg");

    let iconAdd;
    svg.childNodes.forEach((child) => {
        expect(child.tagName).to.match(/symbol|defs/);
        if (child.id === iconId) {
            if (!!iconAdd) {
                throw new Error(`Found multiple ${iconId}, expect only 1.`);
            } else {
                iconAdd = child;
            }
        }
    });
    if (!iconAdd) {
        throw new Error(`${iconId} is not being added into SVG symbols`);
    }
}

describe("rendering an icon in the browser", () => {
    beforeEach(async () => {
        component = await render(template, { a11yText: "icon" });
    });

    it("should create root SVG", () => {
        checkIfHidden();
        expect(() => checkIcon("icon-add-24")).to.not.throw(Error);
    });

    it("should not have defs tag", () => {
        const icon = component.getByLabelText("icon");

        icon.childNodes.forEach((child) => {
            expect(child.tagName).to.not.equal("DEFS");
        });
        const defs = document.body.firstChild.firstChild;
        expect(defs.childNodes.length).to.equal(0);
    });
});

describe("rendering multiple icons in the browser", () => {
    beforeEach(async () => {
        await render(template, { a11yText: "icon" });
        await render(template2, { a11yText: "icon2" });
        await render(template3, { a11yText: "icon3" });
        // render first template again;
        component = await render(template, { a11yText: "another icon" });
    });

    it("should create root SVG", () => {
        checkIfHidden();
        const svg = document.body.firstChild;
        expect(svg.tagName).to.equal("svg");

        expect(() => checkIcon("icon-add-24")).to.not.throw(Error);
        expect(() => checkIcon("icon-arrow-right-24")).to.not.throw(Error);
        expect(() => checkIcon("icon-arrow-left-24")).to.not.throw(Error);
        // Should have at least 3 icon symbols
        expect(svg.childNodes.length).to.be.greaterThan(3);

        const defs = document.body.firstChild.firstChild;
        expect(defs.childNodes.length).to.equal(0);
    });
});

describe("rendering icons with defs in the browser", () => {
    beforeEach(async () => {
        await render(template4, { a11yText: "icon" });
    });

    it("should create root SVG", () => {
        checkIfHidden();
        const svg = document.body.firstChild;
        expect(svg.tagName).to.equal("svg");

        const defs = document.body.firstChild.firstChild;
        expect(defs.tagName).to.equal("defs");
    });
});
