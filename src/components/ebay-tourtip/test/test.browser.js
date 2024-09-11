import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../tourtip.stories";

const { Standard } = composeStories(stories);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given the default tourtip", () => {
    beforeEach(async () => {
        component = await render(Standard);
    });

    thenItIsOpen();
    thenItCanBeClosed();

    describe("after it is rerendered", () => {
        beforeEach(async () => {
            component = await render(Standard, { open: true });
        });

        thenItIsOpen();
        thenItCanBeClosed();
        thenIthasHeading();
    });

    function thenItIsOpen() {
        it("then it is open", () => {
            expect(component.queryByRole("region")).to.not.equal(null);
        });
    }

    function thenItCanBeClosed() {
        describe("when the close button is clicked", () => {
            beforeEach(async () => {
                await fireEvent.click(component.getByLabelText("close"));
            });

            it("then it emits the collapse event", () => {
                expect(component.emitted("collapse")).has.length(1);
            });

            it("then it is closed", () => {
                expect(component.queryByRole("region")).to.equal(null);
            });
        });
    }

    function thenIthasHeading() {
        it("then it has the right heading", () => {
            expect(component.getByText("Important").tagName).equal("H2");
        });
    }
});
