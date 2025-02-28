import { afterEach, beforeEach, describe, it, expect } from "vitest";
import { composeStories } from "@storybook/marko";
import { render, fireEvent, cleanup } from "@marko/testing-library";
import * as stories from "../filter-menu-button.stories";
import { pressKey } from "../../../common/test-utils/browser";
import { addRenderBodies } from "../../../common/storybook/utils";

const { Default, WithFooter } = composeStories(stories);

const items = [...Default.args.item];

afterEach(cleanup);

/** @type import("@marko/testing-library").RenderResult */
let component;

describe("given the filter menu is in the default state", () => {
    let filterButton;

    beforeEach(async () => {
        component = await render(Default);
        filterButton = component.getAllByRole("button")[0];
    });

    describe("when the button is clicked once", () => {
        beforeEach(async () => {
            await fireEvent.click(filterButton);
        });

        it("then it expands", async () => {
            expect(filterButton).toHaveAttribute("aria-expanded", "true");
        });

        it("then it emits the marko event from expander-expand", () => {
            expect(component.emitted("expand")).has.length(1);
        });

        describe("when it is clicked again", () => {
            beforeEach(async () => {
                await fireEvent.click(filterButton);
            });

            it("then it collapses", async () => {
                expect(filterButton).toHaveAttribute("aria-expanded", "false");
            });

            it("then it emits the marko event from expander-collapse", () => {
                expect(component.emitted("collapse")).has.length(1);
            });
        });
    });

    describe("when re-rendered with expanded set to false", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    expanded: false,
                }),
            );
        });

        it("then it remains collapsed", () => {
            expect(filterButton).toHaveAttribute("aria-expanded", "false");
        });

        it("then it doesn't emit the marko collapse event", () => {
            expect(component.emitted("collapse")).has.length(0);
        });
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip("when re-rendered with expanded set to true", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    expanded: true,
                }),
            );
        });

        it("then it expands", () => {
            expect(filterButton).toHaveAttribute("aria-expanded", "true");
        });

        it("then it emits the menu-expand event", () => {
            expect(component.emitted("expand")).has.length(1);
        });
    });
});

describe("given the menu is in the expanded state", () => {
    const firstItemText = items[0].renderBody;
    let filterButton, footerButton, firstItem, secondItem;

    beforeEach(async () => {
        component = await render(WithFooter);
        filterButton = component.getAllByRole("button")[0];
        footerButton = component.getAllByRole("button", { hidden: true })[1];
        firstItem = component.getAllByRole("menuitemcheckbox", {
            hidden: true,
        })[0];
        secondItem = component.getAllByRole("menuitemcheckbox", {
            hidden: true,
        })[1];
        await fireEvent.click(filterButton);
        expect(component.emitted("expand")).has.length(1);
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip("when re-rendered with expanded set to true", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    expanded: true,
                }),
            );
        });

        it("then it remains expanded", () => {
            expect(filterButton).toHaveAttribute("aria-expanded", "true");
        });

        it("then it doesn't emit the marko expand event", () => {
            expect(component.emitted("expand")).has.length(0);
        });
    });

    // TODO: we should make the `expanded` property controllable via input.
    describe.skip("when re-rendered with expanded set to false", () => {
        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, addRenderBodies(Default.args), {
                    expanded: false,
                }),
            );
        });

        it("then it expands", () => {
            expect(filterButton).toHaveAttribute("aria-expanded", "false");
        });

        it("then it emits the expand event", () => {
            expect(component.emitted("collapse")).has.length(1);
        });
    });

    describe("when an item is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
        });

        it("then it emits the change event with correct data", () => {
            const selectEvents = component.emitted("change");
            expect(selectEvents).to.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg)
                .has.property("el")
                .toHaveTextContent(firstItemText);
            expect(eventArg).has.property("checked").to.deep.equal(["item 1"]);
            expect(eventArg).has.property("currentChecked").to.equal(true);
            expect(eventArg).has.property("index").to.equal(0);
        });
    });

    describe("when two items are clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(secondItem);
        });

        it("then it emits two menu-change events with correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).to.have.length(2);

            const [firstEventData, secondEventData] = changeEvents.flat();
            expect(firstEventData).has.property("el", firstItem);
            expect(secondEventData).has.property("el", secondItem);
            expect(firstEventData)
                .has.property("currentChecked")
                .to.equal(true);
            expect(secondEventData)
                .has.property("currentChecked")
                .to.equal(true);
            expect(firstEventData).has.property("index").to.equal(0);
            expect(secondEventData).has.property("index").to.equal(1);
        });

        it("then both items are selected", () => {
            expect(firstItem).toHaveAttribute("aria-checked", "true");
            expect(secondItem).toHaveAttribute("aria-checked", "true");
        });
    });

    describe("when an item is checked and then unchecked", () => {
        beforeEach(async () => {
            await fireEvent.click(firstItem);
            await fireEvent.click(firstItem);
        });

        it("then it emits the change events with correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).to.have.length(2);

            const [firstEventData, secondEventData] = changeEvents.flat();
            expect(firstEventData)
                .has.property("checked")
                .to.deep.equal(["item 1"]);
            expect(secondEventData).has.property("checked").to.deep.equal([]);
            expect(firstEventData)
                .has.property("currentChecked")
                .to.equal(true);
            expect(secondEventData)
                .has.property("currentChecked")
                .to.equal(false);
            expect(firstEventData).has.property("index").to.equal(0);
            expect(secondEventData).has.property("index").to.equal(0);
        });

        it("then the item is unchecked", () => {
            expect(firstItem).toHaveAttribute("aria-checked", "false");
        });
    });

    describe("when an item is checked via the keyboard", () => {
        beforeEach(async () => {
            await pressKey(firstItem, {
                key: " ",
                keyCode: 32,
            });
        });

        it("then it emits the change events with correct data", () => {
            const changeEvents = component.emitted("change");
            expect(changeEvents).to.have.length(1);

            const [firstEventData] = changeEvents.flat();
            expect(firstEventData)
                .has.property("el")
                .toHaveTextContent(firstItemText);
            expect(firstEventData)
                .has.property("checked")
                .to.deep.equal(["item 1"]);
            expect(firstEventData)
                .has.property("currentChecked")
                .to.equal(true);
            expect(firstEventData).has.property("index").to.equal(0);
        });
    });

    describe("when the footer button is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(footerButton);
        });

        it("then it emits the footer-click event", () => {
            const changeEvents = component.emitted("footer-click");
            expect(changeEvents).to.have.length(1);
            expect(filterButton).toHaveAttribute("aria-expanded", "false");
        });
    });

    describe("when an item is added via input from its parent and the new item is clicked", () => {
        const newItems = addRenderBodies([
            ...items,
            {
                value: "item 4",
                renderBody: `item 4`,
            },
        ]);
        const fourthItem = "item 4";

        beforeEach(async () => {
            await component.rerender(
                Object.assign({}, Default.args, { item: newItems }),
            );
            await fireEvent.click(component.getByText(fourthItem));
        });

        it("then it uses the new input in event data", () => {
            const selectEvents = component.emitted("change");
            expect(selectEvents).has.length(1);

            const [[eventArg]] = selectEvents;
            expect(eventArg).has.property("checked").to.deep.equal(["item 4"]);
            expect(eventArg).has.property("currentChecked").to.equal(true);
            expect(eventArg).has.property("index").to.equal(3);
        });
    });
});

describe("given the menu item is disabled", () => {
    const firstItemText = items[0].renderBody;

    beforeEach(async () => {
        items[0] = Object.assign({}, items[0], { disabled: true });

        component = await render(Default, { item: addRenderBodies(items) });
    });

    describe("when an item is clicked", () => {
        beforeEach(async () => {
            await fireEvent.click(component.getByText(firstItemText));
        });

        it("then it does not emit the change event with correct data", () => {
            const selectEvents = component.emitted("change");
            expect(selectEvents).to.length(0);
        });
    });
});
