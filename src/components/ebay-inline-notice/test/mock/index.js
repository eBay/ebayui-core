import { createRenderBody } from "../../../../common/test-utils/shared";

export const Inline = {
    a11yText: "Heading Text",
    renderBody: createRenderBody("Content"),
};

export const inlineCustomStatus = Object.assign({}, Inline, {
    status: "confirmation",
});
