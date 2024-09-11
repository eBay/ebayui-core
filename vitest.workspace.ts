import { defineWorkspace } from "vitest/config";

export default defineWorkspace([
    {
        extends: "vite.config.mjs",
        test: {
            name: "browser",
            browser: {
                enabled: true,
                name: "chromium",
                provider: "playwright",
                headless: true,
            },
            include: ["src/**/test.browser.{ts,js}"],
        },
    },
    {
        extends: "vite.config.mjs",
        test: {
            name: "server",
            environment: "node",
            include: ["src/**/test.server.{ts,js}"],
        },
    },
]);
