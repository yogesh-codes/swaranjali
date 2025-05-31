import "./globals.css";

import { websiteSubFont } from "@/assets/websiteData";
import DevBorder from "@/sections/DevBorder/DevBorder";

import { ResponsiveNavbarDemo } from "@/components/ui/ResponsiveNavBar";

export const metadata = {
    title: "Next.js + Framer Motion Example",
    description: "Fade page transitions with AnimatePresence",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={websiteSubFont.className}>
                {/* <PageTransition> */}
                <DevBorder />
                <ResponsiveNavbarDemo />
                {children}
                {/* </PageTransition> */}
            </body>
        </html>
    );
}
