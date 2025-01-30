import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("fake tabs", () => {
    it("renders fake version with 3 tabs", async () => {
        const input = mock.fake3HeadingsNoIndex;
        const { getByText } = await render(template, input);

        input.tab.forEach((heading) => {
            const headingEl = getByText(heading.renderBody.text);
            expect(headingEl).toMatchSnapshot();
        });

        const panelEl = getByText(input.renderBody.text);
        expect(panelEl).toMatchSnapshot();
    });

    it("renders fake version with 3 tabs on the second panel", async () => {
        const input = mock.fake3Headings1Index;
        const { getByText } = await render(template, input);
        input.tab.forEach((heading) => {
            const headingEl = getByText(heading.renderBody.text);
            expect(headingEl).toMatchSnapshot();
        });
    });

    testPassThroughAttributes(template);
});

describe("tabs-heading", () => {
    describe("when fake", () => {
        testPassThroughAttributes(template, {
            child: {
                name: "tab",
                multiple: true,
            },
        });
    });
});
