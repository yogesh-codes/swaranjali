"use client";
import { useState } from "react";
import { useScreenHeight } from "@/app/_devOnly/_hooks/useScreenHeight";
import { useScreenWidth } from "@/app/_devOnly/_hooks/useScreenWidth";

import { DNCTape } from "../_components/DNCtape";

export default function DevBorder() {
    const width = useScreenWidth();
    const height = useScreenHeight();
    const [showLines, setShowLines] = useState<boolean>(true);

    // console.log(width);
    let message = "";
    let device_ratio = 0;
    let device_name = "";

    if (width < 360) {
        message = "(default)";
        //message = "No need to check. too small❌🔛";
        device_ratio = 610 / 320;
        device_name = "";
    } else if (width < 480) {
        message = "👶 crossed XS";
        device_name = "SE Portrait";
        device_ratio = 667 / 375;
        // } else if (width < 640) {
        //     message = "2️⃣ crossed XS"
        //     device_name = "XR Portrait";
        //     device_ratio = 896 / 414;
    } else if (width < 768) {
        message = "📱 crossed SM";

        device_ratio = 768 / 1024;
        device_name = "iPad | Laptop Halfscreen";
    } else if (width < 1024) {
        message = "💊 crossed MD";

        device_ratio = 1024 / 768;
        device_name = "iPad Landscape Mode";
    } else if (width < 1536) {
        message = "💻 crossed LG🟦";

        device_ratio = 768 / 1366;
        device_name = "Laptop Landscape";
    } else {
        message = "👑 crossed 2xl🟧";
        device_ratio = 768 / 1366;
        device_name = "BigMonitor";
    }

    const expected_height = () => {
        return Math.floor(width * device_ratio);
    };

    // const isRenderable = () => {
    //     if (width / height < 1 / device_ratio) {
    //         return true;
    //     }
    //     return false;
    // };

    return (
        <>
            {process.env.NODE_ENV === "development" && (
                <>
                    <div className={`z-[200] ${showLines ? "" : "hidden"} `}>
                        <div className="fixed text-black bg-white/80 w-full font-bold text-center text-[2vh] z-52 h-[3vh]">
                            ({width} x {height})- {message}
                            <span hidden>{device_name}</span>{" "}
                            {/* {isRenderable() ? " FULL" : " PARTIAL VIEW"} */}
                        </div>

                        {/* //Top */}
                        <DNCTape
                            style={{ width: `${width}px`, height: `2vh` }}
                            className={``}
                        ></DNCTape>
                        {/* Left */}
                        <DNCTape
                            style={{
                                height: `${expected_height()}px`,
                                width: "2vw",
                                left: 0,
                                top: 0,
                            }}
                            className={``}
                        />

                        {/* Right */}
                        <DNCTape
                            style={{
                                height: `${expected_height()}px`,
                                width: "2vw",
                                right: "0vw",
                                top: 0,
                            }}
                            className={``}
                        />

                        {/* Bottom */}
                        <DNCTape
                            style={{
                                top: `${expected_height() - 16}px`,

                                height: `2vh`,
                                width: `${width}px`,
                            }}
                            className={``}
                        />
                    </div>

                    {/* Toggler */}
                    <div
                        className={`fixed h-4 z-[102] text-center text-xs ${
                            showLines ? "bg-green-500" : "bg-white"
                        }`}
                        style={{
                            left: 0,
                            top: 0,
                            width: "2vw",
                            height: "2vh",
                        }}
                        onClick={() => {
                            setShowLines(!showLines);
                        }}
                    >
                        !
                    </div>
                </>
            )}
        </>
    );
}
