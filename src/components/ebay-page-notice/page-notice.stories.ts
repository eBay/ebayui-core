import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import withAction from "./examples/with-action.marko";
import withActionCode from "./examples/with-action.marko?raw";
import withDismiss from "./examples/with-dismiss.marko";
import withDismissCode from "./examples/with-dismiss.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "notices & tips/ebay-page-notice",
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

            description: "The icon used and status of the notice",
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
        a11yIconText: {
            description:
                "adding description for the icon in the notice for a11y users",
        },
        a11yDismissText: {
            description:
                "This adds a dismiss icon allowing the notice to be dismissed/hidden and sets the a11y text on the icon",
        },
        dismissed: {
            description: "whether or not the notice is dismissed",
            type: "boolean",
        },
        title: {
            name: "@title",
            description: "The title content to be displayed.",
            table: {
                category: "@attribute tags",
            },
        },
        footer: {
            name: "@footer",
            description:
                "The footer content to be displayed. Used to show the dismiss button generally",
            table: {
                category: "@attribute tags",
            },
        },
        cta: {
            name: "@cta",
            description: "This allows the addition of a main CTA link",
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

export const Basic = Template.bind({});
Basic.args = {
    a11yText: "attention",
    a11yIconText: "",
    a11yDismissText: "",
    status: null,
    icon: null,
    cta: null,
    dismissed: false,
    title: {
        renderBody: "An error has occurred",
    },
    renderBody: `<p><strong>Error:</strong> Please take another look at the following:</p>
    <p>
        <a href='#'>Card number</a>
        ,
        <a href='#'>Expiration date</a>
        &amp;
        <a href='#'>Security code</a>
    </p>`,
} as any;
Basic.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-page-notice", Basic.args),
        },
    },
};

export const WithAction: Story<Input> = (args) => ({
    input: args,
    component: withAction,
});
WithAction.args = {
    a11yText: "attention",
    a11yIconText: "",
    a11yDismissText: "",
    status: null,
    icon: null,
} as any;

WithAction.parameters = {
    docs: {
        source: {
            code: withActionCode,
        },
    },
};

export const WithDismiss: Story<Input> = (args) => ({
    input: args,
    component: withDismiss,
});

WithDismiss.args = {
    a11yText: "information",
    a11yIconText: "",
    a11yDismissText: "Dismiss Notice",
    status: "information",
    icon: null,
} as any;

WithDismiss.parameters = {
    docs: {
        source: {
            code: withDismissCode,
        },
    },
};
