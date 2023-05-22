import { createRenderBody } from "../../../../common/test-utils/shared";

export const Basic = {
    renderBody: createRenderBody("CTA Text"),
};

export const Small = Object.assign({}, Basic, {
    size: "small",
});

export const Large = Object.assign({}, Basic, {
    size: "large",
});
