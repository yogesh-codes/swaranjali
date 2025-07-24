import { cn } from "@/shared/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

type MyPageContentProps = ComponentPropsWithoutRef<"div">;

const MyPageContent = ({
    className,
    children,
    ...rest
}: MyPageContentProps) => {
    return (
        <div
            className={cn(
                `
                relative 
                px-5 py-5 
                max-w-full md:max-w-[600px] lg:max-w-[800px] 
                flex flex-col content-center justify-start items-stretch`,
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default MyPageContent;
