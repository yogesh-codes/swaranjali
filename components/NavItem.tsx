import Link from "next/link";
import React from "react";

interface NavItemProps {
    title: string;
    href: string;
}

const NavItem = ({ title, href }: NavItemProps) => {
    return (
        <li>
            <Link href={href}>
                {" "}
                <button className="py-1 px-4 bg-orange-400 rounded-2xl cursor-pointer">
                    {title}
                </button>
            </Link>
        </li>
    );
};

export default NavItem;
