import { buildExtensionTemplate } from "../../common/storybook/utils";
import carousel from "./index.marko";
import Readme from "./README.md";
import continiousTemplate from "./examples/continuous.marko";
import continiousTemplateCode from "./examples/continuous.marko?raw";
import discreteTemplate from "./examples/discrete.marko";
import discreteTemplateCode from "./examples/discrete.marko?raw";
import continiousImageTreatmentTemplate from "./examples/continuous-image-treatment.marko";
import continiousImageTreatmentTemplateCode from "./examples/continuous-image-treatment.marko?raw";
import autoplayTemplate from "./examples/autoplay.marko";
import autoplayTemplateCode from "./examples/autoplay.marko?raw";
import preserveTabindexTemplate from "./examples/preserve-tabindex.marko";
import preserveTabindexTemplateCode from "./examples/preserve-tabindex.marko?raw";
import variableSizesTemplate from "./examples/variable-sizes.marko";
import variableSizesTemplateCode from "./examples/variable-sizes.marko?raw";
import controlledTemplate from "./examples/discrete-controlled.marko";
import controlledTemplateCode from "./examples/discrete-controlled.marko?raw";

export default {
    title: "navigation & disclosure/ebay-carousel",
    component: carousel,
    parameters: {
        docs: {
            description: {
                component: Readme,
            },
        },
    },
    argTypes: {
        numberOfItems: {
            description: "The amount of items",
            table: {
                category: "Demo configuration",
            },
        },

        item: {
            name: "@item",
            description: "The contents for each item",
            table: {
                category: "@attribute tags",
            },
        },
        imageTreatment: {
            options: ["none", "matte"],
            description: 'If "matte", image treatment styles are applied.',
            table: {
                defaultValue: {
                    summary: "none",
                },
            },
            type: "select",
        },
        index: {
            type: "number",
            description: "0-based index position",
        },
        itemsPerSlide: {
            description:
                "automatically fit a number of items for each carousel slide and enable slide controls. If set to a whole number, will default to x.1 where x is the whole number set.",
        },
        gap: {
            type: "number",
            description: "override the margin between carousel items in pixels",
            table: {
                defaultValue: {
                    summary: "16",
                },
            },
        },

        "aria-label": {
            description: "a11y label text for component",
            table: {
                category: "accessibility attributes",
            },
            control: { type: "text" },
        },

        "aria-labelledby": {
            description:
                "id of element containing a11y label text for component",
            table: {
                category: "accessibility attributes",
            },
            control: { type: "text" },
        },

        "aria-roledescription": {
            description: "a11y role description for component",
            table: {
                defaultValue: {
                    summary: "Carousel",
                },

                category: "accessibility attributes",
            },
            control: { type: "text" },
        },

        "a11y-next-text": {
            description: "a11y text for next control",
            table: {
                defaultValue: {
                    summary: "Next Slide",
                },

                category: "accessibility attributes",
            },
        },

        "a11y-previous-text": {
            description: "a11y text for previous control",
            table: {
                defaultValue: {
                    summary: "Previous Slide",
                },

                category: "accessibility attributes",
            },
        },
        //     text(
        //     'badge-aria-label',
        //     'number of notifications',
        //     'Badge (only with variant=icon)'
        //     )
        // },
        onMove: {
            action: "on-move",
            description:
                "called whenever item visibility changes, including initialization",
            table: {
                category: "Events",
                defaultValue: {
                    detail: "{ [visibleIndexes] }",
                },
            },
        },
        onNext: {
            action: "on-next",
            description: "click next",
            table: {
                category: "Events",
                defaultValue: {
                    detail: "{ originalEvent }",
                },
            },
        },
        onPrevious: {
            action: "on-previous",
            description: "click previous",
            table: {
                category: "Events",
                defaultValue: {
                    detail: "{ originalEvent }",
                },
            },
        },
        onScroll: {
            action: "on-scroll",
            description: "new index is navigated to by native scrollin",
            table: {
                category: "Events",
                defaultValue: {
                    detail: "{ index }",
                },
            },
        },

        onSlide: {
            action: "on-slide",
            description: "new slide is navigated to (by controls or API)",
            table: {
                category: "Events (items-per-slide)",
                defaultValue: {
                    summary: "{ slide }",
                },
            },
        },

        onPlay: {
            action: "on-play",
            description: "called when the autoplay play button is pressed",
            table: {
                category: "Events (autoplay)",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
        onPause: {
            action: "on-pause",
            description: "called when the autoplay pause button is pressed",
            table: {
                category: "Events (autoplay)",
                defaultValue: {
                    summary: "{ originalEvent }",
                },
            },
        },
    },
};

export const Continuous = buildExtensionTemplate(
    continiousTemplate,
    continiousTemplateCode,
);

export const ContinuousImageTreatment = buildExtensionTemplate(
    continiousImageTreatmentTemplate,
    continiousImageTreatmentTemplateCode,
);

export const Discrete = buildExtensionTemplate(
    discreteTemplate,
    discreteTemplateCode,
);

export const Autoplay = buildExtensionTemplate(
    autoplayTemplate,
    autoplayTemplateCode,
);
export const preserveTabindex = buildExtensionTemplate(
    preserveTabindexTemplate,
    preserveTabindexTemplateCode,
);

export const variableSizes = buildExtensionTemplate(
    variableSizesTemplate,
    variableSizesTemplateCode,
);

export const controlled = buildExtensionTemplate(
    controlledTemplate,
    controlledTemplateCode,
);
