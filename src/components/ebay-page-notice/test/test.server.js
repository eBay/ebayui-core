import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("page-notice", () => {
    it("renders with defaults", async () => {
        const input = mock.Page;
        const { getByLabelText, getByText } = await render(template, input);

        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).toMatchSnapshot();

        const containerUsingLabel = status.closest(
            `[aria-labelledby="${status.id}"]`,
        );
        expect(containerUsingLabel).toMatchSnapshot();

        const content = getByText(input.renderBody.text);
        expect(content).toMatchSnapshot();
    });

    it("renders with custom heading tag", async () => {
        const input = mock.Page_Custom_Heading_Tag;
        const { getByText } = await render(template, input);
        const title = getByText(input.title.renderBody.text);
        expect(title).toMatchSnapshot();
    });

    it("renders with custom status type", async () => {
        const input = mock.Page_Custom_Status;
        const { getByLabelText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        const containerUsingLabel = status.closest(
            `[aria-labelledby="${status.id}"]`,
        );
        expect(containerUsingLabel).toMatchSnapshot();
    });

    it("renders with no icon", async () => {
        const input = mock.Page_Icon_Hidden;
        const { queryByLabelText } = await render(template, input);
        const statusWithIcon = queryByLabelText(input.a11yText);
        expect(statusWithIcon).toMatchSnapshot();
    });

    it("renders with footer button", async () => {
        const input = mock.Footer_Button;
        const { getByText } = await render(template, input);
        const content = getByText(input.renderBody.text);
        const footer = getByText(input.footer.renderBody.text);
        expect(content).toMatchSnapshot();
        expect(content.parentElement).toMatchSnapshot();
        expect(footer).toMatchSnapshot();
    });

    testPassThroughAttributes(template, {
        input: mock.Page,
    });
});
