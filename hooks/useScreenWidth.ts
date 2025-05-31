// // useScreenWidth.ts
// import { useSyncExternalStore } from "react";
// import { getScreenWidth } from "../utils/screenUtils";

// function subscribe(cb: () => void) {
//     if (typeof window !== "undefined") {
//         window.addEventListener("resize", cb);
//         return () => window.removeEventListener("resize", cb);
//     }
//     return () => {};
// }

// export function useScreenWidth() {
//     return useSyncExternalStore(
//         subscribe,
//         () => getScreenWidth(),
//         () => 0 // for server-side rendering
//     );
// }

// src/hooks/useScreenWidth.ts
import { useSyncExternalStore } from "react";

export function getScreenWidth(): number {
    if (typeof window !== "undefined") {
        return window.innerWidth || document.documentElement.clientWidth;
    }
    return 0;
}

/**
 * A React hook that re-reads the window width on resize,
 * but only registers listener in the client.
 */
export function useScreenWidth(): number {
    // subscribe only runs in the browser
    const subscribe = (callback: () => void) => {
        if (typeof window === "undefined") {
            return () => {};
        }
        window.addEventListener("resize", callback);
        return () => window.removeEventListener("resize", callback);
    };

    // getSnapshot reads the current width (0 on SSR)
    const getSnapshot = () => getScreenWidth();

    // getServerSnapshot is used during SSR; start at 0
    const getServerSnapshot = () => 0;

    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
