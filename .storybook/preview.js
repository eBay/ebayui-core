import "./custom-styles.less";
import "@ebay/skin/tokens";
import "@ebay/skin/global";
import "@ebay/skin/marketsans";

export const parameters = {
    layout: "centered",
    controls: { expanded: true },
    options: {
        storySort: {
            order: [
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
