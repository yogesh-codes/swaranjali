import React from "react";
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
// import clsx from "clsx";

export const allowedMsgTypes = ["success", "error", "warning", "info"] as const;
export type AllowedMsgType = (typeof allowedMsgTypes)[number];

export type FlashMessageProps = {
    msg: string;
    msgType: AllowedMsgType;
};

export const FlashMessage = (flash: FlashMessageProps) => {
    return (
        // flash.msgType
        true && (
            <p
                className={`
                    px-4 py-2 rounded-md text-center
                    ${
                        flash.msgType === "success"
                            ? "bg-green-100 text-green-800"
                            : flash.msgType === "error"
                            ? "bg-red-100 text-red-800"
                            : flash.msgType === "info"
                            ? "bg-blue-100 text-blue-800"
                            : flash.msgType === "warning"
                            ? "bg-orange-100 text-orange-800"
                            : ""
                    }
                `}
            >
                <span className="inline-block align-middle">
                    {flash.msgType == "success" && <FaCheckCircle />}
                    {flash.msgType == "error" && <RxCross2 />}
                    {flash.msgType == "warning" && <IoIosWarning />}
                    {flash.msgType == "info" && <FaInfoCircle />}
                </span>{" "}
                <span>{flash.msg}</span>
            </p>
        )
    );
};
