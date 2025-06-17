// src/hooks/useScreenWidth.ts
import { useSyncExternalStore } from "react";

/**
 * A React hook that re-reads the window width on resize,
 * but only registers listener in the client.
 */

export function getScreenHeight(): number {
    if (typeof window !== "undefined") {
        return window.innerHeight || document.documentElement.clientWidth;
    }
    return 0;
}

export function useScreenHeight(): number {
    // subscribe only runs in the browser
    const subscribe = (callback: () => void) => {
        if (typeof window === "undefined") {
            return () => {};
        }
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    };

    // getSnapshot reads the current width (0 on SSR)
    const getSnapshot = () => getScreenHeight();

    // getServerSnapshot is used during SSR; start at 0
    const getServerSnapshot = () => 0;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
