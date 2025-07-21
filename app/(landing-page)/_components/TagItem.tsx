// import React, { useLayoutEffect, useState } from "react";
// import { BsPersonCircle } from "react-icons/bs";
// import Button from "../../components/primitive/Button";
// // import { MdPersonPin } from "react-icons/md";

// export type TagItemProps = {
//     title: string;
//     subTitle: string;
//     extraText: string;
//     onTagClick: (isActive: boolean) => void;
// };

// const TagItem = (
//     { title, subTitle, extraText, onTagClick }: TagItemProps // eslint-disable-line @typescript-eslint/no-unused-vars
// ) => {
//     const [isActive, setIsActive] = useState<boolean>(false);

//     const handleOnBlur = () => {
//         setIsActive(false);
//     };

//     const handleOnClick = () => {
//         // e.stopPropagation();
//         setIsActive(!isActive);
//     };

//     useLayoutEffect(() => {
//         onTagClick(isActive);
//         console.log("layout change- Activated new card ", title);
//     }, [isActive, onTagClick]);
//     return (
//         <li>
//             <Button
//                 variant="primary"
//                 className={`flex flex-row justify-start items-center gap-2 rounded-md p-1 ${
//                     isActive ? "bg-accent" : "bg-nlight"
//                 }`}
//                 onClick={() => handleOnClick()}
//                 onBlur={() => handleOnBlur()}
//             >
//                 <BsPersonCircle className="inline-flex" />
//                 <span>{title}</span>
//                 <span>({subTitle})</span>{" "}
//             </Button>
//         </li>
//     );
// };

// export default TagItem;

// components/TagItem.tsx
import React from "react";
import { BsPersonCircle } from "react-icons/bs";
import Button from "../../../components/primitive/Button";

export type TagItemData = {
    title: string;
    subTitle: string;
    extraText: string;
};

export type TagItemProps = {
    title: string;
    subTitle: string;
    extraText: string;
    isActive: boolean; // ← controlled prop
    onTagClick: (activate: boolean) => void;
};

const TagItem = ({ title, subTitle, isActive, onTagClick }: TagItemProps) => {
    return (
        <li>
            <Button
                variant="primary"
                className={`flex items-center gap-2 rounded-md p-1 ${
                    isActive ? "bg-accent" : "bg-nlight"
                }`}
                onClick={() => onTagClick(!isActive)} // toggle on click
                onBlur={() => onTagClick(false)} // deactivate on blur
            >
                <BsPersonCircle className="inline-flex" />
                <span>{title}</span>
                <span>({subTitle})</span>
            </Button>
        </li>
    );
};

export default TagItem;
