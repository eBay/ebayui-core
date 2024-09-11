import { it, expect } from "vitest";

import { render } from "@marko/testing-library";
import template from "../index.marko";
import { testPassThroughAttributes } from "../../../common/test-utils/server";

it("renders default checkbox", async () => {
    const { getByRole } = await render(template);
    const checkbox = getByRole("checkbox");

    expect(checkbox).toMatchSnapshot();
    expect(checkbox.parentElement).toMatchSnapshot();
});

it("renders disabled checkbox", async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole("checkbox")).toMatchSnapshot();
});

it("renders checkbox with id", async () => {
    const { getByRole } = await render(template, { id: "abc123" });
    expect(getByRole("checkbox")).toMatchSnapshot();
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole("checkbox").parentElement;
    },
});
