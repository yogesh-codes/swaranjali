import { MdSunny, MdDarkMode } from "react-icons/md";
import { useLayoutEffect, useState } from "react";

export default function ThemeControlMenu() {
    const [isDark, setIsDark] = useState<boolean | null>(null);

    // 2. if mounted-> read the real preference and update
    useLayoutEffect(() => {
        const stored = localStorage.getItem("theme");
        const osPrefers = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const shouldBeDark =
            stored === "dark" || (stored === null && osPrefers);
        setIsDark(shouldBeDark);
        console.log("In theme menu, On mount, I'm setIsDark to ", shouldBeDark);
    }, []);

    // 3. premise- isDark changed -> update HTML class
    useLayoutEffect(() => {
        console.log(
            "premise effect- val of isDark has changed... isDark now is",
            isDark
        );
        if (isDark === null) {
            return;
        }
        console.log("conclusion- updating html and localstorage");

        document.documentElement.classList.toggle("theme-dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    // premis- clicked toggle button-> conc- toggle setIsDark
    const toggleTheme = () => {
        //console.log("You clicked toggle");
        //console.log("right now isDark=",isDark,"attempting to set it to",!isDark);
        setIsDark(!isDark);
    };

    return (
        <div className="block">
            <button
                className="rounded-3xl text-3xl cursor-pointer text-puredark"
                onClick={toggleTheme}
            >
                {isDark ? (
                    <MdDarkMode className="text-puredark" />
                ) : (
                    <MdSunny className="text-puredark" />
                )}
            </button>
        </div>
    );
}
