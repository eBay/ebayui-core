import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("inline-notice", () => {
    it("renders with defaults", async () => {
        const input = mock.Inline;
        const { getByLabelText, getByText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).toMatchSnapshot();
        expect(status.parentElement).toMatchSnapshot();

        const content = getByText(input.renderBody.text);
        expect(content).toMatchSnapshot();
    });

    it("renders with custom status type", async () => {
        const input = mock.inlineCustomStatus;
        const { getByLabelText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status.parentElement).toMatchSnapshot();
    });

    testPassThroughAttributes(template, {
        input: mock.Inline,
    });
});
