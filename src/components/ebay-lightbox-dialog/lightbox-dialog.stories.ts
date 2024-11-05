import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../../.storybook/utils";
import Readme from "./README.md";
import Component from "./examples/default.marko";
import code from "./examples/default.marko?raw";
import ScrollingTemplate from "./examples/scrolling.marko";
import ScrollingTemplateCode from "./examples/scrolling.marko?raw";
import WithPrevButtonTemplate from "./examples/with-prev-button.marko";
import WithPrevButtonCode from "./examples/with-prev-button.marko?raw";
import WithFooterTemplate from "./examples/with-footer.marko";
import WithFooterCode from "./examples/with-footer.marko?raw";

const Template = (args) => ({
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
        a11yMinimizeText: {
            control: { type: "text" },
            description:
                "A11y text for draggable handle when dialog is maximized and clicking handle will minimize the dialog (small screen only).",
        },
        a11yMaximizeText: {
            control: { type: "text" },
            description:
                "A11y text for draggable handle when dialog is minimized and clicking handle will maximize the dialog (small screen only).",
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
        onExpanded: {
            action: "on-expanded",
            description:
                "dialog expanded to full page height. Event is triggerd on drag up of handle (touch only), clicks, or when user scrolls in content when dialog is not expanded (small screens)",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onCollapsed: {
            action: "on-collapsed",
            description:
                "dialog collapsed back to max 50%. Event is triggerd on drags down of handle (touch only) or clicks when dialog is expanded (small screens only)",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
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
    a11yMinimizeText: "Minimize Dialog",
    a11yMaximizeText: "Maximize Dialog",
};

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
    a11yMinimizeText: "Minimize Dialog",
    a11yMaximizeText: "Maximize Dialog",
};

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
