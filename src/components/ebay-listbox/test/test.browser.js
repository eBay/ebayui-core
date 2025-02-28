import {
    afterEach,
    beforeEach,
    afterAll,
    beforeAll,
    describe,
    it,
    expect,
} from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import { pressKey } from "../../../common/test-utils/browser";
import * as stories from "../listbox.stories";

const { Standard } = composeStories(stories);

const options = Standard.args.option;
options[0] = Object.assign({ selected: true }, options[0]);

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

// Tests are rendered in a form so that we can check the form data value.
const form = document.createElement("form");
beforeAll(() => document.body.appendChild(form));
afterAll(() => document.body.removeChild(form));

describe("given the listbox with 3 items", () => {
    beforeEach(async () => {
        component = await render(
            Standard,
            {
                options,
                listSelection: "auto",
                name: "listbox-name",
            },
            {
                container: form,
            },
        );
    });

    it("then the native select should be initialized to the first option value", () => {
        expect(form.elements)
            .has.property("listbox-name")
            .with.property("value", options[0].value);
    });

    describe("when the down arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: "ArrowDown",
                keyCode: 40,
            });
        });

        it("then it emits the change event with the correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("index", 1);
            expect(changeEvent)
                .has.property("selected")
                .and.is.deep.equal([options[1].value]);
        });

        describe("when the up arrow key is pressed", () => {
            beforeEach(async () => {
                component.emitted("change");
                await pressKey(
                    component.getAllByRole("listbox").find(isVisible),
                    {
                        key: "ArrowUp",
                        keyCode: 38,
                    },
                );
            });

            it("then it emits the change event with the correct data", () => {
                const changeEvents = component.emitted("change");
                expect(changeEvents).has.length(1);

                const [[changeEvent]] = changeEvents;
                expect(changeEvent).has.property("index", 0);
                expect(changeEvent)
                    .has.property("selected")
                    .and.is.deep.equal([options[0].value]);
            });
        });
    });
});

describe("given the listbox with manual selection", () => {
    beforeEach(async () => {
        component = await render(
            Standard,
            { options, name: "listbox-name" },
            { container: form },
        );
    });

    describe("when an option is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(options[1].text));
        });

        it("then it emits the change event with correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("index", 1);
            expect(changeEvent)
                .has.property("selected")
                .and.is.deep.equal([options[1].value]);
        });
    });

    describe("when the down arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: "ArrowDown",
                keyCode: 40,
            });
        });

        it("then it does not emit the change event", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(0);
        });
    });

    describe("when the down arrow key is pressed with space", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: "ArrowDown",
                keyCode: 40,
            });
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: " ",
                keyCode: 32,
            });
        });

        it("then it emits the change event with the correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("index", 1);
            expect(changeEvent)
                .has.property("selected")
                .and.is.deep.equal([options[1].value]);
        });
    });
});

describe("given the listbox with disabled option", () => {
    beforeEach(async () => {
        options[1] = Object.assign({ disabled: true }, options[1]);
        component = await render(
            Standard,
            {
                option: options,
                name: "listbox-name",
            },
            {
                container: form,
            },
        );
    });

    describe("when disabled option is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(options[1].text));
        });

        it("then does not emit the change event with correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(0);
        });
    });

    describe("when the down arrow key is pressed", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: "ArrowDown",
                keyCode: 40,
            });
        });

        it("then it does not emit the change event", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(0);
        });
    });

    describe("when the down arrow key is pressed with space", () => {
        beforeEach(async () => {
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: "ArrowDown",
                keyCode: 40,
            });
            await pressKey(component.getAllByRole("listbox").find(isVisible), {
                key: " ",
                keyCode: 32,
            });
        });

        it("then it emits the change event with the correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).has.length(1);

            const [[changeEvent]] = changeEvents;
            expect(changeEvent).has.property("index", 2);
            expect(changeEvent)
                .has.property("selected")
                .and.is.deep.equal([options[2].value]);
        });
    });
});

function isVisible(el) {
    return !el.hasAttribute("hidden") && !el.closest("[hidden]");
}
