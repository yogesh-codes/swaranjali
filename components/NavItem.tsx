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
                <button className="py-1 px-2 bg-orange-400 rounded-2xl">
                    {title}
                </button>
            </Link>
        </li>
    );
};

export default NavItem;
