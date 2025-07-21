import HeroSection from "./_sections/HeroSection";
import PerformanceSection from "./_sections/PerformancesSection";

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
