/* eslint camelcase: "off" */
import { createRenderBody } from "../../../../common/test-utils/shared";

export const Default_Accordion = {
    details: [
        {
            summary: {
                renderBody: createRenderBody("Item 1"),
            },
            renderBody: createRenderBody(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ),
        },
        {
            summary: {
                renderBody: createRenderBody("Item 2"),
            },
            renderBody: createRenderBody(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ),
        },
        {
            summary: {
                renderBody: createRenderBody("Item 3"),
            },
            renderBody: createRenderBody(
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            ),
        },
    ],
};

export const autoCollapse_Accordion = Object.assign({}, Default_Accordion, {
    autoCollapse: true,
});
