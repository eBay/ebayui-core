import Readme from "./README.md";
import { buildExtensionTemplate } from "../../common/storybook/utils";
import ccd from "./index.marko";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";

export default {
    title: "graphics & icons/ebay-ccd",
    component: ccd,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        max: {
            control: { type: "text" },
            description: "The maximum range",
        },
        min: {
            control: { type: "text" },
            description: "The minimum range",
        },
        chargerIcon: {
            control: { type: "select" },
            options: [undefined, "included", "not-included"],
            description:
                "Toggles the charger icon visible or if its included or not",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
        },
        units: {
            control: { type: "text" },
            description: "The units of the rating.",
            table: {
                defaultValue: {
                    summary: "w",
                },
            },
        },
        secondaryType: {
            control: { type: "select" },
            options: ["none", "usbpd"],
            description: "Toggles the usbpd secondary text",
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
        },
        secondaryText: {
            control: { type: "text" },
            description:
                "The text used for secodnary text. Will also be used in aria-label",
            table: {
                defaultValue: {
                    summary: "usbpd",
                },
            },
        },
        a11yUnits: {
            control: { type: "text" },
            description: "The units for the rating used for a11y",
            table: {
                defaultValue: {
                    summary: "watts",
                },
            },
        },
        a11yText: {
            control: { type: "text" },
            description: "Overrides the default aria-label text",
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
    {
        max: "2000",
        min: "1000",
    },
);
