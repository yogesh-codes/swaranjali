import React, { ComponentPropsWithoutRef } from "react";

interface PageContentProps extends ComponentPropsWithoutRef<"div"> {}

const PageContent = ({ className, children, ...rest }: PageContentProps) => {
    return (
        <div
            className={`
                relative 
                
                px-5 py-5 
                max-w-full md:max-w-[600px] lg:max-w-[800px] 
                flex flex-col izztemscenter content-center justify-start items-stretch`}
            {...rest}
        >
            {children}
        </div>
    );
};

export default PageContent;
