import React, { useRef } from "react";
import { PerformanceDataType } from "@/assets/performancesData";
import { timelineData, TimelineDataProps } from "@/assets/timelineData";
import PageContent from "@/components/PageContent";
import Image from "next/image";
import { displayHourTime } from "@/utils/dateUtils";
import TagsContainer, { TagItemData } from "@/components/TagsContainer";
import { motion, useInView } from "motion/react";

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

    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });
    const isInView1 = useInView(ref, {
        once: false,
        amount: 1,
        margin: "100px 0px 100px 0px",
    });

    return (
        <motion.div
            ref={ref}
            // initial={{ opacity: 0, y: 20 }}
            // animate={isInView ? { opacity: 1, y: 0 } : {}}
            // transition={{ duration: 0.5, ease: "circOut" }}
        >
            <PageContent>
                <div
                    className="
  
                    rounded-2xl 
                    max-w-[500px] md:max-w-[600px] lg:max-w-[1200px]
                    
                    
                    relative
                    flex flex-col

                    bg-white/20

                    
                    "
                >
                    <motion.div
                        // initial={{ flexBasis: "20%" }}
                        // animate={{ height: isInView1 ? "50%" : "30%" }}

                        transition={{ duration: 0.5, ease: "anticipate" }}
                        className="min-h-[400px] md:min-h-[240px] xl:min-h-[400px]
                 
                        relative
                        
                        "
                    >
                        <Image
                            src={item.photoHref}
                            alt=""
                            fill={true}
                            className="absolute object-cover object-[50%_18%]"
                        />
                    </motion.div>

                    <div
                        className="
                    z-10 px-5 py-5 
                    relative smin-h-[240px] 
                    bg-white/20 
                    flex flex-col gap-5
                    
                     
                    "
                    >
                        <h3 className="">
                            {" "}
                            {item.startDate && item.endDate && (
                                <span className="">
                                    {displayHourTime(item.startDate)}-{" "}
                                    {displayHourTime(item.endDate)}
                                </span>
                            )}
                            <br />
                            <span className="font-bold">{item.title}</span>
                        </h3>
                        <p>{item.description}</p>

                        <h4 className="hidden">Artists:</h4>
                        <TagsContainer TagsListItems={populatedTagItems} />
                    </div>
                </div>
            </PageContent>
        </motion.div>
    );
};

export default PerformanceCard;
