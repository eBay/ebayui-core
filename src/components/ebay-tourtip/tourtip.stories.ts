import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import example1 from "./examples/default.marko?raw";
import withFooterCode from "./examples/withFooter.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "notices & tips/ebay-tourtip",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        placement: {
            options: [
                "top",
                "right",
                "bottom",
                "left",
                "top-start",
                "right-start",
                "bottom-start",
                "left-start",
                "top-end",
                "right-end",
                "bottom-end",
                "left-end",
            ],
            control: { type: "select" },
            description: "places tourtip position",
        },
        offset: {
            control: { type: "number" },
            description: "offsets tourtip position",
        },
        a11yCloseText: {
            control: { type: "text" },
            description: "A11y text for close button",
        },

        host: {
            name: "@host",
            description: "The body which will be wrapped as the tourtip's host",
            table: {
                category: "@attribute tags",
            },
        },
        heading: {
            name: "@heading",
            description: "The heading to be displayed in the tourtip",
            table: {
                category: "@attribute tags",
            },
        },
        content: {
            name: "@content",
            description: "The content to be displayed in the tourtip",
            table: {
                category: "@attribute tags",
            },
        },
        footer: {
            name: "@footer",
            description:
                "The footer to be displayed under the tourtip. Takes an index value which can display the left portion of the footer.",
            table: {
                category: "@attribute tags",
            },
        },
        noFlip: {
            control: { type: "boolean" },
            description: "disables flipping tourtip when its offscreen",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        noShift: {
            control: { type: "boolean" },
            description: "disables shifting tourtip when its offscreen",
            table: {
                defaultValue: { summary: "true" },
            },
        },
        notInline: {
            control: { type: "boolean" },
            description:
                "disables moving tourtip to be inline with content when it is rendered",
            table: {
                defaultValue: { summary: "false" },
            },
        },
        open: {
            control: { type: "boolean" },
            description:
                "allows dev to specify whether tourtip is open or closed",
        },
        onCollapse: {
            action: "on-collapse",
            description: "Triggered on menu collapse",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onExpand: {
            action: "on-expand",
            description: "Triggered on menu expand",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    host: {
        renderBody: `<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`,
    },
    heading: {
        renderBody: "Important",
        as: "h2",
    },
    content: {
        renderBody: `<p>This new feature was added.</p>`,
    },
    a11yCloseText: "close",
} as any;
Standard.parameters = {
    docs: {
        source: {
            code: example1,
        },
    },
};

export const withFooter = Template.bind({});
withFooter.args = {
    host: {
        renderBody: `<p>Nisi quis officia cupidatat irure qui aliquip mollit aliqua dolore. Sint ut anim adipisicing
            eiusmod. Dolor irure adipisicing dolor ullamco elit irure laboris consectetur eiusmod et officia
            mollit irure. Reprehenderit nostrud proident anim deserunt aliqua proident dolore reprehenderit.
            Proident fugiat sit nostrud Lorem aliquip enim est sint. Labore esse quis nulla in Lorem aute
            duis exercitation sit in laborum cillum qui. Dolore voluptate commodo adipisicing anim id
            voluptate dolore quis aliquip duis duis.</p>`,
    },
    heading: {
        renderBody: "Important",
    },
    content: {
        renderBody: `<p>This new feature was added.</p>`,
    },
    a11yCloseText: "close",
    footer: {
        index: "1 of 3",
        renderBody:
            '<button class="fake-link">Back</button><button class="btn btn--primary">Next</button>',
    },
} as any;
withFooter.parameters = {
    docs: {
        source: {
            code: withFooterCode,
        },
    },
};
