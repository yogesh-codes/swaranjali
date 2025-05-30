import React from "react";
import NavItem from "./NavItem";
import NavList from "./NavList";

import { websiteSubFont } from "@/assets/websiteData";

const NavBar = () => {
    return (
        <div
            className={`w-full fixed z-[100] flex flex-row justify-end ${websiteSubFont.className}`}
        >
            <NavList />
            <div className="h-10 " />
        </div>
    );
};

export default NavBar;
