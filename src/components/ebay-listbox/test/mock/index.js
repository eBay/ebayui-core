import { getNItems } from '../../../../common/test-utils/shared';

export const basic0Options = {
    options: [],
};

export const basic3Options = {
    name: 'listbox-name',
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3OptionsFirstSelected = {
    name: 'listbox-name',
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
