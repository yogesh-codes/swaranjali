import React from "react";

//Assets
import { performancesData } from "@/assets/performancesData";
import Image from "next/image";
import TwoColumnLayout from "@/components/TwoColumnLayout";
import PageContent from "@/components/PageContent";

type PerformersSectionProps = {};

const PerformersSection = ({}: PerformersSectionProps) => {
    const data = performancesData;

    return (
        <section className="relative">
            <div className="fixed w-screen h-[400px]">
                <Image
                    className="absolute object-cover"
                    src={performancesData[0].photoHref}
                    fill
                    alt=""
                />
            </div>

            <PageContent>
                <h2>Here are our Performances!</h2>
                {data.map((item) => {
                    return (
                        <div
                            className="w-full flex flex-row justify-center items-center pt-5 pb-5"
                            key={item.id}
                            id={item.id}
                        >
                            <div className=" relative w-full h-200">
                                {/* <Image
                                    className="absolute rounded-[40px] object-cover"
                                    src={item.photoHref} <--- Depending on which artist is onscreen, I want to switch between photos
                                    alt=""
                                    fill={true}
                                /> */}
                                <div className="relative z-10 ">
                                    <div>
                                        <h2 className="pt-5 text-dark">
                                            {item.title}
                                        </h2>
                                        <p className="pt-2 pb-2 text-white">
                                            {item.description}
                                        </p>
                                    </div>
                                    <div>
                                        Artists:
                                        {item.artists.map((artist) => (
                                            <div key={artist.name}>
                                                {artist.name}-{artist.role}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </PageContent>
        </section>
    );
};

export default PerformersSection;
