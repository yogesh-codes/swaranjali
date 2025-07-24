"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

//Assets
import MyPageContent from "@/shared/components/MyPageContent";
import {
    websiteTitle,
    websiteDescription,
    websiteMainFont,
    websiteHeroBannerImg,
} from "@/shared/assets/websiteData";

//Components
import TypewriterFlickerHeading from "./TypewriterFlickerHeading";
import Button from "@/shared/components/Button";
import { SparklesCore } from "@/shared/components/ui/sparkles";
import EventAnnouncementContainer from "./EventAnnouncementContainer";

//Utils

const HeroSection = () => {
    return (
        <section className="relative bg-primary min-h-[480px]">
            <div className="absolute z-[99] pointer-events-none w-full inset-0 h-[fit]">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"
                />
            </div>
            <Image
                fill
                src={websiteHeroBannerImg}
                alt=""
                className="object-cover"
            />
            <div className="absolute w-full h-full backdrop:blur-xl bg-nlight/60"></div>
            <MyPageContent>
                <div className="pt-30 pb-5">
                    <TypewriterFlickerHeading
                        headingText={websiteTitle}
                        headingClassName={websiteMainFont.className}
                    />

                    <p className="text-center">{websiteDescription}</p>

                    <EventAnnouncementContainer />
                    <div className="flex flex-col items-center content-center justify-center gap-2 pt-5">
                        <Link href="/login">
                            <Button
                                variant="outline"
                                className="max-w-full w-60 rounded-2xl "
                            >
                                Login
                            </Button>
                        </Link>
                        <Link href="/login">
                            <Button
                                variant="primary"
                                className="max-w-full w-60 rounded-2xl"
                            >
                                Register
                            </Button>
                        </Link>
                    </div>
                </div>
            </MyPageContent>
        </section>
    );
};

export default HeroSection;
