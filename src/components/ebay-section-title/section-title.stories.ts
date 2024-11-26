import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import Component, { type Input } from "./index.marko";
import overflowComponent from "./examples/overflow.marko";
import overflowComponentCode from "./examples/overflow.marko?raw";
import buttonSeeAllComponent from "./examples/save-see-all.marko";
import buttonSeeAllComponentCode from "./examples/save-see-all.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "navigation & disclosure/ebay-section-title",
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
            description:
                "RL. Title content and optional CTA content will link to this",
        },
        ctaText: {
            control: { type: "text" },
            description: "The text for the CTA. Only used when href is set.",
            table: {
                defaultValue: {
                    summary: "See All",
                },
            },
        },
        title: {
            name: "@title",
            description:
                "The main title content to be displayed. Title tag is required when using other sub-tags.",
            table: {
                category: "@attribute tags",
            },
        },
        subtitle: {
            name: "@subtitle",
            description: "The subtitle content to be displayed",
            table: {
                category: "@attribute tags",
            },
        },
        info: {
            name: "@info",
            control: { type: "json" },
            description: "Placeholder for `<ebay-infotip>` component",
            table: {
                category: "@attribute tags",
            },
        },
        overflow: {
            name: "@overflow",
            control: { type: "json" },
            description: "Placeholder for `<ebay-menu-button>` component",
            table: {
                category: "@attribute tags",
            },
        },
    },
};

export const Standard = Template.bind({});
Standard.args = {
    title: { renderBody: `Todays Best Deals` } as any,
    subtitle: { renderBody: `with free shipping!` } as any,
};

Standard.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-section-title", Standard.args),
        },
    },
};

export const iconAndSeeAll = () => ({
    component: buttonSeeAllComponent,
});

iconAndSeeAll.parameters = {
    docs: {
        source: {
            buttonSeeAllComponentCode,
        },
    },
};

export const withOverflow = () => ({
    component: overflowComponent,
});

withOverflow.parameters = {
    docs: {
        source: {
            overflowComponentCode,
        },
    },
};
