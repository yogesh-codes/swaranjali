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
} from "@/shared/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

import ThemeControlMenu from "@/shared/components/theme-control/ThemeControlMenu";
import { UserProfileMenu } from "../UserProfileMenu";

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
                {/* Text links */}
                <div className="">
                    <NavItems items={navItems} />
                </div>
                {/* Button Links */}
                <div className="flex items-center gap-4">
                    <NavbarButton variant="transparent" as={"div"}>
                        <ThemeControlMenu />
                    </NavbarButton>

                    <UserProfileMenu />

                    <NavbarButton variant="accent" as={"a"} href="/contact">
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
                        <NavbarButton
                            as={"div"}
                            onClick={() => {}}
                            variant="transparent"
                            className="w-full text-center"
                        >
                            <ThemeControlMenu />
                        </NavbarButton>

                        <UserProfileMenu />

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
