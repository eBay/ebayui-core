import { buildExtensionTemplate } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
    title: "notices & tips/ebay-inline-notice",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        status: {
            table: {
                defaultValue: {
                    summary: "attention",
                },
            },

            description: "The icon used and status of the noptice",
            options: ["attention", "confirmation", "information"],
            type: "select",
        },
        icon: {
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
            options: ["default", "none"],
            type: "select",
            description:
                'matches whatever is specified by the "status", or if none hides icon',
        },
        a11yText: {
            description: "adding description for the notice for a11y users",
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
);
