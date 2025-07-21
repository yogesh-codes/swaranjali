import LandingPage from "./(landing-page)/LandingPage";
import DashboardPage from "./(logged-group)/dashboard/page";

export const metadata = {
    title: "Home | Swaranjali",
};

export default function Root() {
    const user = null;
    if (user) return <DashboardPage />;
    else return <LandingPage />;
}
