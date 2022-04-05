/* eslint camelcase: "off" */
import { createRenderBody, getNItems } from '../../../../common/test-utils/shared';

export const combobox0Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: [],
};

export const combobox3Options = {
    name: 'test-combobox',
    autocomplete: 'list',
    options: getNItems(3, (i) => ({
        value: i,
        text: `option ${i}`,
    })),
};

export const combobox3OptionsManual = {
    name: 'test-combobox',
    autocomplete: 'list',
    listSelection: 'manual',
    options: getNItems(3, (i) => ({
        value: i,
        text: `option ${i}`,
    })),
};

export const combobox3OptionsFloatingLabel = {
    name: 'test-combobox',
    autocomplete: 'list',
    floatingLabel: 'Test',
    options: getNItems(3, (i) => ({
        value: i,
        text: `option ${i}`,
    })),
};

export const combobox3Options2Selected = Object.assign({}, combobox3Options, {
    value: combobox3Options.options[1].text,
});

export const combobox3OptionsBorderless = Object.assign({}, combobox3Options, {
    borderless: true,
});

export const combobox3OptionsActionable = Object.assign({}, combobox3Options, {
    button: {
        renderBody: createRenderBody('actionable'),
    },
});

export const combobox3OptionsActionable_No_Body = Object.assign({}, combobox3Options, {
    button: {
        ariaLabel: 'actionable label',
    },
});
