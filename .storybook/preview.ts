import "./custom-styles.less";
import "@ebay/skin/tokens";
import "@ebay/skin/global";
import "@ebay/skin/marketsans";
import "@ebay/skin/utility";

export const parameters = {
    layout: "centered",
    controls: { expanded: true },
    options: {
        storySort: {
            order: [
                "Welcome",
                "Getting Started",
                "Contributing",
                "buttons",
                "dialogs",
                "form input",
                "graphics & icons",
                "media",
                "navigation & disclosure",
                "notices & tips",
                "progress",
                "building blocks",
            ],
        },
    },
};
