import React from "react";
import { PerformanceDataType } from "@/assets/performancesData";
import { timelineData, TimelineDataProps } from "@/assets/timelineData";
import PageContent from "@/components/PageContent";
import Image from "next/image";
import { displayHourTime } from "@/utils/dateUtils";
import TagsContainer, { TagItemData } from "@/components/TagsContainer";

interface PerformanceCardProps
    extends PerformanceDataType,
        Partial<Omit<TimelineDataProps, "id">> {}

const PerformanceCard = (item: PerformanceCardProps) => {
    console.log(item.startDate);
    console.log(item.endDate);

    const populatedTagItems: TagItemData[] = item.artists.map((artist) => {
        return {
            title: artist.name,
            subTitle: artist.role,
            extraText: artist.bio,
        };
    });

    return (
        <PageContent>
            <div
                className="min-h-[200px]  
                px-5 rounded-2xl 
                max-w-[500px] md:max-w-[600px] lg:max-w-[1200px]

                relative
                flex flex-col
            "
            >
                <div
                    className="min-h-[200px] md:min-h-[320px] 
                 
                relative
                flex flex-col
            "
                >
                    <Image
                        src={item.photoHref}
                        alt=""
                        fill={true}
                        className="absolute object-cover"
                    />
                </div>

                <div className="z-10 px-5 py-5 relative min-h-100 bg-black/10 flex flex-col gap-5">
                    <h3>
                        {" "}
                        {item.startDate && item.endDate && (
                            <span className="">
                                {displayHourTime(item.startDate)}-{" "}
                                {displayHourTime(item.endDate)}
                            </span>
                        )}
                        {" | "}
                        <span className="font-bold">{item.title}</span>
                    </h3>
                    <p>{item.description}</p>

                    <h4 className="hidden">Artists:</h4>
                    <TagsContainer TagsListItems={populatedTagItems} />
                </div>
            </div>
        </PageContent>
    );
};

export default PerformanceCard;
