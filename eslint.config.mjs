import path from "path";
import { fileURLToPath } from "url";
import tseslint from "typescript-eslint";
import boundariesPlugin from "eslint-plugin-boundaries";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
    baseDirectory: __dirname,
});

// (1) define each layer as an “element”
const elements = [
    { type: "app", pattern: "src/app/**" },
    { type: "feature", pattern: "src/features/**" },
    { type: "shared", pattern: "src/shared/**" },
];

// (2) for each “from” type, list exactly which types it may import
const dependencyRules = [
    { from: "app", allow: ["app", "feature", "shared"] },
    { from: "feature", allow: ["feature", "shared"] },
    { from: "shared", allow: ["shared"] },
];

export default tseslint.config(
    // Extends Next.js core web vitals config using the compatibility utility
    ...compat.extends("next/core-web-vitals"),

    // Extends recommended TypeScript rules that require type checking
    ...tseslint.configs.recommendedTypeChecked,
    {
        // This object configures the parser for type-aware linting
        languageOptions: {
            parserOptions: {
                project: true,
                tsconfigRootDir: __dirname,
            },
        },
    },
    {
        // Configuration for the boundaries plugin
        plugins: {
            boundaries: boundariesPlugin,
        },
        settings: {
            "boundaries/elements": elements,
        },
        rules: {
            "boundaries/element-types": [
                "error",
                {
                    default: "disallow",
                    rules: dependencyRules,
                },
            ],
            // You can add or override rules here
            "@typescript-eslint/no-unused-vars": "warn",
            // "@typescript-eslint/no-explicit-any": "warn",
        },
    }
);
