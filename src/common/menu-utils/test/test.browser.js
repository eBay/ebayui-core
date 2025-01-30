import { beforeEach, describe, it, expect, vi } from "vitest";
import setupMenu from "../";
import { getNItems } from "../../test-utils/shared";

describe("non radio component", () => {
    const input = {
        type: "checkbox",
        item: getNItems(3, (i) => ({
            value: `item ${i}`,
            checked: i === 2,
        })),
    };
    let menu;

    beforeEach(() => {
        menu = {
            input,
            setStateDirty: vi.fn(),
        };
        setupMenu(menu);
        menu.state = menu.getInputState(input);
    });

    it("check initial state", () => {
        expect(menu.state.checkedItems).to.deep.equal([false, false, true]);
        expect(menu.isChecked(1)).to.equal(false);
        expect(menu.isChecked(2)).to.equal(true);
        expect(menu.getCheckedValues()).to.deep.equal(["item 2"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([2]);
    });
    it("should toggle items", () => {
        menu.toggleChecked(1);
        menu.toggleChecked(2);
        expect(menu.state.checkedItems).to.deep.equal([false, true, false]);
        expect(menu.isChecked(0)).to.equal(false);
        expect(menu.isChecked(1)).to.equal(true);
        expect(menu.isChecked(2)).to.equal(false);
        expect(menu.getCheckedValues()).to.deep.equal(["item 1"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([1]);
    });

    it("should have multiple items toggled", () => {
        menu.toggleChecked(0);
        expect(menu.state.checkedItems).to.deep.equal([true, false, true]);
        expect(menu.isChecked(0)).to.equal(true);
        expect(menu.isChecked(1)).to.equal(false);
        expect(menu.isChecked(2)).to.equal(true);
        expect(menu.getCheckedValues()).to.deep.equal(["item 0", "item 2"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([0, 2]);
    });

    it("should toggle array of items", () => {
        menu.toggleChecked([0, 2]);
        expect(menu.state.checkedItems).to.deep.equal([true, false, true]);
        expect(menu.isChecked(0)).to.equal(true);
        expect(menu.isChecked(1)).to.equal(false);
        expect(menu.isChecked(2)).to.equal(true);
        expect(menu.getCheckedValues()).to.deep.equal(["item 0", "item 2"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([0, 2]);
    });
});

describe("radio component", () => {
    const input = {
        type: "radio",
        item: getNItems(3, (i) => ({
            value: `item ${i}`,
            checked: i === 2,
        })),
    };
    let menu;

    beforeEach(() => {
        menu = {
            input,
            setStateDirty: vi.fn(),
        };
        setupMenu(menu);
        menu.state = menu.getInputState(input);
    });

    it("check initial state", () => {
        expect(menu.state.checkedIndex).to.equal(2);
        expect(menu.isChecked(1)).to.equal(false);
        expect(menu.isChecked(2)).to.equal(true);
        expect(menu.getCheckedValues()).to.deep.equal(["item 2"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([2]);
    });
    it("should toggle items", () => {
        menu.toggleChecked(1);
        expect(menu.state.checkedIndex).to.equal(1);
        expect(menu.isChecked(0)).to.equal(false);
        expect(menu.isChecked(1)).to.equal(true);
        expect(menu.isChecked(2)).to.equal(false);
        expect(menu.getCheckedValues()).to.deep.equal(["item 1"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([1]);
    });

    it("should have multiple items toggled", () => {
        menu.toggleChecked(2);
        menu.toggleChecked(1);
        menu.toggleChecked(0);
        expect(menu.state.checkedIndex).to.equal(0);
        expect(menu.isChecked(0)).to.equal(true);
        expect(menu.isChecked(1)).to.equal(false);
        expect(menu.isChecked(2)).to.equal(false);
        expect(menu.getCheckedValues()).to.deep.equal(["item 0"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([0]);
    });

    it("should toggle array of items", () => {
        menu.toggleChecked([0]);
        expect(menu.state.checkedIndex).to.equal(0);
        expect(menu.isChecked(0)).to.equal(true);
        expect(menu.isChecked(1)).to.equal(false);
        expect(menu.isChecked(2)).to.equal(false);
        expect(menu.getCheckedValues()).to.deep.equal(["item 0"]);
        expect(menu.getCheckedIndexes()).to.deep.equal([0]);
    });
});
