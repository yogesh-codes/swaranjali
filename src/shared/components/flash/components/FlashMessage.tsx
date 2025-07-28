import React, { useEffect, useState } from "react";
import { IoIosWarning } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { FlashType } from "../utils/flashUtils";
import { clearFlash } from "@/shared/components/flash/actions/clearFlash";

export const FlashComponent = ({ flash }: { flash: FlashType }) => {
    const [flashContent, setflashContent] = useState<FlashType>(flash);

    useEffect(() => {
        const a = async () => {
            if (flashContent) {
                console.log("Clearning cookie now.");
                await clearFlash("/login");
            }
        };

        void a();
    }, [flashContent]);
    return (
        // flash.msgType
        true && (
            <p
                className={`
                    px-4 py-2 rounded-md text-center
                    ${
                        flashContent.msgType === "success"
                            ? "bg-green-100 text-green-800"
                            : flashContent.msgType === "error"
                            ? "bg-red-100 text-red-800"
                            : flashContent.msgType === "info"
                            ? "bg-blue-100 text-blue-800"
                            : flashContent.msgType === "warning"
                            ? "bg-orange-100 text-orange-800"
                            : ""
                    }
                `}
            >
                <span className="inline-block align-middle">
                    {flashContent.msgType == "success" && <FaCheckCircle />}
                    {flashContent.msgType == "error" && <RxCross2 />}
                    {flashContent.msgType == "warning" && <IoIosWarning />}
                    {flashContent.msgType == "info" && <FaInfoCircle />}
                </span>{" "}
                <span>{flashContent.msg}</span>
            </p>
        )
    );
};
