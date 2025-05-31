import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { websiteMainFont, websiteSubFont } from "@/assets/websiteData";
import DevBorder from "@/sections/DevBorder/DevBorder";
import { AnimatePresence, motion } from "motion/react";

import PageTransition from "@/components/PageTransition";
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
