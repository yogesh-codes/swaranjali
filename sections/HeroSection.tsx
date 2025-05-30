import PageContent from "@/components/PageContent";
import React from "react";
import {
    websiteTitle,
    websiteDescription,
    websiteMainFont,
} from "@/assets/websiteData";

const HeroSection = () => {
    return (
        <section className="bg-red-200">
            <PageContent>
                <div className="pt-30 pb-10">
                    <h1 className="text-center">
                        <span
                            className={`${websiteMainFont.className} text-6xl`}
                        >
                            {websiteTitle}{" "}
                        </span>
                        2025
                    </h1>
                    <p className="text-center">{websiteDescription}</p>

                    <div className="flex flex-col items-center content-center justify-center gap-2 pt-5">
                        <button className="max-w-full w-60 rounded-2xl bg-teal-400">
                            Let's go
                        </button>
                        <button className="max-w-full w-60 rounded-2xl bg-teal-400">
                            Book my Ticket!
                        </button>
                    </div>
                </div>
            </PageContent>
        </section>
    );
};

export default HeroSection;
