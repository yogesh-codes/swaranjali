// File: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    // No need to set experimental.appDir anymore; it's implicit in Next.js 15+
    turbopack: {
        rules: {
            // Match any import ending in .svg
            "*.svg": {
                // Use SVGR to transform SVG into a React component
                loaders: ["@svgr/webpack"],
                // Emit as a JS module so you can `import Logo from './logo.svg'`
                as: "*.js",
            },
        },
    },
};

export default nextConfig;
