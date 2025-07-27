import "./globals.css";

//Shared
import { ResponsiveNavbarDemo } from "@/shared/components/ui/ResponsiveNavBar";
import ThemeWrapper from "@/shared/components/theme-control/theme-wrapper";

import {
    websiteSubFont,
    websiteTitle,
    websiteDescription,
    // websiteColors,
    websiteURL,
    // websiteAuthor,
} from "@/shared/assets/websiteData";

//Components
import DevBorder from "@/features/_devOnly/_containers/DevBorder";

// import logoIco from "@/assets/ico/logo.ico";
// import logoPng from "@/assets/images/logo.png";
// import heroBanner from "@/assets/images/hero-banner.png";

export const metadata = {
    title: websiteTitle,
    description: websiteDescription,

    keywords: ["event", "cultral event", "2025", "Swaranjali", "nextjs"],

    // icons are now at public
    // icons: {
    //     icon: logoIco.src,
    //     shortcut: logoPng.src, // make favicon-32x32.png
    //     apple: logoPng.src,
    // },
    // authors: {
    //     name: websiteAuthor,
    // url: "https://swaranjali--"
    // },

    // OPEN GRAPH — what Facebook, LinkedIn, WhatsApp, etc., will pick up:
    metadataBase: websiteURL,

    openGraph: {
        title: websiteTitle,
        description: websiteDescription,
        url: websiteURL, // will resolve to "https://your-site.com/"
        siteName: websiteTitle,
        images: [
            {
                url: "/images/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "site preview",
                type: "image/jpeg",
            },
        ],
        locale: "en_US",
        type: "website", // or “article” if this is a blog post, etc.
    },

    // TWITTER CARD — what Twitter will use if someone tweets/pastes your link:
    twitter: {
        card: "summary_large_image", // summary (small) or summary_large_image (large banner)
        title: websiteTitle,
        description: websiteDescription,
        // images: ["/images/twitter-card.jpg"],
        // site: "@SwaranjaliOrg",        // your Twitter handle (optional)
        // creator: "@JaneDoe",           // author’s Twitter handle (optional)
    },

    // ROBOTS — control indexing/following (optional):
    robots: {
        index: true,
        follow: true,
    },

    // VIEWPORT — Next injects a default <meta name="viewport">,
    // but you can override if needed:
};

export const viewport = {
    width: "device-width",
    initialScale: 1.0,
    themeColor: "#c13c3f", // Primary brand color; can also be an array of { media, color }
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={websiteSubFont.className}>
                <ThemeWrapper>
                    <DevBorder />
                    <ResponsiveNavbarDemo />
                    {children}
                </ThemeWrapper>
            </body>
        </html>
    );
}
