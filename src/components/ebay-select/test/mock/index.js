/* eslint camelcase: "off" */
import { getNItems } from '../../../../common/test-utils/shared';

export const basic0Options = {
    options: [],
};

export const basic3Options = {
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
    })),
};

export const basic3OptionsWithBlank = {
    options: getNItems(4, (i) => ({
        value: i === 0 ? '' : String(i),
        text: `option ${i}`,
    })),
};

export const Borderless_3Options = Object.assign({}, basic3Options, {
    borderless: true,
});

export const basic3Options1Selected = {
    options: getNItems(3, (i) => ({
        value: String(i),
        text: `option ${i}`,
        selected: i === 1,
    })),
};

export const floatingLabel_Always = Object.assign({}, basic3Options, {
    floatingLabel: 'Email address',
});

export const floatingLabel = Object.assign({}, basic3OptionsWithBlank, {
    floatingLabel: 'Email address',
});

export const floatingLabelNoValue = Object.assign({}, floatingLabel, {
    value: undefined,
});

export const floatingLabelWithId = Object.assign({}, floatingLabel, {
    id: 'select-id',
});

export const floatingLabelDisabled = Object.assign({}, floatingLabel, {
    disabled: true,
});
