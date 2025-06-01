// import { performancesData } from "@/assets/performancesData";

import HeroSection from "@/sections/HeroSection";
import PerformanceSection from "@/sections/PerformancesSection";

export const metadata = {
    title: "Swaranjali 2025",
};

export default function Home() {
    return (
        <main>
            <HeroSection />
            <PerformanceSection />
        </main>
    );
}
