/* eslint camelcase: "off" */
import { getNItems } from '../../../../common/test-utils/shared';

export const basic0Options = {
    name: 'listbox-name',
    buttonName: 'listbox-button-name',
    options: [],
};

export const basic3Optionsfluid = {
    name: 'listbox-name',
    fluid: true,
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3Optionstruncated = {
    name: 'listbox-name',
    truncate: true,
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3Options = {
    name: 'listbox-name',
    buttonName: 'listbox-button-name',
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3OptionsFirstSelected = {
    name: 'listbox-name',
    buttonName: 'listbox-button-name',
    options: getNItems(3, (i) => ({
        selected: i === 0,
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3Options1Selected = {
    name: 'listbox-name',
    options: getNItems(3, (i) => ({
        value: String(i),
        selected: i === 1,
        text: `option ${i}`,
    })),
};
