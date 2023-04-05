import {
    createRenderBody,
    getNItems,
} from "../../../../common/test-utils/shared";

function getType(i) {
    switch (i) {
        case 3:
            return "attention";
        case 4:
            return "information";
        default:
            return null;
    }
}

export const ProgressStepper = {
    a11yHeadingText: "shipment",
    step: getNItems(4, (i) => ({
        current: i === 2,
        a11yText: i === 3 && "a11yIconLabel",
        renderBody: createRenderBody(`status ${i}`),
    })),
};

export const progressStepperNoCurrent = {
    step: getNItems(4, (i) => ({
        renderBody: createRenderBody(`status ${i}`),
    })),
};

export const progressStepperVertical = Object.assign({}, ProgressStepper, {
    direction: "column",
});

export const progressStepperStates = {
    step: getNItems(5, (i) => ({
        current: i === 1,
        type: getType(i),
        renderBody: createRenderBody(`status ${i}`),
    })),
};
