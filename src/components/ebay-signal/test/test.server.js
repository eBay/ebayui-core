import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import template from "../index.marko";
import * as mock from "./mock";

describe("signal", () => {
    it("renders neutral version when no type is specified", async () => {
        const input = mock.Basic;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).toMatchSnapshot();
    });

    it("renders recent version", async () => {
        const input = mock.basicRecent;
        const { getByText } = await render(template, input);
        const el = getByText(/recent/i);

        expect(el).toMatchSnapshot();
    });

    it("renders time sensitive version", async () => {
        const input = mock.basicTimeSensitive;
        const { getByText } = await render(template, input);
        const el = getByText(/time sensitive/i);

        expect(el).toMatchSnapshot();
    });

    it("renders trustworthy version", async () => {
        const input = mock.basicTrustworthy;
        const { getByText } = await render(template, input);
        const el = getByText(/trustworthy/i);

        expect(el).toMatchSnapshot();
    });

    it("renders neutral version", async () => {
        const input = mock.basicNeutral;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).toMatchSnapshot();
    });

    it("renders with custom class", async () => {
        const input = mock.basicWithClass;
        const { getByText } = await render(template, input);
        const el = getByText(/neutral/i);

        expect(el).toMatchSnapshot();
    });
});
