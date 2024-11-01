import prettier from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";
import babelParser from "@babel/eslint-parser";

const compatbility = new FlatCompat();

export default [
    ...compatbility.extends("eslint-config-ebay"),
    prettier,
    {
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                sourceType: "module",
                babelOptions: {
                    plugins: ["@babel/plugin-syntax-import-assertions"],
                },
            },
        },
    },
    {
        ignores: [
            "_cdn/",
            "**/docs/**",
            "dist/",
            "static/",
            "_site",
            "**/*.marko.js",
        ],
    },
];
