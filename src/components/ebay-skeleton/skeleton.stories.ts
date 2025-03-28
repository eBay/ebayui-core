import { tagToString } from "../../common/storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Component, { type Input } from "./index.marko";
import Readme from "./README.md";
import avatarTemplate from "./examples/avatar.marko";
import avatarCode from "./examples/avatar.marko?raw";
import buttonTemplate from "./examples/button.marko";
import buttonCode from "./examples/button.marko?raw";
import buttonSmallTemplate from "./examples/button-small.marko";
import buttonSmallCode from "./examples/button-small.marko?raw";
import textTemplate from "./examples/text.marko";
import textCode from "./examples/text.marko?raw";
import textMultilineTemplate from "./examples/text-multiline.marko";
import textMultilineCode from "./examples/text-multiline.marko?raw";
import textboxTemplate from "./examples/textbox.marko";
import textboxCode from "./examples/textbox.marko?raw";
import imageTemplate from "./examples/image.marko";
import imageCode from "./examples/image.marko?raw";
import tileTemplate from "./examples/tile.marko";
import tileCode from "./examples/tile.marko?raw";
import withContentTemplate from "./examples/withContent.marko";
import withContentCode from "./examples/withContent.marko?raw";
import compositeTemplate from "./examples/composite.marko";
import compositeCode from "./examples/composite.marko?raw";
import groupedTileTemplate from "./examples/grouped-tile.marko";
import groupedTileCode from "./examples/grouped-tile.marko?raw";
import { Story } from "@storybook/marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "building blocks/ebay-skeleton",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        renderBody: {
            control: { type: "text" },
        },
        a11yText: {
            control: { type: "text" },
            description:
                "The localized accessibility text for the component. By default for english, Loading is used.",
            table: {
                defaultValue: {
                    summary: "Loading",
                },
            },
        },
        size: {
            control: { type: "select" },
            options: ["small", "large"],
            table: {
                defaultValue: {
                    summary: "default",
                },
            },
            description:
                "The Size of the component to render. Applicable for `ebay-skeleton-button` and `ebay-skeleton-text` only",
        },
        multiline: {
            control: { type: "boolean" },
            table: {
                defaultValue: {
                    summary: false,
                },
            },
            description:
                "Boolean flag to make `ebay-skeleton-text` render more than one line",
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    style: "width: 220px",
    renderBody: `<div class="skeleton__textbox" />` as any,
};
Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-skeleton", Default.args),
        },
    },
};

export const Avatar = buildExtensionTemplate(avatarTemplate, avatarCode);

export const Button = buildExtensionTemplate(buttonTemplate, buttonCode);

export const ButtonSmall = buildExtensionTemplate(
    buttonSmallTemplate,
    buttonSmallCode,
);

export const Text = buildExtensionTemplate(textTemplate, textCode);

export const TextMultiLine = buildExtensionTemplate(
    textMultilineTemplate,
    textMultilineCode,
);

export const TextBox = buildExtensionTemplate(textboxTemplate, textboxCode);

export const Image = buildExtensionTemplate(imageTemplate, imageCode);

export const Tile = buildExtensionTemplate(tileTemplate, tileCode);

export const composite = buildExtensionTemplate(
    compositeTemplate,
    compositeCode,
);

export const withContent = buildExtensionTemplate(
    withContentTemplate,
    withContentCode,
);

export const GroupedTile = buildExtensionTemplate(
    groupedTileTemplate,
    groupedTileCode,
);
