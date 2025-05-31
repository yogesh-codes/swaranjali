import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { websiteMainFont, websiteSubFont } from "@/assets/websiteData";
import DevBorder from "@/sections/DevBorder/DevBorder";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={websiteSubFont.className}>
                <DevBorder />
                <NavBar />
                {children}
            </body>
        </html>
    );
}
