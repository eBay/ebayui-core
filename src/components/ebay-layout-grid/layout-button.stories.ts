import { buildExtensionTemplate } from "../../common/storybook/utils";
import Component from "./index.marko";
import Readme from "./README.md";
import DefaultTemplate from "./examples/default.marko";
import DefaultTemplateCode from "./examples/default.marko?raw";
import WithCustomColumnsTemplate from "./examples/with-custom-columns.marko";
import WithCustomColumnsTemplateCode from "./examples/with-custom-columns.marko?raw";

export default {
    title: "layout/ebay-layout-grid",
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
        columns: {
            control: { type: "object" },
            description:
                "Number of columns per screen size. Object with keys: min, xs, sm, md, lg, xl, xl2, xl3, xl4",

            table: {
                defaultValue: {
                    summary:
                        "{ min: 1, xs: 2, sm: 3, md: 4, lg: 6, xl: 8, xl2: 10, xl3: 12, xl4: 14 }",
                },
            },
        },
    },
};

export const Default = buildExtensionTemplate(
    DefaultTemplate,
    DefaultTemplateCode,
    {
        columns: {
            min: 1,
            xs: 2,
            sm: 3,
            md: 4,
            lg: 6,
            xl: 8,
            xl2: 10,
            xl3: 12,
            xl4: 14,
        },
    },
);

export const WithCustomColumns = buildExtensionTemplate(
    WithCustomColumnsTemplate,
    WithCustomColumnsTemplateCode,
    {
        columns: {
            min: 2,
            xs: 3,
            sm: 4,
            md: 6,
            lg: 8,
        },
    },
);
