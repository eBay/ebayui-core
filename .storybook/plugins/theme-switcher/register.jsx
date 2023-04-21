import React from "react";
import addons, { types } from "@storybook/addons";
import {
    Icons,
    IconButton,
    WithTooltip,
    TooltipLinkList,
} from "@storybook/components";

const ADDON_ID = "ebayui/theme-switcher";
const START_PATH = location.host === "ebay.github.io" ? "/ebayui-core/" : "/";
const LINKS = [
    {
        id: "1",
        title: "DS6",
        href: `${START_PATH}`,
    },
    {
        id: "2",
        title: "DS4",
        href: `${START_PATH}ds4/`,
    },
].map((link) => ({
    ...link,
    href: link.href + (location.search || ""),
    active: location.pathname === link.href,
    onClick(ev) {
        ev.preventDefault();
        location.replace(link.href + (location.search || ""));
    },
}));

const ThemeSwitcher = () => {
    return (
        <WithTooltip
            placement="top"
            trigger="click"
            closeOnClick
            tooltip={() => <TooltipLinkList links={LINKS} />}
        >
            <IconButton title="Set the design system for the components">
                <Icons icon="paintbrush" />
            </IconButton>
        </WithTooltip>
    );
};

addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
        type: types.TOOL,
        title: "design system switcher",
        match: ({ viewMode }) => viewMode === "story",
        render: () => <ThemeSwitcher />,
    });
});
