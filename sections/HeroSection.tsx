"use client";
import PageContent from "@/components/PageContent";
import React from "react";
import {
    websiteTitle,
    websiteDescription,
    websiteMainFont,
    websiteHeroBannerImg,
} from "@/assets/websiteData";
import Image from "next/image";
import TypewriterFlickerHeading from "@/components/TypewriterFlickerHeading";

const HeroSection = () => {
    return (
        <section className="relative bg-red-200 h-[480px]">
            <Image
                fill
                src={websiteHeroBannerImg}
                alt=""
                className="object-cover"
            />
            <div className="absolute w-full h-full backdrop:blur-xl bg-white/65"></div>
            <PageContent>
                <div className="pt-30 pb-10">
                    <TypewriterFlickerHeading
                        headingText={websiteTitle}
                        headingClassName={websiteMainFont.className}
                    />
                    <p className="text-center">{websiteDescription}</p>

                    <div className="flex flex-col items-center content-center justify-center gap-2 pt-5">
                        <button className="max-w-full w-60 rounded-2xl bg-nlight">
                            This Year's Performance Setlist
                        </button>
                        <button className="max-w-full w-60 rounded-2xl bg-accent">
                            Register
                        </button>
                    </div>
                </div>
            </PageContent>
        </section>
    );
};

export default HeroSection;
