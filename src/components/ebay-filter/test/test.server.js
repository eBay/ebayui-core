import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import template from "../index.marko";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import * as mock from "./mock";

describe("filter", () => {
    it("renders defaults", async () => {
        const input = mock.Basic;
        const { getByRole } = await render(template, input);
        const filterEl = getByRole("button");
        expect(filterEl).toMatchSnapshot();
    });

    it("renders with pressed attribute", async () => {
        const input = mock.Selected;
        const { getByRole } = await render(template, input);
        expect(getByRole("button")).toMatchSnapshot();
    });

    it("renders without pressed attribute", async () => {
        const input = mock.withOutPressed;
        const { getByRole } = await render(template, input);
        expect(getByRole("button")).toMatchSnapshot();
    });

    it("renders with disabled attribute", async () => {
        const input = mock.Disabled;
        const { getByRole } = await render(template, input);
        expect(getByRole("button")).toMatchSnapshot();
    });

    it("renders fake version", async () => {
        const input = mock.Fake;
        const { getByText } = await render(template, input);
        const filterTextEl = getByText(input.renderBody.text);
        const filterEl = filterTextEl.closest("a");
        expect(filterEl).toMatchSnapshot();
    });

    it("renders fake version with disabled attribute", async () => {
        const input = mock.fakeDisabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest("a")).toMatchSnapshot();
    });

    it("renders fake version with pressed attribute", async () => {
        const input = mock.fakeSelected;
        const { getByText } = await render(template, input);
        expect(getByText(input.renderBody.text).closest("a")).toMatchSnapshot();
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole("button");
        },
    });
});
