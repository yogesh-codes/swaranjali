import { performancesData } from "@/assets/performancesData";
import { SparklesCore } from "@/components/ui/sparkles";
import HeroSection from "@/sections/HeroSection";
import PerformanceSection from "@/sections/PerformancesSection";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main>
            {/* <div className="z-[100] pointer-events-none w-full absolute inset-0 h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div> */}
            <HeroSection />
            <PerformanceSection />
        </main>
    );
}
