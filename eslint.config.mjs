// import { dirname } from "path";
// import { fileURLToPath } from "url";
// import { FlatCompat } from "@eslint/eslintrc";
// // import boundariesPlugin from "eslint-plugin-boundaries"; // Import the plugin

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

// const compat = new FlatCompat({
//     baseDirectory: __dirname,
// });

// const eslintConfig = [
//     ...compat.extends("next/core-web-vitals", "next/typescript"),
// ];

// export default eslintConfig;

//------------------------------------
// const eslintConfig = [
//     ...compat.extends("next/core-web-vitals", "next/typescript"),

//     // Configuration for eslint-plugin-boundaries
//     {
//         plugins: {
//             boundaries: boundariesPlugin,
//         },
//         settings: {
//             "boundaries/elements": [
//                 // 1. Define global, shared elements
//                 {
//                     type: "global-components",
//                     pattern: "components/**",
//                 },
//                 {
//                     type: "global-assets",
//                     pattern: "assets/**",
//                 },
//                 {
//                     type: "global-utils",
//                     // Assuming you might create a lib or utils folder for things like Supabase client
//                     pattern: ["lib/**", "utils/**"],
//                 },

//                 // 2. Define your feature slices.
//                 // We define features based on the route groups.
//                 {
//                     type: "feature-home",
//                     pattern: "app/(public-routesgroup)/(page-home)/**",
//                 },
//                 {
//                     type: "feature-auth",
//                     pattern: "app/(public-routesgroup)/(auth-group)/**",
//                 },
//                 {
//                     type: "feature-private",
//                     pattern: "app/(private)/**",
//                 },
//             ],
//             // Add the resolver configuration here
//             "import/resolver": {
//                 typescript: {
//                     alwaysTryTypes: true,
//                 },
//             },
//         },
//         rules: {
//             // 3. Enforce the boundaries
//             "boundaries/element-types": [
//                 "error",
//                 {
//                     // By default, nothing is allowed. We must explicitly allow imports.
//                     default: "disallow",
//                     rules: [
//                         {
//                             // Rule: A feature can import from...
//                             from: [
//                                 "feature-home",
//                                 "feature-auth",
//                                 "feature-private",
//                             ],
//                             allow: [
//                                 // ...itself (files within the same feature slice)
//                                 // This is tricky with named features, so we allow imports from the same "type"
//                                 "${from.type}",

//                                 // ...and any of the globally shared elements.
//                                 "global-components",
//                                 "global-assets",
//                                 "global-utils",
//                             ],
//                             message:
//                                 "Architectural violation: Do not import from another feature's internal files. Use a shared component or utility instead.",
//                         },
//                         {
//                             // Rule: Global components can only import from other globals.
//                             // eg: Global cannot import from a feature
//                             from: "global-components",
//                             allow: [
//                                 "global-components",
//                                 "global-assets",
//                                 "global-utils",
//                             ],
//                             message:
//                                 "Architectural violation: A global component cannot depend on a specific feature.",
//                         },
//                     ],
//                 },
//             ],
//         },
//     },
// ];

// export default eslintConfig;

// // // eslint.config.mjs
// // import fs from "fs";
// // import path from "path";
// // import { defineConfig } from "eslint-define-config";

// // const featuresDir = path.join(__dirname, "app/");
// // const features = fs
// //     .readdirSync(featuresDir)
// //     .filter((name) => fs.statSync(path.join(featuresDir, name)).isDirectory());

// // // build an “element” for each feature + one for shared code
// // const elements = [
// //     ...features.map((feat) => ({
// //         type: feat,
// //         pattern: `app/${feat}/**`,
// //     })),
// //     { type: "global", pattern: "src/shared/**" },
// // ];

// // // for each feature, only allow imports from itself or shared
// // const boundaryRules = features.map((feat) => ({
// //     from: feat,
// //     allow: [feat, "shared"],
// // }));

// // export default defineConfig({
// //     root: true,
// //     extends: ["next/core-web-vitals"],
// //     plugins: ["boundaries"],
// //     settings: {
// //         "boundaries/elements": elements,
// //     },
// //     rules: {
// //         "boundaries/element-types": [
// //             "error",
// //             {
// //                 default: "disallow",
// //                 rules: boundaryRules,
// //             },
// //         ],
// //     },
// // });

// eslint.config.mjs
// import fs from 'fs';
// import path from 'path';

const projectRoot = __dirname;

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

export const eslintConfig = {
    root: true,
    extends: ["next/core-web-vitals", "plugin:@typescript-eslint/recommended"],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: projectRoot,
        project: "./tsconfig.json",
    },
    plugins: ["boundaries"],
    settings: {
        // tell eslint-plugin-boundaries about our three layers
        "boundaries/elements": elements,
    },
    rules: {
        // enforce that each layer only talks to its allowed layers
        "boundaries/element-types": [
            "error",
            {
                default: "disallow",
                rules: dependencyRules,
            },
        ],
    },
};
