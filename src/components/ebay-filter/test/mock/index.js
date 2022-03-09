import { createRenderBody } from '../../../../common/test-utils/shared';

export const Basic = {
    renderBody: createRenderBody('text'),
};

export const Selected = Object.assign({}, Basic, {
    selected: true,
});

export const Disabled = Object.assign({}, Basic, {
    disabled: true,
});

export const Fake = Object.assign({}, Basic, {
    href: '#fake',
});

export const fakeSelected = Object.assign({}, Fake, {
    selected: true,
    a11ySelectedText: 'Selected Filter',
});

export const fakeDisabled = Object.assign({}, Fake, {
    disabled: true,
});
