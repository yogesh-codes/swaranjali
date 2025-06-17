// import React, { useCallback, useLayoutEffect, useState } from "react";
// import TagItem from "./TagItem";

// export type TagItemData = {
//     title: string;
//     subTitle: string;
//     extraText: string;
// };

// export type TagsContainerProps = {
//     TagsListItems: TagItemData[];
// };

// const TagsContainer = ({ TagsListItems }: TagsContainerProps) => {
//     const [cardExtraText, setCardExtraText] = useState<string | null>("");

//     const [currentlyActive, setCurrentlyActive] = useState<TagItemData | null>(
//         null
//     );

//     const handleTagClick = useCallback(
//         (item: TagItemData, isActive: boolean) => {
//             setCurrentlyActive(isActive ? item : null);
//         },
//         []
//     );

//     useLayoutEffect(() => {
//         {
//             if (!currentlyActive) setCardExtraText("");
//             else setCardExtraText(currentlyActive.extraText);
//             console.log(
//                 "currentlyActive VALUR CHANGED. NOW it is...",
//                 currentlyActive
//             );
//         }
//     }, [currentlyActive]);

//     return (
//         <div
//             onClick={() => {
//                 // setCurrentlyActive(null);
//                 // console.log("I set it to null.. something happened?");
//             }}
//         >
//             <ul
//                 className={`w-full flex flex-row justify-start items-center flex-wrap gap-2`}
//             >
//                 {TagsListItems.map((item) => (
//                     <TagItem
//                         key={item.title}
//                         title={item.title}
//                         subTitle={item.subTitle}
//                         extraText={item.extraText}
//                         onTagClick={(isActive) => {
//                             handleTagClick(item, isActive);
//                         }}
//                     />
//                 ))}
//             </ul>
//             <div className="relative">{cardExtraText}</div>
//         </div>
//     );
// };

// export default TagsContainer;

// components/TagsContainer.tsx
"use client";

import React, {
    useCallback,
    useLayoutEffect,
    useState,
    useRef,
    useEffect,
} from "react";
import TagItem, { TagItemData } from "./TagItem";

export type TagsContainerProps = {
    TagsListItems: TagItemData[];
};

const TagsContainer = ({ TagsListItems }: TagsContainerProps) => {
    const [currentlyActive, setCurrentlyActive] = useState<TagItemData | null>(
        null
    );
    const [cardExtraText, setCardExtraText] = useState("");

    const containerRef = useRef<HTMLDivElement>(null);

    // Toggle or clear active item
    const handleTagClick = useCallback(
        (item: TagItemData, shouldActivate: boolean) => {
            setCurrentlyActive(shouldActivate ? item : null);
        },
        []
    );

    // Update the extraText display when active changes
    useLayoutEffect(() => {
        setCardExtraText(currentlyActive?.extraText ?? "");
    }, [currentlyActive]);

    // Listen for clicks outside this container to clear active
    useEffect(() => {
        const onClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setCurrentlyActive(null);
            }
        };
        document.addEventListener("click", onClickOutside);
        return () => document.removeEventListener("click", onClickOutside);
    }, []);

    return (
        <div ref={containerRef}>
            <ul className="w-full flex flex-row flex-wrap gap-2">
                {TagsListItems.map((item) => (
                    <TagItem
                        key={item.title}
                        title={item.title}
                        subTitle={item.subTitle}
                        extraText={item.extraText}
                        isActive={item === currentlyActive}
                        onTagClick={(activate) =>
                            handleTagClick(item, activate)
                        }
                    />
                ))}
            </ul>
            <div className="relative mt-4">{cardExtraText}</div>
        </div>
    );
};

export default TagsContainer;
