import {
    Lavishly_Yours,
    Dancing_Script,
    Gloria_Hallelujah,
    Playfair_Display,
} from "next/font/google";

export const websiteTitle = "Swaranjali";
export const websiteDescription = "Where Music Unites Cultures";

export const websiteCTAMessage =
    "Join us on 21st Nov at Nova Hall for an evening of Indian classical & folk performances. Register now!";

export const websiteMainFont = Lavishly_Yours({
    preload: true,
    weight: "400",
    // subsets: ["latin"],
    // display: "auto",
});

export const websiteSubFont = Playfair_Display({
    weight: "400",
});
