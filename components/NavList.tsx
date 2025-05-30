import Link from "next/link";
import React from "react";
import NavItem from "./NavItem";

interface NavListProps {}

const NavList = ({}: NavListProps) => {
    return (
        <ul className="flex flex-row">
            <NavItem title="Home" href="/" />
            <NavItem title="Register" href="/" />
            <NavItem title="FAQ" href="/" />
            <NavItem title="Download Invitation" href="/" />
        </ul>
    );
};

export default NavList;
