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

// export type PricingOptions= "standard" | "vip"
// type PricingOptionProps = {
//     id: string;
//     title: string;
//     description: string;
//     features: string[];
// };

// export const PricingOptionsData:Record<PricingOptions,PricingOptionProps>= {
//     "standard": {
//         "id":"standard",
//         "title":"Standard",
//         "description":"The basic plan",
//         features:[
//             "Basic feature1",
//             "Basic feature2",
//             "Basic feature3",
//             "Basic feature4",
//         ]

//     },
//     "vip": {
//         "id":"standard",
//         "title":"Standard",
//         "description":"Get exclusive benefits with the vip",
//         features:[
//             "vip feature1",
//             "vip feature2",
//             "vip feature3",
//             "vip feature4",
//         ]
//     }
// }

//     }
// }

export const pricingOptions = [
    {
        id: "standard",
        title: "Standard Access",
        description: "",
        features: ["feature1", "feature2", "feature3"],
        costRs: 2000,
    },
    {
        id: "vip",
        title: "VIP Access",
        description: "",
        features: ["feature4", "feature5", "feature6"],
        costRs: 4500,
    },
] as const;

// inferred
// yields: 'standard' | 'vip'
export type PricingOptionType = (typeof pricingOptions)[number]["id"];

type BookedPerson = {
    name: string;
    age?: number;
    email?: string;
    bookedOption: PricingOptionType;
};

type BookingItem = {
    bookingId: string; // generated
    stripeId: string; // referend id for strip
    pricePaidRs: number; // price paid in Rs (rd, could be inferred with stripe)
    items: BookedPerson[];
};
