// zzzzapp/theme-wrapper.tsx
"use client";

import { useLayoutEffect, useState, ReactNode } from "react";

type ThemeWrapperProps = { children: ReactNode };

export default function ThemeWrapper({ children }: ThemeWrapperProps) {
    const [isThemeReady, setIsThemeReady] = useState(false);

    useLayoutEffect(() => {
        const stored = localStorage.getItem("theme");
        const osPrefersDark = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const shouldBeDark = stored === "dark" || (!stored && osPrefersDark);

        if (shouldBeDark) {
            document.documentElement.classList.add("theme-dark");
        } else {
            document.documentElement.classList.remove("theme-dark");
        }

        setIsThemeReady(true);
    }, []);

    // Until we confirm the theme, show nothing (or a simple loader if you prefer)
    if (!isThemeReady) {
        return null;
    }

    // Now that <html> already existed (from layout.tsx), we can safely render children
    return <>{children}</>;
}
