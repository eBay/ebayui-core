import { it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";

it("renders default switch", async () => {
    const { getByRole } = await render(template);
    const switchControl = getByRole("switch");
    expect(switchControl.parentElement).toMatchSnapshot();
    expect(switchControl.nextElementSibling).toMatchSnapshot();
    expect(switchControl).toMatchSnapshot();
});

it("renders disabled switch", async () => {
    const { getByRole } = await render(template, { disabled: true });
    const switchControl = getByRole("switch");
    expect(switchControl).toMatchSnapshot();
});

testPassThroughAttributes(template, {
    getClassAndStyleEl(component) {
        return component.getByRole("switch").parentElement;
    },
});
