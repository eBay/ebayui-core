import { expect, use } from "chai";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "..";
import * as mock from "./mock";

use(require("chai-dom"));

describe("dialog", () => {
    it("renders basic version", async () => {
        const input = mock.Dialog;
        const { getByRole, getByLabelText, getByText } = await render(
            template,
            input,
        );
        const dialog = getByRole("dialog", { hidden: true });

        expect(dialog).has.attr("hidden");
        expect(dialog).has.class("panel-dialog");
        expect(getByLabelText(input.a11yCloseText)).has.class(
            "panel-dialog__close",
        );
        expect(getByText(input.renderBody.text)).has.class(
            "panel-dialog__main",
        );
    });

    it("renders with header and footer", async () => {
        const input = mock.headerFooterDialog;
        const { getByRole, getByLabelText, getByText } = await render(
            template,
            input,
        );
        const dialog = getByRole("dialog", { hidden: true });

        expect(dialog).has.attr("hidden");
        expect(dialog).has.class("panel-dialog");
        expect(getByLabelText(input.a11yCloseText)).has.class(
            "panel-dialog__close",
        );
        expect(getByText(input.renderBody.text)).has.class(
            "panel-dialog__main",
        );
        expect(getByText(input.header.renderBody.text).parentElement).has.class(
            "panel-dialog__header",
        );
        expect(getByText(input.footer.renderBody.text)).has.class(
            "panel-dialog__footer",
        );
    });

    it("renders in open state", async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole("dialog")).does.not.have.attr("hidden");
    });

    it(`renders with end type`, async () => {
        const { getByRole } = await render(template, {
            position: "end",
            open: true,
        });
        const $dialog = getByRole("dialog");
        const $window = $dialog.children[0];

        expect($dialog).has.class("panel-dialog--mask-fade-slow");
        expect($window).has.class("panel-dialog__window--end");
        expect($window).has.class("panel-dialog__window--slide");
    });

    testPassThroughAttributes(template);
});
