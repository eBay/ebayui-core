import { createRenderBody } from "../../../../common/test-utils/shared";

export const Basic = {
    renderBody: createRenderBody("neutral"),
};

export const basicNeutral = {
    status: "neutral",
    renderBody: createRenderBody("neutral"),
};

export const basicTrustworthy = {
    status: "trustworthy",
    renderBody: createRenderBody("trustworthy"),
};

export const basicRecent = {
    status: "recent",
    renderBody: createRenderBody("recent"),
};

export const basicTimeSensitive = {
    status: "time-sensitive",
    renderBody: createRenderBody("time sensitive"),
};

export const basicWithClass = {
    renderBody: createRenderBody("neutral"),
    class: "custom-class",
};
