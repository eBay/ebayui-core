import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("dialog-base", () => {
    it("renders basic version", async () => {
        const input = mock.dialog;
        const { getByRole, getByLabelText, getByText } = await render(
            template,
            input,
        );

        expect(getByRole("dialog", { hidden: true })).toMatchSnapshot();
        expect(getByLabelText(input.a11yCloseText)).toMatchSnapshot();
        expect(getByText(input.renderBody.text)).toMatchSnapshot();
    });

    it("renders with header and footer", async () => {
        const input = mock.headerFooterDialog;
        const { getByRole, getByLabelText, getByText } = await render(
            template,
            input,
        );

        expect(getByRole("dialog", { hidden: true })).toMatchSnapshot();
        expect(getByLabelText(input.a11yCloseText)).toMatchSnapshot();
        expect(getByText(input.renderBody.text)).toMatchSnapshot();
        expect(getByText(input.header.renderBody.text)).toMatchSnapshot();
        expect(
            getByText(input.header.renderBody.text).parentElement,
        ).toMatchSnapshot();
    });

    it("renders in open state", async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole("dialog")).toMatchSnapshot();
    });

    it("renders non modal", async () => {
        const input = mock.dialog;
        const { getByRole } = await render(
            template,
            Object.assign({}, input, { isModal: false }),
        );
        expect(getByRole("dialog", { hidden: true })).toMatchSnapshot();
    });

    testPassThroughAttributes(template);
});
