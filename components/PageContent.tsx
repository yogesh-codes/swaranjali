import React, { ComponentPropsWithoutRef } from "react";

interface PageContentProps extends ComponentPropsWithoutRef<"div"> {}

const PageContent = ({ className, children, ...rest }: PageContentProps) => {
    return (
        <div
            className={`px-5 py-5 w-full md:max-w-[600px] lg:max-w-[1000px]`}
            {...rest}
        >
            {children}
        </div>
    );
};

export default PageContent;
