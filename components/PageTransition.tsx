"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

interface PageTransitionProps {
    children: ReactNode;
}

// const variants = {
//     hidden: { opacity: 0 },
//     enter: {
//         opacity: 1,
//         transition: { duration: 0.5, ease: "easeInOut" },
//     },
//     exit: {
//         opacity: 0,
//         transition: { duration: 0.5, ease: "easeInOut" },
//     },
// };

export default function PageTransition({ children }: PageTransitionProps) {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait" initial={false}>
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ position: "relative", width: "100%" }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
}
