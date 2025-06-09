"use client";
import React, {
    ComponentPropsWithoutRef,
    ComponentPropsWithRef,
    useRef,
    useState,
} from "react";

interface UserInputProps extends ComponentPropsWithoutRef<"div"> {
    labelText: string;
    inputType: "email" | "password";
}

const UserInput = ({ labelText, inputType }: UserInputProps) => {
    const selfRef = useRef(null);
    const [isActive, setIsActive] = useState<boolean>(false);

    return (
        <div
            ref={selfRef}
            className={`
                    border-2 rounded-xl p-1
                    ${isActive ? "border-primary" : "border-puredark"}
                `}
        >
            <label htmlFor="" className="">
                {labelText}
            </label>
            <input
                type={inputType}
                onFocus={() => {
                    setIsActive(true);
                }}
                onBlur={() => setIsActive(false)}
            />
        </div>
    );
};

export default UserInput;
