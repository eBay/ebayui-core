import { composeStories } from "@storybook/marko";
import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../star-rating-select.stories";

const { Isolated } = composeStories(stories);

afterEach(cleanup);

let component;

describe("given star rating", () => {
    beforeEach(async () => {
        component = await render(Isolated);
        await fireEvent.click(component.getByLabelText("2 stars"));
    });

    it("then it emits the event", () => {
        const changeEvents = component.emitted("change");
        expect(changeEvents).has.length(1);

        const eventArgs = changeEvents[0];
        expect(eventArgs).has.length(1);
        expect(eventArgs[0].originalEvent).to.be.an.instanceof(Event);
        expect(eventArgs[0].value).to.equal(2);
    });

    describe("when star is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText("4 stars"));
        });

        it("then it emits the event", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(2);

            const eventArgs = changeEvents[1];
            expect(eventArgs).has.length(1);
            expect(eventArgs[0].originalEvent).to.be.an.instanceof(Event);
            expect(eventArgs[0].value).to.equal(4);
        });
    });
});

describe("given star is disabled", () => {
    beforeEach(async () => {
        component = await render(Isolated, { disabled: true });
    });

    describe("when star is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByLabelText("2 stars"));
        });

        it("then it doesn't emit the event", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(0);
        });
    });
});

describe("when native focus event is fired on star", () => {
    beforeEach(async () => {
        component = await render(Isolated);
        await fireEvent.focus(component.getByLabelText("2 stars"));
    });

    it("then it emits the event", () => {
        const events = component.emitted("focus");
        expect(events).has.length(1);

        const [[eventArg]] = events;
        expect(eventArg).has.property("originalEvent").is.an.instanceOf(Event);
        expect(eventArg.value).to.equal(2);
    });
});

describe("when native keyboard event is fired on star", () => {
    beforeEach(async () => {
        component = await render(Isolated);
        await fireEvent.keyDown(component.getByLabelText("5 stars"));
    });

    it("then it emits the event", () => {
        const events = component.emitted("keydown");
        expect(events).has.length(1);

        const [[eventArg]] = events;
        expect(eventArg).has.property("originalEvent").is.an.instanceOf(Event);
        expect(eventArg.value).to.equal(5);
    });
});
