// File: next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    productionBrowserSourceMaps: true,

    // 1) Turbopack rules (for `next dev`)
    turbopack: {
        rules: {
            "*.svg": {
                loaders: ["@svgr/webpack"],
                as: "*.js",
            },
        },
    },

    // 2) Webpack override (for `next build` → `next start`)
    //notes: run dev uses turbopack but build uses webpack,
    // so need to override webpack for working with svg
    webpack(config, { isServer }) {
        // Only apply this on the client side (so you don’t break any server SVG usage).
        if (!isServer) {
            config.module.rules.push({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: [
                    {
                        loader: "@svgr/webpack",
                        options: {
                            svgo: true,
                            svgoConfig: {
                                plugins: [
                                    {
                                        name: "removeViewBox",
                                        active: false,
                                    },
                                ],
                            },
                        },
                    },
                ],
            });
        }

        return config;
    },
};

export default nextConfig;
