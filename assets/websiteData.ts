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

export const websiteAuthor = { name: "Yogesh" }; //,url:"/about"
