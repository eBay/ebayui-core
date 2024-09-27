import fsp from "node:fs/promises";
import { defineConfig } from "vite";
import marko from "@marko/vite";
const isCI = !!process.env.CI;

const markdownMatch = /\.md$/;
const rawMarkdown = {
    name: "markdown-loader",
    async load(id) {
        if (markdownMatch.test(id)) {
            // raw query, read file and return as string
            return `export default ${JSON.stringify(
                await fsp.readFile(id, "utf-8"),
            )}`;
        }
    },
};

export default defineConfig({
    test: {
        pool: "forks",
        globals: true,
        coverage: {
            enabled: isCI,
            provider: "istanbul",
            reporter: ["json-summary", "html", "cobertura", "lcov"],
            include: ["src/**/*"],
            exclude: [
                "src/**/examples",
                "src/components/ebay-icon/icons/",
                "src/**/*.stories.ts",
            ],
        },
    },

    plugins: [marko({ linked: false }), rawMarkdown],
});
