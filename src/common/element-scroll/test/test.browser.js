import { beforeAll, afterAll, describe, it, expect } from "vitest";
import * as elementScroll from "../index";

describe("element-scroll", () => {
    const contentDiv = document.createElement("div");

    for (let index = 0; index < 10; index += 1) {
        const innerDiv = `<div class="item${index}" style="height: 50px">content</div>`;
        contentDiv.innerHTML += innerDiv;
    }

    const fifthItemEl = contentDiv.querySelectorAll(".item5")[0];
    const secondItemEl = contentDiv.querySelectorAll(".item2")[0];

    beforeAll(() => {
        document.body.appendChild(contentDiv);
        contentDiv.setAttribute("style", "max-height:100px; overflow-y: auto;");
    });

    afterAll(() => {
        document.body.removeChild(contentDiv);
    });

    it("scrolls the parent so the child element below the view is visible", () => {
        elementScroll.scroll(fifthItemEl);
        expect(contentDiv.scrollTop).to.equal(
            fifthItemEl.offsetTop +
                fifthItemEl.offsetHeight -
                contentDiv.offsetHeight,
        );
    });

    it("scrolls the parent so the child element above the view is visible", () => {
        contentDiv.scrollTop = fifthItemEl.offsetTop;
        elementScroll.scroll(secondItemEl);
        expect(contentDiv.scrollTop).to.equal(secondItemEl.offsetTop);
    });
});
