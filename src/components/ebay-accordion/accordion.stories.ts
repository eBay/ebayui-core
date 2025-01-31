import { buildExtensionTemplate } from "../../common/storybook/utils";
import Accordion from "./index.marko";
import Readme from "./README.md";
import defaultTemplate from "./examples/default.marko";
import defaultTemplateCode from "./examples/default.marko?raw";
import openTemplate from "./examples/opened.marko";
import openTemplateCode from "./examples/opened.marko?raw";
import largeTemplate from "./examples/large.marko";
import largeTemplateCode from "./examples/large.marko?raw";
import autoCollapsedTemplate from "./examples/autoCollapsed.marko";
import autoCollapsedTemplateCode from "./examples/autoCollapsed.marko?raw";

export default {
    title: "navigation & disclosure/ebay-accordion",
    component: Accordion,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        size: {
            type: "options",
            description: "Size of the details",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            options: ["regular", "large"],
        },
        autoCollapse: {
            type: "boolean",
            description:
                "Whether accordion panels should be autocollapsed when another is opened",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
        },
        a11yRoleDescription: {
            type: "string",
            control: { type: "text" },
            description:
                "The localized role description to announce the component role for a11y users.",
            table: {
                defaultValue: {
                    summary: "accordion",
                },
            },
        },
        details: {
            name: "@details",
            description:
                "Represents an <ebay-details/> element to be used as part of the group. Allowed attributes are `open`, `as`, `text` and `renderBody`",
            table: {
                category: "@attribute tags",
            },
        },
        onToggle: {
            action: "on-toggle",
            description:
                "Triggered on toggle of details to control auto-collapse",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, open }",
                },
            },
        },
        onClick: {
            action: "on-click",
            description: "Triggered on click of details",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    defaultTemplate,
    defaultTemplateCode,
);

export const Open = buildExtensionTemplate(openTemplate, openTemplateCode);

export const Large = buildExtensionTemplate(largeTemplate, largeTemplateCode);

export const AutoCollapsed = buildExtensionTemplate(
    autoCollapsedTemplate,
    autoCollapsedTemplateCode,
);
