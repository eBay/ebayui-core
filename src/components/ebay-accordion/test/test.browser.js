import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import template from "../index.marko";
import * as mock from "./mock";

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);
let component;

describe("given the accordion in the default state", () => {
    const input = mock.Default_Accordion;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("should render all sections collapsed", () => {
        input.item.forEach((item) => {
            expect(
                component.getByText(item.text).closest("details").open,
            ).to.equal(false);
        });
    });

    describe("when first section toggled", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(input.item[0].text));
        });

        it("should open the clicked section", async () => {
            const firstSection = component.getByText(input.item[0].text);
            expect(firstSection.closest("details").open).to.equal(true);
        });

        it("should close an open section when clicked again", async () => {
            const firstSection = component.getByText(input.item[0].text);
            expect(firstSection.closest("details").open).to.equal(true);
            await fireEvent.click(firstSection);
            expect(firstSection.closest("details").open).to.equal(false);
        });
    });
});

describe("given the accordion with autocollapse enabled", () => {
    const input = mock.autoCollapse_Accordion;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("should collapse previous section when new section is opened", async () => {
        // Open first section
        await fireEvent.click(component.getByText(input.item[0].text));
        expect(
            component.getByText(input.item[0].text).closest("details").open,
        ).to.equal(true);

        // Open second section
        await fireEvent.click(component.getByText(input.item[1].text));

        // Verify first section closed and second section opened
        expect(
            component.getByText(input.item[0].text).closest("details").open,
        ).to.equal(false);
        expect(
            component.getByText(input.item[1].text).closest("details").open,
        ).to.equal(true);
    });
});
