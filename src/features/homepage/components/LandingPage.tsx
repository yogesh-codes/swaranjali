import HeroSection from "./HeroSection";
import PerformanceSection from "./PerformancesSection";

export const metadata = {
    title: "Swaranjali 2025",
};

export default function LandingPage() {
    return (
        <main>
            <HeroSection />
            <PerformanceSection />
        </main>
    );
}
