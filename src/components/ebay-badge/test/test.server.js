import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";

it("renders defaults", async () => {
    const { getByText } = await render(template, { number: 5 });
    expect(getByText(/\d+/)).toMatchSnapshot();
});

it("renders number with rounded-up value", async () => {
    const { getByText } = await render(template, { number: 5.6 });
    expect(getByText(/\d+/)).toMatchSnapshot();
});

it("does not render with negative value", async () => {
    const { queryByText } = await render(template, { number: -5 });
    expect(queryByText(/\d+/)).toMatchSnapshot();
});

describe("given number is a string", () => {
    it("renders number with coerced string", async () => {
        const { getByText } = await render(template, { number: "5" });
        expect(getByText(/\d+/)).toMatchSnapshot();
    });

    it("renders number with rounded-up string", async () => {
        const { getByText } = await render(template, { number: "5.4" });
        expect(getByText(/\d+/)).toMatchSnapshot();
    });

    it("does not renders with an invalid string", async () => {
        const { queryByText } = await render(template, { number: "five" });
        expect(queryByText(/\d+/)).toMatchSnapshot();
    });

    it("does not renders with a negative string", async () => {
        const { queryByText } = await render(template, { number: "-5" });
        expect(queryByText(/\d+/)).toMatchSnapshot();
    });
});

it("truncates when the value is greater than 99", async () => {
    const { getByText } = await render(template, { number: 150 });
    expect(getByText(/\d+/)).toMatchSnapshot();
});

testPassThroughAttributes(template, { input: { number: 1 } });
