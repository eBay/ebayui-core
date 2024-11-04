import { tagToString } from "../../common/storybook/storybook-code-source";
import Readme from "./README.md";
import Checkbox from "./index.marko";
import GroupTemplate from "./examples/group.marko";
import WithLabelTemplate from "./examples/WithLabel.marko";
import DisabledTemplate from "./examples/DisabledWithLabel.marko";
import GroupCode from "./examples/group.marko?raw";
import WithLabelCode from "./examples/WithLabel.marko?raw";
import DisabledCode from "./examples/DisabledWithLabel.marko?raw";
import { Story } from "@storybook/marko";
import type { Input } from "./component-browser";

const Template: Story<Input> = (args) => ({ input: args });

export default {
    title: "form input/ebay-checkbox",
    component: Checkbox,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },

    argTypes: {
        checked: {
            description: "if checked or not",
            table: {
                defaultValue: {
                    summary: "false",
                },
            },
            type: "boolean",
        },
        size: {
            options: ["regular", "large"],

            description:
                "Sets the checkbox icon. Default is regular. For mweb this should be set to large. (Note: The dimensions of the checkbox will not change, but only the icon)",
            table: {
                defaultValue: {
                    summary: "regular",
                },
            },
            type: { category: "Options" },
        },
        "icon-style": {
            options: ["rounded", "square"],
            description:
                "Will change the icon to be rounded or square (square being the legacy and deprecated version)",
            table: {
                defaultValue: {
                    summary: "rounded",
                },
            },
            type: { category: "Options" },
        },

        onChange: {
            action: "on-change",
            description: "Triggered on change",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value, checked }",
                },
            },
        },
        onFocus: {
            action: "on-focus",
            description: "Triggered on focus",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
        onKeydown: {
            action: "on-keydown",
            description: "Triggered on keydown",
            table: {
                category: "Events",
                defaultValue: {
                    summary: "{ originalEvent, value }",
                },
            },
        },
    },
};

export const WithLabel: Story<Input> = (args) => ({
    input: args,
    component: WithLabelTemplate,
});
WithLabel.args = {
    checked: false,
};

WithLabel.parameters = {
    docs: {
        source: {
            code: WithLabelCode,
        },
    },
};

export const Disabled: Story<Input> = (args) => ({
    input: args,
    component: DisabledTemplate,
});
Disabled.args = {
    checked: false,
};

Disabled.parameters = {
    docs: {
        source: {
            code: DisabledCode,
        },
    },
};

export const Group: Story<Input> = (args) => ({
    input: args,
    component: GroupTemplate,
});

Group.args = {};
Group.parameters = {
    docs: {
        source: {
            code: GroupCode,
        },
    },
};

export const Isolated = Template.bind({});
Isolated.args = {
    checked: false,
};

Isolated.parameters = {
    docs: {
        source: {
            code: tagToString("ebay-checkbox", Isolated.args),
        },
    },
};
