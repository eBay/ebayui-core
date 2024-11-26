import { tagToString } from "../../common/storybook/storybook-code-source";
import { addRenderBodies } from "../../common/storybook/utils";
import Readme from "./README.md";
import component from "./index.marko";
import WithIconTemplate from "./examples/with-icon.marko";
import WithIconCode from "./examples/with-icon.marko?raw";
import WithImageTemplate from "./examples/with-image.marko";
import WithImageCode from "./examples/with-image.marko?raw";
import MultilineSubtitleTemplate from "./examples/multiline-subtitle.marko";
import MultilineSubtitleCode from "./examples/multiline-subtitle.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-toggle-button",
    component,
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
        layoutType: {
            type: "string",
            control: { type: "select" },
            options: ["minimal", "list", "gallery"],
            description:
                'Enforced layout type of the button. May be `"minimal"` (default), `"list"`, or `"gallery"`. Gallery layout may only be used when there is also an icon or an image.',
        },
        pressed: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Pressed state of the button",
        },
        title: {
            type: "string",
            control: { type: "text" },
            description: "Title attribute for the button",
        },
        subtitle: {
            type: "string|@subtitle",
            control: { type: "text" },
            description: "Subtitle attribute for the button",
        },
        icon: {
            name: "@icon",
            description: "An `<ebay-[name]-icon>` to show as the button's icon",
            table: {
                category: "@attribute tags",
            },
        },
        img: {
            name: "@img",
            description: "An `<img>` to show as the button's image",
            table: {
                category: "@attribute tags",
            },
        },
        subtitleTag: {
            name: "@subtitle",
            description:
                "May be used instead of the `subtitle` attribute for more control. Should contain no more than two brief lines of text",
            table: {
                category: "@attribute tags",
            },
        },
        src: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description: "Link to the image source",
        },
        alt: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description: "Alt text for the image",
        },
        fillPlacement: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description:
                "Placement of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position). Using this property will switch the image fit from `contain` to `cover`",
        },
        onToggle: {
            action: "on-toggle",
            description: "Triggered when the button is toggled",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, pressed }",
                },
            },
        },
    },
};

export const Default = Template.bind({});
Default.args = {
    renderBody: "Title" as any,
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-toggle-button", Default.args),
        },
    },
};

export const WithIcon: Story<Input> = (args) => ({
    input: args,
    component: WithIconTemplate,
});
WithIcon.args = {};
WithIcon.parameters = {
    docs: {
        source: {
            code: WithIconCode,
        },
    },
};

export const WithImage: Story<Input> = (args) => ({
    input: args,
    component: WithImageTemplate,
});
WithImage.args = {
    layoutType: "gallery",
    src: "https://cloudfront.slrlounge.com/wp-content/uploads/2012/07/01-SLRLounge-Holding-Standing-Wrong.jpg",
    fillPlacement: "top",
} as any;
WithImage.parameters = {
    docs: {
        source: {
            code: WithImageCode,
        },
    },
};

export const MultilineSubtitle: Story<Input> = (args) => ({
    input: args,
    component: MultilineSubtitleTemplate,
});
MultilineSubtitle.args = {};
MultilineSubtitle.parameters = {
    docs: {
        source: {
            code: MultilineSubtitleCode,
        },
    },
};
