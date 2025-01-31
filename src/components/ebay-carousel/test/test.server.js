import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import template from "../index.marko";
import * as mock from "./mock";

describe("carousel", () => {
    describe("with discrete items per slide", () => {
        it("renders base version", async () => {
            const input = mock.discrete1PerSlide3Items;
            const { queryByText, getByRole } = await render(template, input);

            expect(getByRole("group")).toMatchSnapshot();

            input.item.forEach((item) =>
                expect(queryByText(item.renderBody.text)).toMatchSnapshot(),
            );
        });

        describe("with hidden scrollbar", () => {
            it("renders", async () => {
                const input = Object.assign({}, mock.discrete1PerSlide3Items, {
                    hiddenScrollbar: true,
                });
                const { getByRole } = await render(template, input);

                expect(getByRole("group")).toMatchSnapshot();
            });
        });

        it("renders without any provided items", async () => {
            const input = mock.discrete1PerSlide0Items;
            const { getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).toMatchSnapshot();
            expect(getByLabelText(input.a11yNextText)).toMatchSnapshot();
        });

        describe("with autoplay enabled", () => {
            it("renders base version", async () => {
                const input = mock.discrete1PerSlide3ItemsAutoPlay;
                const { queryByLabelText } = await render(template, input);

                expect(queryByLabelText(input.a11yPauseText)).toMatchSnapshot();
            });

            it("renders paused version", async () => {
                const input = Object.assign(
                    {},
                    mock.discrete1PerSlide3ItemsAutoPlay,
                    {
                        paused: true,
                    },
                );
                const { queryByLabelText } = await render(template, input);

                expect(queryByLabelText(input.a11yPlayText)).toMatchSnapshot();
            });
        });
    });

    describe("without items per slide (continuous)", () => {
        it("renders base version", async () => {
            const input = mock.continuous6Items;
            const { queryByText, queryByLabelText, getByLabelText } =
                await render(template, input);

            // Also it should not have the dot controls.
            expect(queryByLabelText(/go to slide/)).toMatchSnapshot();

            // Controls should not be linked to the status text (slide x of y).
            expect(getByLabelText(input.a11yPreviousText)).toMatchSnapshot();
            expect(getByLabelText(input.a11yNextText)).toMatchSnapshot();

            input.item.forEach((item) =>
                expect(queryByText(item.renderBody.text)).toMatchSnapshot(),
            );
        });

        it("renders without any provided items", async () => {
            const input = mock.continuous0Items;
            const { getByLabelText } = await render(template, input);

            expect(getByLabelText(input.a11yPreviousText)).toMatchSnapshot();
            expect(getByLabelText(input.a11yNextText)).toMatchSnapshot();
        });
    });

    testPassThroughAttributes(template);
    testPassThroughAttributes(template, {
        child: {
            name: "item",
            multiple: true,
        },
    });
});
