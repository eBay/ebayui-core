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
    title: "media/ebay-3d-viewer",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        src: {
            control: { type: "text" },
            description: "The asset to load",
        },
        a11yText: {
            control: { type: "text" },
            table: {
                category: "Accessibility",
                defaultValue: {
                    summary: "",
                },
            },
            description:
                "The text for screen readers to read out when interacting with the 3d player.",
        },
        a11yStartText: {
            control: { type: "text" },
            table: {
                category: "Accessibility",
                defaultValue: {
                    summary: "Click to start",
                },
            },
            description: "Text for start icon to load viewer",
        },
        a11yLoadText: {
            control: { type: "text" },
            table: {
                category: "Accessibility",
                defaultValue: {
                    summary: "Loading",
                },
            },
            description: "Text for loading icon loading viewer",
        },
        errorText: {
            control: { type: "text" },
            table: {
                category: "Accessibility",
                defaultValue: {
                    summary: "An error has occurred",
                },
            },
            description: "Text to show error message",
        },
        onAction: {
            action: "on-action",
            description: "Triggered when interacting with player",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        onProgress: {
            action: "on-progress",
            description: "Triggered ",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        onLoad: {
            action: "on-load",
            description: "Triggered when loading is complete",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        "onLoad-error": {
            action: "on-load-error",
            description: "Triggered when loading error happens",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        "onModel-visibility": {
            action: "on-model-visibility",
            description: "Triggered when model is visible",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        "onRender-scale": {
            action: "on-render-scale",
            description: "Triggered when model scales",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
        "onPoster-dismissed": {
            action: "on-poster-dismissed",
            description:
                "Triggered when there's a placeholder image and it is removed",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    src: "https://ir.ebaystatic.com/cr/v/c1/ebayui/3d/v1/image.glb",
    a11yText: "View these shoes for sale.",
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-3d-viewer", Default.args),
        },
    },
};
