import { it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";

it("renders fake link version", async () => {
    const { getByRole } = await render(template, {});

    expect(getByRole("button")).toMatchSnapshot();
});

it("renders disabled version", async () => {
    const { getByRole } = await render(template, { disabled: true });
    expect(getByRole("button")).toMatchSnapshot();
});

testPassThroughAttributes(template);
