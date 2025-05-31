import { performancesData } from "@/assets/performancesData";
import HeroSection from "@/sections/HeroSection";
import PerformanceSection from "@/sections/PerformancesSection";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <PerformanceSection />
        </main>
    );
}
