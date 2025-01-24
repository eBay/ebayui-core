import { describe, it, expect } from "vitest";

import { render } from "@marko/testing-library";
import { testPassThroughAttributes } from "../../../common/test-utils/server";
import * as mock from "../mock";
import template from "../index.marko";

describe("breadcrumbs", () => {
    it("renders basic structure", async () => {
        const input = mock.Links;
        const { getByLabelText, getByText } = await render(template, input);

        expect(getByLabelText(input.a11yHeadingText)).toMatchSnapshot();

        input.item.forEach((item) =>
            expect(getByText(item.renderBody.text)).toMatchSnapshot(),
        );
    });

    it("renders aria-current as location for last item without href", async () => {
        const input = mock.linkLastWithoutHREF;
        const { getByText } = await render(template, input);

        input.item.forEach((item, i) => {
            const itemEl = getByText(item.renderBody.text);
            expect(itemEl).toMatchSnapshot();
            if (item.href) {
                expect(itemEl).toMatchSnapshot();
            } else if (i === input.item.length - 1) {
                expect(itemEl).toMatchSnapshot();
            } else {
                // error state, because for this test, each item should either have an href or aria-current for the last one
                expect(true).toMatchSnapshot();
            }
        });
    });

    it("renders different heading tag when specified", async () => {
        const input = mock.linkHeadingTag;
        const { getByText } = await render(template, input);
        expect(getByText(input.a11yHeadingText)).toMatchSnapshot();
    });

    it("renders buttons when hrefs are missing", async () => {
        const input = mock.Buttons;
        const { getByText } = await render(template, input);
        input.item.forEach((item) =>
            expect(getByText(item.renderBody.text)).toMatchSnapshot(),
        );
    });
});

testPassThroughAttributes(template);
testPassThroughAttributes(template, {
    child: {
        name: "item",
        multiple: true,
    },
});
