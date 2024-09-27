import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("toast-dialog", () => {
    it("renders basic version", async () => {
        const input = mock.Toast;
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
        const input = mock.toastOpen;
        const { getByRole } = await render(template, input);
        expect(getByRole("dialog")).toMatchSnapshot();
    });

    testPassThroughAttributes(template);
});
