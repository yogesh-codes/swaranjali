import React, { useLayoutEffect, useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
// import { MdPersonPin } from "react-icons/md";

export type TagItemProps = {
    title: string;
    subTitle: string;
    extraText: string;
    onTagClick: (isActive: boolean) => void;
};

const TagItem = ({ title, subTitle, extraText, onTagClick }: TagItemProps) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const handleOnBlur = () => {
        setIsActive(false);
    };

    const handleOnClick = (e: React.MouseEvent) => {
        // e.stopPropagation();
        setIsActive(!isActive);
    };

    useLayoutEffect(() => {
        onTagClick(isActive);
    }, [isActive]);
    return (
        <li>
            <button
                className={`flex flex-row justify-start items-center gap-2 rounded-md  ${
                    isActive ? "bg-amber-300" : "bg-white"
                }`}
                onClick={(e) => handleOnClick(e)}
                onBlur={() => handleOnBlur()}
            >
                <BsPersonCircle className="inline-flex" />
                <span>{title}</span>
                <span className="text-neutral-600">({subTitle})</span>{" "}
            </button>
        </li>
    );
};

export default TagItem;
