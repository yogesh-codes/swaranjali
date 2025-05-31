import { cn } from "@/lib/utils";
import React, { ComponentPropsWithoutRef } from "react";

type PageContentProps = ComponentPropsWithoutRef<"div">;

const PageContent = ({ className, children, ...rest }: PageContentProps) => {
    return (
        <div
            className={cn(
                `
                relative 
                px-5 py-5 
                max-w-full md:max-w-[600px] lg:max-w-[800px] 
                flex flex-col izztemscenter content-center justify-start items-stretch`,
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};

export default PageContent;
