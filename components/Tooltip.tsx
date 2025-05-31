import React from "react";

type TooltipProps = {
    message: string;
    isActive: boolean;
};

const Tooltip = ({ isActive, message }: TooltipProps) => {
    return (
        <div
            className={`absolute bg-black text-white ${
                isActive ? " active " : ""
            }`}
        >
            {message}
        </div>
    );
};

export default Tooltip;
