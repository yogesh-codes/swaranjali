"use client";
import { cn } from "@/app/(auth-group)/_lib/utils";
import {} from "react-icons";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { websiteMainFont } from "@/assets/websiteData";
import Link from "next/link";

import LogoSvg from "@/assets/svg/logo-transparent.svg"; //eslint-disable-line @typescript-eslint/no-unused-vars

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
    }[];
    className?: string;
    onItemClick?: () => void;
}

interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-5 z-40 w-full", className)}
        >
            {React.Children.map(children, (child) =>
                React.isValidElement(child)
                    ? React.cloneElement(
                          child as React.ReactElement<{ visible?: boolean }>,
                          { visible }
                      )
                    : child
            )}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "50%" : "100%",
                y: visible ? 8 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 40,
            }}
            style={{
                minWidth: "800px",
            }}
            className={cn(
                `relative z-[200] mx-auto 
                hidden w-full 
                max-w-7xl flex-row items-center justify-between 
                self-start rounded-full bg-transparent 
                px-4 py-2 lg:flex`,
                visible && `bg-purelight/80`,
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null); // eslint-disable-line @typescript-eslint/no-unused-vars

    return (
        <motion.div
            onMouseLeave={() => setHovered(null)}
            className={cn(
                `aaabsolute inset-0 hidden 
                flex-1 flex-row items-center justify-center space-x-2 
                text-base font-medium 
                text-ndark 
                transition duration-200 
                hover:text-pureblack 
                lg:flex lg:space-x-2`,
                className
            )}
        >
            {items.map((item, idx) => (
                <a
                    onMouseEnter={() => setHovered(idx)}
                    onClick={onItemClick}
                    className="relative px-4 py-2 text-ndark "
                    key={`link-${idx}`}
                    href={item.link}
                >
                    {/* {hovered === idx && (
                        <motion.div
                            layoutId="hovered"
                            className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                        />
                    )} */}
                    <span className="relative z-20">{item.name}</span>
                </a>
            ))}
        </motion.div>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "4px" : "2rem",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-100 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
                visible && "bg-purelight/80",
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({
    children,
    className,
}: MobileNavHeaderProps) => {
    return (
        <div
            className={cn(
                "flex w-full flex-row items-center justify-between",
                className
            )}
        >
            {children}
        </div>
    );
};

export const MobileNavMenu = ({
    children,
    className,
    isOpen,
    onClose, //eslint-disable-line @typescript-eslint/no-unused-vars
}: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        `bg-nlight
                        
                        absolute inset-x-0 top-16  
                        flex w-full flex-col items-start justify-start gap-4 
                        rounded-lg px-4 py-8 
                        shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] 
                        `,
                        className
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavToggle = ({
    isOpen,
    onClick,
}: {
    isOpen: boolean;
    onClick: () => void;
}) => {
    return (
        <button>
            {isOpen ? (
                <RxCross2 className="text-ndark text-3xl" onClick={onClick} />
            ) : (
                <RxHamburgerMenu
                    className="text-ndark text-3xl"
                    onClick={() => {
                        onClick();
                        // isOpen = false;
                    }}
                />
            )}
        </button>
    );
};

export const NavbarLogo = () => {
    return (
        <Link
            href="/"
            className="relative z-20 mr-2 flex items-center space-x-2 px-2 py-1 text-sm text-black"
        >
            {/* <Image
                src={websiteLogoTransparent}
                alt="logo"
                width={40}
                height={40}
                className=""
            /> */}

            <div className="">
                <LogoSvg className="w-[40px] h-[40px] text-ndark" />
            </div>

            <span className={`text-xl text-ndark ${websiteMainFont.className}`}>
                Swaranjali
            </span>
        </Link>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    ...props
}: {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "dark" | "gradient" | "accent";
} & (
    | React.ComponentPropsWithoutRef<"a">
    | React.ComponentPropsWithoutRef<"button">
)) => {
    const baseStyles =
        "px-4 py-2 rounded-md button bg-n-100 text-pureblack text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

    const variantStyles = {
        primary: "text-purewhite bg-primary-500 ",
        secondary: "bg-transparent shadow-none text-ndark",
        dark: "bg-pureblack text-nlight shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        gradient:
            "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
        accent: "text-nlight bg-accent",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className)}
            {...props}
        >
            {children}
        </Tag>
    );
};
