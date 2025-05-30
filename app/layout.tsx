import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { websiteMainFont, websiteSubFont } from "@/assets/websiteData";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={websiteSubFont.className}>
                <NavBar />
                {children}
            </body>
        </html>
    );
}
