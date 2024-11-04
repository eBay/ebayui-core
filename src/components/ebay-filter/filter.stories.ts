import { Story } from "@storybook/marko";
import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./index.marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-filter",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        href: {
            control: { type: "text" },
            description: "for link that looks like a button",
        },
        disabled: {
            control: { type: "boolean" },
        },
        selected: {
            control: { type: "boolean" },
        },
        useAriaPressed: {
            control: { type: "boolean" },
            description: "defaults to `true`",
        },
        a11ySelectedText: {
            control: { type: "text" },
            description:
                'defaults to `"Selected"`, but should be changed based on L10N or I18N',
            table: {
                category: "when using fake filters",
            },
        },
        onClick: {
            action: "on-click",
            description: "Triggered on item clicked",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ el, checked, originalEvent }",
                },
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    renderBody: `text` as any,
    useAriaPressed: true,
};
Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-filter", Standard.args),
        },
    },
};
