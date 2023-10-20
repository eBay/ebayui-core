import fsp from "node:fs/promises";

import { mergeConfig } from "vite";

// This is done because lasso does not work with readme.md?raw
// Lasso is being used to run our browser tests with @marko/test
// If we get rid of lasso we should remove this code and switch all readmes to use ?raw
const markdownMatch = /\.md$/;
const rawMarkdown = {
    name: "markdown-loader",
    async load(id) {
        if (markdownMatch.test(id)) {
            // raw query, read file and return as string
            return `export default ${JSON.stringify(
                await fsp.readFile(id, "utf-8")
            )}`;
        }
    },
};

export default {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    framework: "@storybook/marko-vite",
    addons: [
        {
            name: "@storybook/addon-docs",
            options: {
                transcludeMarkdown: true,
            },
        },
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
    ],
    docs: {
        autodocs: true,
        defaultName: "Documentation",
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [rawMarkdown],
        });
    },
};
