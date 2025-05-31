import { cn } from "@/lib/utils";
import React from "react";

type OrdinaryHeadingProps = {
    headingText: string;
    headingClassName?: string;
};

const OrdinaryHeading = ({
    headingText,
    headingClassName,
}: OrdinaryHeadingProps) => {
    return (
        <h1 className={cn("text-center ", headingClassName)}>
            <span className={`${headingText} text-6xl`}>{headingText} </span>
            2025
        </h1>
    );
};

export default OrdinaryHeading;
