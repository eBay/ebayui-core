import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { fastAnimations } from "../../../common/test-utils/browser";
import template from "../index.marko";
import * as mock from "./mock";

beforeAll(() => fastAnimations.start());
afterAll(() => fastAnimations.stop());
afterEach(cleanup);
let component;

describe("given the details is in the default state", () => {
    const input = mock.Default_Details;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("should render with open false", () => {
        expect(
            component
                .getByText(input.summary.renderBody.text)
                .closest("details").open,
        ).to.equal(false);
    });
});

describe("given the details is in the open state", () => {
    const input = mock.Open_Details;

    beforeEach(async () => {
        component = await render(template, input);
    });

    it("should render with open false", () => {
        expect(
            component
                .getByText(input.summary.renderBody.text)
                .closest("details").open,
        ).to.equal(true);
    });
});

describe("given the details is in the default state and click is triggered", () => {
    const input = mock.Default_Details;
    const detailsText = input.summary.renderBody.text;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("click on details", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(detailsText));
        });

        it("then it emits the toggle and click", async () => {
            verifyToggleEvent();
            verifyClickEvent();
        });
    });
});

describe("given the details is in the open state and click is triggered", () => {
    const input = mock.Open_Details;
    const detailsText = input.summary.renderBody.text;

    beforeEach(async () => {
        component = await render(template, input);
    });

    describe("click on details", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(detailsText));
        });

        it("then it emits the toggle and click", async () => {
            verifyToggleEvent();
            verifyClickEvent();
        });
    });
});

function verifyToggleEvent() {
    const toggleEvent = component.emitted("toggle");
    expect(toggleEvent.length).to.be.greaterThan(0);

    const [eventArg] = toggleEvent.pop();
    expect(eventArg).has.property("open");
    expect(eventArg).has.property("originalEvent").is.an.instanceOf(Event);
}

function verifyClickEvent() {
    const toggleEvent = component.emitted("click");
    expect(toggleEvent).to.length(1);
    const [[eventArg]] = toggleEvent;
    expect(eventArg).has.property("originalEvent").is.an.instanceOf(Event);
}
