import { expect, use } from "chai";
import chaiDom from "chai-dom";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../education-notice.stories"; // import all stories from the stories file
const { WithDismiss } = composeStories(stories);

use(chaiDom);
afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("education-notice with dismiss", () => {
    beforeEach(async () => {
        component = await render(WithDismiss);
    });

    it("Should exist on the document", () => {
        expect(component.getByRole("region")).to.not.equal(null);
    });

    describe("when dismiss is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText("Dismiss Notice"));
        });

        it("then it emits the event with correct data", () => {
            expect(component.emitted("dismiss")).has.length(1);
            expect(component.queryByRole("region")).to.equal(null);
        });
    });
});
