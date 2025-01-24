import { describe, it, expect } from "vitest";
import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("select", () => {
    it("renders basic version", async () => {
        const input = mock.basic3Options;
        const { getByRole, getAllByRole } = await render(template, input);
        const rootElement = getByRole("combobox").parentElement;
        const optionEls = getAllByRole("option");

        expect(rootElement).toMatchSnapshot();
        expect(rootElement).toMatchSnapshot();

        expect(optionEls).toMatchSnapshot();
        input.option.forEach((option, i) => {
            const optionEl = optionEls[i];
            expect(optionEl).toMatchSnapshot();
            expect(optionEl).toMatchSnapshot();
            expect(optionEl).toMatchSnapshot();
        });
    });

    it("renders empty", async () => {
        const input = mock.basic0Options;
        const { queryAllByRole } = await render(template, input);
        expect(queryAllByRole("combobox")).toMatchSnapshot();
        expect(queryAllByRole("option")).toMatchSnapshot();
    });

    it("renders with second item selected", async () => {
        const input = mock.basic3Options1Selected;
        const { getAllByRole } = await render(template, input);
        getAllByRole("option").forEach((optionEl) => {
            expect(optionEl).toMatchSnapshot();
        });
    });

    it("renders with borderless=true", async () => {
        const input = mock.Borderless_3Options;
        const { getByRole } = await render(template, input);
        expect(getByRole("combobox")).toMatchSnapshot();
    });

    it("renders an input select with inline floating label", async () => {
        const input = mock.floatingLabel;
        const { getByRole, getByText } = await render(template, input);
        expect(getByRole("combobox")).toMatchSnapshot();
        expect(getByText(input.floatingLabel)).toMatchSnapshot();
    });

    it("renders an input select with inline floating label and an id", async () => {
        const input = mock.floatingLabelWithId;
        const { getByLabelText } = await render(template, input);
        expect(getByLabelText(input.floatingLabel)).toMatchSnapshot();
    });

    it("renders a disabled input select with disabled floating label", async () => {
        const input = mock.floatingLabelDisabled;
        const { getByText } = await render(template, input);
        expect(getByText(input.floatingLabel)).toMatchSnapshot();
    });

    testPassThroughAttributes(template, {
        getClassAndStyleEl(component) {
            return component.getByRole("combobox").parentElement;
        },
    });
});
