const assign = require('core-js-pure/features/object/assign');
const { createRenderBody, getNItems } = require('../../../../common/test-utils/shared');

function getType(i) {
    switch (i) {
        case 3: return 'attention';
        case 4: return 'information';
        default: return null;
    }
}

exports.ProgressStepper = {
    step: getNItems(4, i => ({
        current: i === 2,
        renderBody: createRenderBody(`status ${i}`)
    }))
};

exports.ProgressStepper_NoCurrent = {
    step: getNItems(4, i => ({
        renderBody: createRenderBody(`status ${i}`)
    }))
};

exports.ProgressStepper_Vertical = assign({}, exports.ProgressStepper, {
    direction: 'column'
});

exports.ProgressStepper_States = {
    step: getNItems(5, i => ({
        current: i === 1,
        type: getType(i),
        renderBody: createRenderBody(`status ${i}`)
    }))
};
