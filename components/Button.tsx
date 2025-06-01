import { cn } from "@/lib/utils";

import React, { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    variant: "primary" | "outline" | "accent";
}

const Button = ({ variant, children, className, ...rest }: ButtonProps) => {
    let styling = "";
    if (variant === "primary") {
        styling = cn("text-nlight bg-primary hover:nlight hover:bg-accent");
    } else if (variant === "accent") {
        styling = cn("");
    } else if (variant === "outline") {
        styling = cn(
            "text-primary bg-nlight border-2 border-primary hover:text-ndark hover:bg-primary"
        );
    }

    return (
        <button {...rest} className={cn(className, styling)}>
            {children}
        </button>
    );
};

export default Button;
