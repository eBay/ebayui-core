import { getNItems } from '../../../../common/test-utils/shared';

export const combobox0Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: [],
};

export const combobox3Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const combobox3Options2Selected = Object.assign({}, combobox3Options, {
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
        selected: i === 1,
    })),
});

export const combobox3OptionsBorderless = Object.assign({}, combobox3Options, {
    borderless: true,
});

export const combobox3OptionsDisabled = Object.assign({}, combobox3Options, {
    disabled: true,
});
