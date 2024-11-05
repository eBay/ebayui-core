import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import withFooter from "./examples/with-footer.marko";
import withFooterCode from "./examples/with-footer.marko?raw";
import ProminentTemplate from "./examples/prominent.marko";
import ProminentTemplateCode from "./examples/prominent.marko?raw";
import ProminentIconTemplate from "./examples/prominent-icon.marko";
import ProminentIconTemplateCode from "./examples/prominent-icon.marko?raw";

import withDismiss from "./examples/with-dismiss.marko";
import withDismissCode from "./examples/with-dismiss.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "notices & tips/ebay-education-notice",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        educationIcon: {
            name: "@educationIcon",
            description:
                "For status education, an `<ebay-[name]-icon>` to show as the button's icon",
            table: {
                defaultValue: {
                    summary: "ebay-lightbulb-24-icon",
                    category: "@attribute tags",
                },
            },
        },
        variant: {
            description:
                "Either none or prominent. If prominent, the notice will be more prominent",
            options: ["none", "prominent"],
            type: "select",
            defaultValue: {
                summary: "none",
            },
        },
        iconVariant: {
            description:
                "Either none or prominent. If prominent, the icon will be more prominent",
            options: ["none", "prominent"],
            type: "select",
            defaultValue: {
                summary: "none",
            },
        },
        a11yText: {
            description: "adding description for the notice for a11y users",
        },
        a11yRoleDescription: {
            table: {
                defaultValue: {
                    summary: "Notice",
                },
            },
            description:
                "The roledescription to announce the component type for a11y users.",
        },
        dismissed: {
            description: "whether or not the notice is dismissed",
            type: "boolean",
        },
        title: {
            name: "@title",
            description: "The title content to be displayed.",
            table: {
                required: true,
                category: "@attribute tags",
            },
        },
        footer: {
            name: "@footer",
            description:
                "The footer content to be displayed. Contains a button or link.",
            table: {
                category: "@attribute tags",
            },
        },
        onDismiss: {
            action: "on-dismiss",
            description: "Triggered on notice dismiss",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    a11yText: "education",
    a11yRoleDescription: "Notice",
    title: {
        renderBody: "Education notice title",
    },
    renderBody: "<p>Education notice info. Things you need to know.</p>",
} as any;
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-education-notice", Default.args),
        },
    },
};

export const Prominent = buildExtensionTemplate(
    ProminentTemplate,
    ProminentTemplateCode,
    {
        a11yText: "attention",
        status: "attention",
    },
);
export const ProminentIcon = buildExtensionTemplate(
    ProminentIconTemplate,
    ProminentIconTemplateCode,
    {
        a11yText: "attention",
        status: "attention",
    },
);

export const WithDismiss = buildExtensionTemplate(
    withDismiss,
    withDismissCode,
    {
        a11yText: "information",
        a11yIconText: "",
        a11yDismissText: "Dismiss Notice",
    },
);

export const WithFooter = buildExtensionTemplate(withFooter, withFooterCode, {
    a11yText: "information",
});
