/* eslint camelcase: "off" */
import { getNItems } from "../../../../common/test-utils/shared";

export const basic0Options = {
    name: "listbox-name",
    buttonName: "listbox-button-name",
    option: [],
};

export const basic3Optionsfluid = {
    name: "listbox-name",
    fluid: true,
    option: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3Optionstruncated = {
    name: "listbox-name",
    truncate: true,
    option: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3Options = {
    name: "listbox-name",
    buttonName: "listbox-button-name",
    option: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3OptionsFirstSelected = {
    name: "listbox-name",
    buttonName: "listbox-button-name",
    option: getNItems(3, (i) => ({
        selected: i === 0,
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3Options1Selected = {
    name: "listbox-name",
    option: getNItems(3, (i) => ({
        value: String(i),
        selected: i === 1,
        text: `option ${i}`,
    })),
};
