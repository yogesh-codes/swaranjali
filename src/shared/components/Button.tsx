import { cn } from "@/shared/utils/cssUtils";

import React, { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant: "primary" | "outline" | "accent";
}

const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
    let styling = "";
    if (variant === "primary") {
        styling = cn(
            "text-purewhite bg-primary-500 hover:text-purewhite hover:bg-accent-600"
        );
    } else if (variant === "accent") {
        styling = cn(
            "text-purewhite bg-accent-500 hover:text-purewhite hover:bg-accent-600"
        );
    } else if (variant === "outline") {
        styling = cn(
            "text-primary bg-purewhite border-2 border-primary-500 hover:text-pureblack hover:bg-primary-500"
        );
    }

    return (
        <button {...rest} className={cn(className, styling)}>
            {children}
        </button>
    );
};

export default Button;
