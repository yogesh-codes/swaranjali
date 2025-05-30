import HeroSection from "@/sections/HeroSection";
import PerformersSection from "@/sections/PerformersSection";
import Image from "next/image";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <h2>Perf</h2>
            <PerformersSection />
        </main>
    );
}
