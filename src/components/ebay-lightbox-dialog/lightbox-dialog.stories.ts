import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../common/storybook/utils";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import code from "./examples/default.marko?raw";
import ScrollingTemplate from "./examples/scrolling.marko";
import ScrollingTemplateCode from "./examples/scrolling.marko?raw";
import WithPrevButtonTemplate from "./examples/with-prev-button.marko";
import WithPrevButtonCode from "./examples/with-prev-button.marko?raw";
import WithFooterTemplate from "./examples/with-footer.marko";
import WithFooterCode from "./examples/with-footer.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./index.marko";

const Template: Story<Input> = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "dialogs/ebay-lightbox-dialog",
    component: Component,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        open: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether dialog is open.",
        },
        expanded: {
            type: "boolean",
            control: { type: "boolean" },
            description: "Whether dialog is expanded.",
        },
        focus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog opens (defaults to close button).",
        },
        closeFocus: {
            control: { type: "text" },
            description:
                "An id for an element which will receive focus when the dialog closes. Defaults to the last clicked element before the dialog is opened",
        },
        a11yCloseText: {
            control: { type: "text" },
            description: "A11y text for close button and mask.",
        },
        header: {
            name: "@header",
            type: { required: true },
            control: { type: "object" },
            table: {
                category: "@attribute tags",
            },
            description:
                "The header text for the content of the dialog. This is a required attribute.",
        },
        footer: {
            name: "@footer",
            control: { type: "object" },

            table: {
                category: "@attribute tags",
            },
        },
        prevButton: {
            name: "@prevButton",
            control: { type: "object" },
            table: {
                category: "@attribute tags",
            },
            description:
                "Previous button, shows up before header. Usually a chevron-left icon.",
        },
        bannerImgSrc: {
            control: { type: "text" },
            description: "Image source for the expressive variant",
        },
        size: {
            options: ["regular", "wide", "narrow", "large"],
            description: "The size of the dialog",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            type: { category: "Options" },
        },
        bannerImgPosition: {
            control: { type: "text" },
            description:
                "Position of the image within the given bounds using the CSS `background-position` property. Options include [keywords, lengths, and edge distances](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position)",
        },
        onOpen: {
            action: "on-open",
            description: "Triggered on dialog opened",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onClose: {
            action: "on-close",
            description: "Triggered on dialog closed.",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "",
                },
            },
        },
        onPrevButtonClick: {
            action: "on-prevButtonClick",
            description: "Triggered when previous button is clicked",
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
    header: {
        renderBody: `Heading Text`,
    },
    a11yCloseText: "Close dialog",
} as any;

Default.parameters = {
    docs: {
        source: {
            code,
        },
    },
};

export const Scrolling = buildExtensionTemplate(
    ScrollingTemplate,
    ScrollingTemplateCode,
);

export const Expressive = Template.bind({});
Expressive.args = {
    header: {
        renderBody: `Heading Text`,
    },
    bannerImgSrc:
        "http://ir.ebaystatic.com/cr/v/c1/skin/image-treatment/mountain.jpeg",
    bannerImgPosition: "top",
} as any;

Expressive.parameters = {
    docs: {
        source: {
            code,
        },
    },
};

export const WithPrevButton = buildExtensionTemplate(
    WithPrevButtonTemplate,
    WithPrevButtonCode,
);

export const WithFooter = buildExtensionTemplate(
    WithFooterTemplate,
    WithFooterCode,
);
