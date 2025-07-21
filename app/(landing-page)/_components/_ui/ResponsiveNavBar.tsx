"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/app/(landing-page)/_components/_ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";
import ThemeControlMenu from "../../../_theme-control/_components/ThemeControlMenu";

export function ResponsiveNavbarDemo() {
    const navItems = [
        {
            name: "Download Setlist",
            link: "/download-setlist",
        },
        {
            name: "Demo Details",
            link: "/demo-details",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <Navbar className="">
            {/* Desktop Navigation */}
            <NavBody className="justify-center">
                <NavbarLogo />
                <div className="">
                    <NavItems items={navItems} />
                </div>
                <div className="flex items-center gap-4">
                    <NavbarButton variant="secondary">
                        <ThemeControlMenu />
                    </NavbarButton>
                    <NavbarButton variant="secondary" href="/login">
                        Register
                    </NavbarButton>
                    <NavbarButton variant="accent" href="/contact">
                        Contact Us
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>

                <MobileNavMenu
                    isOpen={isMobileMenuOpen}
                    onClose={() => setIsMobileMenuOpen(false)}
                    className="flex flex-col items-center gap-3"
                >
                    {navItems.map((item, idx) => (
                        <Link
                            key={`mobile-link-${idx}`}
                            href={item.link}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="relative text-primary-500 "
                        >
                            <span className="block">{item.name}</span>
                        </Link>
                    ))}
                    <div className="w-full flex flex-col items-center gap-3">
                        <div>
                            <ThemeControlMenu />
                        </div>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            className="w-full text-center"
                            href="/login"
                        >
                            {/* <NavbarButton */}
                            Login
                            {/* </NavbarButton> */}
                        </NavbarButton>
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="accent"
                            className="w-full"
                            href="/contact"
                        >
                            Contact Us
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </Navbar>
    );
}
