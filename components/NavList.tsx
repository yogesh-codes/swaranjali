import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

interface NavListProps {}

const NavList = ({}: NavListProps) => {
    return (
        <>
            {
                <ul className="z-100 flex flex-row rounded-2xl bg-white/50 backdrop-blur-sm w-full">
                    <NavItem title="Home" href="/" />
                    <NavItem title="About" href="/about" />
                    <NavItem title="FAQ" href="/" />
                    <NavItem title="Download Invitation" href="/" />
                </ul>
            }
        </>
    );
};

export default NavList;
