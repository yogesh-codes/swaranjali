import {
    websiteSubFont,
    websiteTitle,
    websiteDescription,
} from "@/assets/websiteData";
import "./globals.css";
import DevBorder from "@/sections/DevBorder/DevBorder";
import { ResponsiveNavbarDemo } from "@/components/ui/ResponsiveNavBar";
import ThemeWrapper from "./theme-wrapper";

import favicon from "@/assets/ico/logo.ico";

export const metadata = {
    title: websiteTitle,
    description: websiteDescription,
    favicon: favicon,
    keywords: ["event", "cultral event", "2025", "Swaranjali", "nextjs"],
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
                    {/* <PageTransition> */}
                    <DevBorder />
                    <ResponsiveNavbarDemo />
                    {children}
                    {/* </PageTransition> */}
                </ThemeWrapper>
            </body>
        </html>
    );
}
