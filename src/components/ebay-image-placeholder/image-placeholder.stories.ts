import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import ResizedTemplate from "./examples/resized.marko";
import ResizedTemplateCode from "./examples/resized.marko?raw";

export default {
    title: "graphics & icons/ebay-image-placeholder",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        a11yText: {
            control: { type: "text" },
            description:
                "text for non-decorative inline icon; icon is assumed to be decorative if this is not passed",
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
);

export const Resized = buildExtensionTemplate(
    ResizedTemplate,
    ResizedTemplateCode,
);
