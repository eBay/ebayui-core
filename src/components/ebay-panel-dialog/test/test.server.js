import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("dialog", () => {
    it("renders basic version", async () => {
        const input = mock.Dialog;
        const { getByRole, getByLabelText, getByText } = await render(
            template,
            input,
        );
        const dialog = getByRole("dialog", { hidden: true });

        expect(dialog).toMatchSnapshot();
        expect(getByLabelText(input.a11yCloseText)).toMatchSnapshot();
        expect(getByText(input.renderBody.text)).toMatchSnapshot();
    });

    it("renders with header and footer", async () => {
        const input = mock.headerFooterDialog;
        const { getByRole, getByLabelText, getByText } = await render(
            template,
            input,
        );
        const dialog = getByRole("dialog", { hidden: true });

        expect(dialog).toMatchSnapshot();
        expect(getByLabelText(input.a11yCloseText)).toMatchSnapshot();
        expect(getByText(input.renderBody.text)).toMatchSnapshot();
        expect(
            getByText(input.header.renderBody.text).parentElement,
        ).toMatchSnapshot();
        expect(getByText(input.footer.renderBody.text)).toMatchSnapshot();
    });

    it("renders in open state", async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole("dialog")).toMatchSnapshot();
    });

    it(`renders with end type`, async () => {
        const { getByRole } = await render(template, {
            position: "end",
            open: true,
        });
        const $dialog = getByRole("dialog");
        const $window = $dialog.children[0];

        expect($dialog).toMatchSnapshot();
        expect($window).toMatchSnapshot();
    });

    testPassThroughAttributes(template);
});
