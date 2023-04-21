import "./custom-styles.less";
import "@ebay/skin/tokens";
import "@ebay/skin/global";
import "@ebay/skin/marketsans";
import order from "./storyOrder";

export const parameters = {
    layout: "centered",
    controls: { expanded: true },
    options: {
        storySort: { order },
    },
};
