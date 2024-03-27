import { tagToString } from "../../../.storybook/storybook-code-source";
import {
    addRenderBodies,
    buildExtensionTemplate,
} from "../../../.storybook/utils";
import button from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import LocalizationTemplate from "./examples/localization.marko";
import LocalizationTemplateCode from "./examples/localization.marko?raw";

const Template = (args) => ({
    input: addRenderBodies(args),
});

export default {
    title: "form input/ebay-phone-input",
    component: button,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        value: {
            description: "The phone number for the input field",
            control: { type: "text" },
        },
        countryCode: {
            description:
                "The two letter country code. Used to populate the country dropdown",
            control: { type: "text" },
        },
        countryNames: {
            description:
                "List of tuples that have localized text for each country. The first tuple is the is the localized countries name, and the second tuple is the country's two letter code.",
            control: { type: "array" },
        },
        floatingLabel: {
            description: "If set then shows this text as the floating label.",
            control: { type: "text" },
            table: {
                defaultValue: {
                    summary: "",
                },
            },
        },
        disabled: {
            description: "",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        invalid: {
            description: "When there is an error present, sets the input to invalid",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        readonly: {
            description: "Disables the dropdown and adds readonly to the textbox",
            control: { type: "boolean" },
            table: {
                category: "Toggles",
                defaultValue: {
                    summary: "false",
                },
            },
        },
        onKeypress: {
            action: "on-keyup",
            description: "Triggered on keyup",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "{ value, rawValue, countryCode, callingCode, originalEvent }",
                },
            },
        },

        onKeyup: {
            action: "on-keyup",
            description: "Triggered on keyup",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "{ value, rawValue, countryCode, callingCode, originalEvent }",
                },
            },
        },
        onKeydown: {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "{ value, rawValue, countryCode, callingCode, originalEvent }",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onBlur: {
            action: "on-blur",
            description: "Triggered on blur",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
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
        onChange: {
            action: "on-change",
            description: "Triggered on any change, either on listbox or input.",
            table: {
                category: "Events",
                defaultValue: {
                    summary:
                        "{ value, rawValue, countryCode, callingCode, originalEvent }",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
    { countryCode: "us", floatingLabel: "", value: "" },
);

export const Localization = buildExtensionTemplate(
    LocalizationTemplate,
    LocalizationTemplateCode,
    { countryCode: "us", floatingLabel: "", value: "" },
);
