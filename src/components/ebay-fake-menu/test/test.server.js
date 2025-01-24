import { render } from "@marko/testing-library";
import { describe, it, expect } from "vitest";
import template from "../index.marko";
import * as testUtils from "../../../common/test-utils/server";
import * as mock from "./mock";

describe("fake-menu", () => {
    it("renders base version", async () => {
        const input = mock.basic2Items;
        const { getByText } = await render(template, input);

        input.item.forEach((item) => {
            expect(
                getByText(item.renderBody.text).closest(".fake-menu__item"),
            ).toMatchSnapshot();
        });
    });

    it("renders with reverse=true", async () => {
        const input = Object.assign({ reverse: true }, mock.basic2Items);
        const { getByText } = await render(template, input);
        expect(
            getByText(input.item[0].renderBody.text).closest(
                ".fake-menu__menu--reverse",
            ),
        ).toMatchSnapshot();
    });

    it("renders with fix-width=true", async () => {
        const input = Object.assign({ fixWidth: true }, mock.basic2Items);
        const { getByText } = await render(template, input);
        expect(
            getByText(input.item[0].renderBody.text).closest(
                ".fake-menu__menu--fix-width",
            ),
        ).toMatchSnapshot();
    });

    it("renders with separators", async () => {
        const input = mock.separator4Items;
        const { queryByText, getAllByRole } = await render(template, input);
        const separators = getAllByRole("separator");
        input.item.forEach((item) => {
            if (item.separator) {
                const menuItemEl = separators.shift();
                const textEl = queryByText(item.renderBody.text);
                expect(textEl).toMatchSnapshot();
                expect(menuItemEl).toMatchSnapshot();
            }
        });
    });

    it("renders with aria-current=true", async () => {
        const input = mock.a11yCurrentTrue;
        const { getByText } = await render(template, input);
        const item = input.item[0];
        const container = getByText(item.renderBody.text);
        expect(container.parentElement).toMatchSnapshot();
    });

    testUtils.testPassThroughAttributes(template);
    testUtils.testPassThroughAttributes(template, {
        child: {
            input: {
                type: "button",
            },
            name: "item",
            multiple: true,
        },
    });
});
