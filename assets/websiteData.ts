import { Lavishly_Yours, Playfair_Display } from "next/font/google";

import logo from "@/assets/images/logo-transparent.png";
import heroBannerImg from "@/assets/images/hero-banner.png";

export const websiteTitle = "Swaranjali";
export const websiteDescription =
    "Celebrating India's rich heritage through soulful music and timeless dance traditions.";
export const websiteLogoTransparent = logo;
export const websiteHeroBannerImg = heroBannerImg;

export const websiteCTAMessage =
    "Join us on 21st Nov at Nova Hall for an evening of Indian classical & folk performances. Register now!";

export const websiteEventDate = new Date(2025, 10, 21, 18, 0);
export const websiteMainFont = Lavishly_Yours({
    preload: true,
    weight: "400",
    subsets: ["latin"],
    // subsets: ["latin"],
    // display: "auto",
});

export const websiteSubFont = Playfair_Display({
    weight: "400",
    subsets: ["latin"],
});

export const websiteColors = {
    primary: "#c13c3f",
};

export const websiteURL = new URL(
    "https://swaranjali-yogesh-codes-projects.vercel.app/"
);

export const websiteAuthor = { name: "Yogesh V" }; //,url:"/about"

type ProjectFeature = {
    id: string;
    title: string;
    description: string;
};

export const projectFeatures: ProjectFeature[] = [
    {
        id: "feature1",
        title: "Responsive ✅",
        description:
            "The site adapts its layout to fit all screens, from phones to widescreen monitors.",
    },
    {
        id: "feature2",
        title: "SEO-Friendly (In progress)",
        description:
            "Optimized metadata, semantic HTML, and fast load times ensure the site ranks well in search engines.",
    },
    // {
    //     id: "feature3",
    //     title: "Accessibility",
    //     description:
    //         "Built with WCAG standards in mind—keyboard navigation, ARIA roles, and sufficient color contrast.",
    // },
    // {
    //     id: "feature4",
    //     title: "Performance Optimized",
    //     description:
    //         "Lazy loading, code-splitting, and minimized assets deliver sub-100 ms Time to Interactive.",
    // },
    {
        id: "feature5",
        title: "Cross-Browser Compatibility ✅",
        description:
            "Tested and verified on all modern browsers (Chrome, Firefox, Safari, Edge) and graceful fallback for older versions.",
    },
    //   {
    //     id: "feature6",
    //     title: "Security Best Practices ",
    //     description: "HTTPS enforced, Content Security Policy (CSP) headers, and sanitization to protect against XSS/SQL injection."
    //   },
    //   {
    //     id: "feature7",
    //     title: "User Authentication",
    //     description: "Secure login/signup flows with JWT-based sessions, password hashing, and optional OAuth providers."
    //   },
    // {
    //     id: "feature8",
    //     title: "Content Management",
    //     description:
    //         "Integrated CMS or headless CMS support for easy editing and updating of site content without a developer.",
    // },
    //   {
    //     id: "feature9",
    //     title: "Analytics & Reporting",
    //     description: "Built-in Google Analytics (or equivalent) tracking to monitor user behavior, pageviews, and conversion rates."
    //   },
    {
        id: "feature10",
        title: "Dark Mode Support ✅",
        description:
            "You can toggle between light and dark themes using the toggle button at the top. Your preference is remembered.",
    },
    //   {
    //     id: "feature11",
    //     title: "Internationalization (i18n)",
    //     description: "Multi-language support with locale detection and easy translation management."
    //   },
    {
        id: "feature12",
        title: "Progressive Web App (PWA) (In progress)",
        description:
            "You can 'Install' this site onto your phone/tablet/device, click on an icon in your homescreen/desktop to open it.",
    },
    {
        id: "featurex",
        title: "More features on the way!",
        description: "",
    },
];
