import { createRenderBody, getNItems } from '../../../../common/test-utils/shared';

function getType(i) {
    switch (i) {
        case 3:
            return 'attention';
        case 4:
            return 'information';
        default:
            return null;
    }
}

export const WizardStepper = {
    step: getNItems(4, (i) => ({
        current: i === 2,
        renderBody: createRenderBody(`status ${i}`),
    })),
};

export const stepperVertical = Object.assign({}, WizardStepper, {
    direction: 'column',
});

export const stepperStates = {
    step: getNItems(6, (i) => ({
        current: i === 1,
        type: getType(i),
        number: i === 5 ? 3 : null,
        renderBody: createRenderBody(`status ${i}`),
    })),
};
