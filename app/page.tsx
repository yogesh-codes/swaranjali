// import { performancesData } from "@/assets/performancesData";

import HeroSection from "@/app/_containers/HeroSection";
import PerformanceSection from "@/app/_containers/PerformancesSection";

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
