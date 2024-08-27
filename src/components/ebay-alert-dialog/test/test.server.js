import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("dialog", () => {
    it("renders basic version", async () => {
        const input = mock.Dialog;
        const { getByRole, getByText } = await render(template, input);
        const dialog = getByRole("alertdialog", { hidden: true });

        expect(dialog).toMatchSnapshot();
        expect(getByText(input.confirmText)).toMatchSnapshot();
        expect(getByText(input.renderBody.text)).toMatchSnapshot();
    });

    it("renders in open state", async () => {
        const input = mock.dialogOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole("alertdialog")).toMatchSnapshot();
    });

    testPassThroughAttributes(template);
});
