import { tagToString } from "../../../.storybook/storybook-code-source";
import { addRenderBodies } from "../../../.storybook/utils";
import readme from "./README.md";
import component from "./index.marko";
import WithIconTemplate from "./examples/with-icon.marko";
import WithIconCode from "./examples/with-icon.marko?raw";
import WithImageTemplate from "./examples/with-image.marko";
import WithImageCode from "./examples/with-image.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "buttons/ebay-toggle-button",
    component,
    parameters: {
        docs: {
            description: {
                component: readme,
            },
        },
    },
    argTypes: {
        renderBody: {},
        gallery: {
            type: "boolean",
            control: { type: "boolean" },
            description: "true when the button is in gallery layout",
        },
        pressed: {
            type: "boolean",
            control: { type: "boolean" },
            description: "pressed state of the button",
        },
        title: {
            type: "string",
            control: { type: "text" },
            description: "title attribute for the button",
        },
        subtitle: {
            type: "string",
            control: { type: "text" },
            description: "subtitle attribute for the button",
        },
        icon: {
            name: "@icon",
            description: "an `<ebay-[name]-icon>` to show as the button's icon",
            table: {
                category: "@attribute tags",
            },
        },
        img: {
            name: "@img",
            description: "An `<img>` to show as the button's image",
        },
        href: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description: "href attribute for the image",
        },
        alt: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description: "alt attribute for the image",
        },
        size: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description:
                "size of the image. Values may be any which are applicable to the CSS `background-size` property, but only `contain` and `cover` are fully supported.",
        },
        position: {
            table: {
                category: "@img attributes",
            },
            control: { type: "text" },
            description:
                "position of the image, to be used when `size` is set to `cover`.",
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
    title: "Title",
    subtitle: "Subtitle",
};

Default.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-toggle-button", Default.args),
        },
    },
};

export const WithIcon = (args) => ({
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

export const WithImage = (args) => ({
    input: args,
    component: WithImageTemplate,
});
WithImage.args = {};
WithImage.parameters = {
    docs: {
        source: {
            code: WithImageCode,
        },
    },
};
