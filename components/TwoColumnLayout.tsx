import React, { ReactNode } from "react";

type TwoColumnLayoutProps = {
    a: ReactNode;
    b: ReactNode;
};

const TwoColumnLayout = ({ a, b }: TwoColumnLayoutProps) => {
    return (
        <>
            <div
                className="
            w-full lg:w-[1000px] 
            flex flex-row gap-5 items-center justify-center 
            bg-amber-700 pt-5 pb-5 
            border-2 border-amber-950
            "
            >
                <div className="flex flex-col w-100 border">{a}</div>
                <div className="flex flex-col w-30">{b}</div>
            </div>
            <div className="pb-2"></div>
        </>
    );
};

export default TwoColumnLayout;
