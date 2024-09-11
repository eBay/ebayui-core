import { it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";

it("renders default radio", async () => {
    const { getByRole } = await render(template);
    const radioControl = getByRole("radio");
    expect(radioControl).toMatchSnapshot();
    expect(radioControl.parentElement).toMatchSnapshot();
    expect(radioControl.nextElementSibling).toMatchSnapshot();
});

it("renders disabled radio", async () => {
    const { getByRole } = await render(template, { disabled: true });
    const radioControl = getByRole("radio");
    expect(radioControl).toMatchSnapshot();
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole("radio").parentElement;
    },
});
