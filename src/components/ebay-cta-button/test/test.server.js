import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("cta-button", () => {
    it("renders basic cta button", async () => {
        const input = mock.Basic;
        const { getByText } = await render(template, input);
        const textEl = getByText(input.renderBody.text);
        expect(textEl).toMatchSnapshot();
    });

    it("renders small cta button", async () => {
        const input = mock.Small;
        const { getByText } = await render(template, input);
        expect(
            getByText(input.renderBody.text).closest(".cta-btn"),
        ).toMatchSnapshot();
    });

    it("renders large cta button", async () => {
        const input = mock.Large;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text)).toMatchSnapshot();
    });

    testPassThroughAttributes(template);
});
