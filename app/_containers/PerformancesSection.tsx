"use client";
import { performancesData } from "@/assets/performancesData";
import PerformanceCard from "../_components/PerformanceCard";
import { timelineData, TimelineDataProps } from "@/assets/timelineData";

import MyPageSection from "@/components/primitive/MyPageSection";

export default function PerformanceSection() {
    const timelineMap: Map<string, Partial<TimelineDataProps>> = new Map(
        timelineData.map((p) => [p.performanceId, p])
    );
    return (
        <MyPageSection>
            <div className="max-w-[1280px]">
                <div className="border-t border-primary-500 rounded-3xl">
                    <h2 className="text-center"> Setlist</h2>
                    <p className="text-center mt-3">
                        View the catalogue of our various <br />{" "}
                        <b>performers</b> and <b>performances</b>!
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-stretch gap-5 transition-all ease-in-out duration-300">
                    {performancesData.map((performanceItem) => {
                        return (
                            <PerformanceCard
                                key={performanceItem.id}
                                {...performanceItem}
                                {...timelineMap.get(performanceItem.id)}
                            />
                        );
                    })}
                </div>
            </div>
        </MyPageSection>
    );
}

// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { useInView } from "react-intersection-observer";
// import {
//     ArtistType,
//     PerformanceDataType,
//     performancesData,
// } from "@/assets/performancesData";

// export default function PerformersSection() {
//     const data = performancesData;
//     const [activePerformance, setActivePerformance] =
//         useState<PerformanceDataType>(data[0]);

//     return (
//         <section>
//             {/* Dynamic Background */}
//             <div className="relative w-full h-[300px] mb-8">
//                 <Image
//                     src={activePerformance.photoHref}
//                     alt={activePerformance.title}
//                     fill
//                     className="object-cover"
//                     priority
//                 />
//             </div>

//             {/* Artist List */}
//             {data.map((perf) => {
//                 const { ref, inView } = useInView({ threshold: 0.5 });
//                 // Update when this artist scrolls into view
//                 if (inView && activePerformance.title !== perf.title) {
//                     setActivePerformance(perf);
//                 }
//                 return (
//                     <div
//                         key={perf.title}
//                         ref={ref}
//                         className="p-4 mb-4 border rounded-lg"
//                     >
//                         {/* <h3 className="text-xl">{perf.artists.name}</h3>
//                             <p className="text-sm">{perf.role}</p> */}
//                     </div>
//                 );
//             })}
//         </section>
//     );
// }
