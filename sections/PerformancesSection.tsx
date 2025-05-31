"use client";
import {
    PerformanceDataType,
    performancesData,
} from "@/assets/performancesData";
import PerformanceCard from "./PerformanceCard";
import { timelineData, TimelineDataProps } from "@/assets/timelineData";

export default function PerformanceSection() {
    const timelineMap: Map<string, Partial<TimelineDataProps>> = new Map(
        timelineData.map((p) => [p.performanceId, p])
    );
    return (
        <section>
            <p>This is our catalogue. Best.</p>
            {performancesData.map((performanceItem) => {
                return (
                    <>
                        <PerformanceCard
                            {...performanceItem}
                            {...timelineMap.get(performanceItem.id)}
                        />
                    </>
                );
            })}
        </section>
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
