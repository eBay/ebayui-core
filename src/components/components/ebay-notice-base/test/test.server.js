import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("notice-icon", () => {
    it("renders basic version", async () => {
        const input = mock.defaultNotice;
        const { getByLabelText, getByText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).toMatchSnapshot();

        const containerUsingLabel = status.closest(
            `[aria-labelledby="${status.id}"]`,
        );
        expect(containerUsingLabel).toMatchSnapshot();

        const content = getByText(input.renderBody.text);
        expect(content).toMatchSnapshot();

        expect(getByLabelText(input.a11yText)).toMatchSnapshot();
    });

    it("renders inline version", async () => {
        const input = mock.inlineNotice;
        const { getByLabelText } = await render(template, input);

        const status = getByLabelText(input.a11yText).parentElement;
        expect(status.parentElement).toMatchSnapshot();

        expect(getByLabelText(input.a11yText)).toMatchSnapshot();
    });

    it("renders title and footer version", async () => {
        const input = mock.titleFooterNotice;
        const { getByLabelText, getByText } = await render(template, input);

        const status = getByLabelText(input.a11yText).parentElement;
        const containerUsingLabel = status.closest(
            `[aria-labelledby="${status.id}"]`,
        );
        expect(containerUsingLabel).toMatchSnapshot();

        const content = getByText(input.renderBody.text);
        expect(content).toMatchSnapshot();

        const footer = getByText(input.footer.renderBody.text);
        expect(footer).toMatchSnapshot();

        const title = getByText(input.title.renderBody.text);
        expect(title).toMatchSnapshot();
    });

    it("renders education notice", async () => {
        const input = mock.educationSectionNotice;
        const { getByLabelText } = await render(template, input);
        const status = getByLabelText(input.a11yText).parentElement;
        expect(status).toMatchSnapshot();

        const containerUsingLabel = status.closest(
            `[aria-labelledby="${status.id}"]`,
        );
        expect(containerUsingLabel).toMatchSnapshot();

        expect(getByLabelText(input.a11yText)).toMatchSnapshot();
    });

    testPassThroughAttributes(template, {
        input: mock.defaultNotice,
    });
});
