import React, { ComponentPropsWithoutRef } from "react";

const MyPageSection = ({ children }: ComponentPropsWithoutRef<"div">) => {
    return (
        <section className="pt-[80px] w-full flex flex-col items-center">
            {children}
        </section>
    );
};

export default MyPageSection;
