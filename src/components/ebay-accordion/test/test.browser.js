import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { render, fireEvent, waitFor, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import template from "../index.marko";
import * as mock from "./mock";

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);
let component;

const getSectionText = (item) => item.summary.renderBody.text;

describe("given the accordion in the default state", () => {
    const input = mock.Default_Accordion;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("should render all sections collapsed", () => {
        input.details.forEach((item) => {
            expect(
                component.getByText(getSectionText(item)).closest("details")
                    .open,
            ).to.equal(false);
        });
    });

    describe("when first section toggled", () => {
        beforeEach(async () => {
            await fireEvent.click(
                component.getByText(getSectionText(input.details[0])),
            );
        });

        it("should open the clicked section", async () => {
            const firstSection = component.getByText(
                getSectionText(input.details[0]),
            );
            expect(firstSection.closest("details").open).to.equal(true);
        });

        it("should close an open section when clicked again", async () => {
            const firstSection = component.getByText(
                getSectionText(input.details[0]),
            );
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
        await fireEvent.click(
            component.getByText(getSectionText(input.details[0])),
        );
        expect(
            component
                .getByText(getSectionText(input.details[0]))
                .closest("details").open,
        ).to.equal(true);

        // Open second section
        await fireEvent.click(
            component.getByText(getSectionText(input.details[1])),
        );

        // Verify first section closed and second section opened
        await waitFor(() => {
            expect(
                component
                    .getByText(getSectionText(input.details[0]))
                    .closest("details").open,
            ).to.equal(false);
            expect(
                component
                    .getByText(getSectionText(input.details[1]))
                    .closest("details").open,
            ).to.equal(true);
        });
    });
});
