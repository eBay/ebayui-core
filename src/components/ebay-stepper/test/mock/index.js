const assign = require('core-js-pure/features/object/assign');
const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

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

exports.WizardStepper = {
    step: getNItems(4, (i) => ({
        current: i === 2,
        renderBody: createRenderBody(`status ${i}`),
    })),
};

exports.WizardStepper_Vertical = assign({}, exports.WizardStepper, {
    direction: 'column',
});

exports.WizardStepper_States = {
    step: getNItems(6, (i) => ({
        current: i === 1,
        type: getType(i),
        number: i === 5 ? 3 : null,
        renderBody: createRenderBody(`status ${i}`),
    })),
};
