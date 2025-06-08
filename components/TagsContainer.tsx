import React, { useCallback, useLayoutEffect, useState } from "react";
import TagItem from "./TagItem";

export type TagItemData = {
    title: string;
    subTitle: string;
    extraText: string;
};

export type TagsContainerProps = {
    TagsListItems: TagItemData[];
};

const TagsContainer = ({ TagsListItems }: TagsContainerProps) => {
    const [cardExtraText, setCardExtraText] = useState<string | null>("");

    const [currentlyActive, setCurrentlyActive] = useState<TagItemData | null>(
        null
    );

    useLayoutEffect(() => {
        {
            if (!currentlyActive) setCardExtraText("");
            else setCardExtraText(currentlyActive.extraText);
            console.log(
                "currentlyActive VALUR CHANGED. NOW it is...",
                currentlyActive
            );
        }
    }, [currentlyActive]);

    return (
        <div
            onClick={() => {
                // setCurrentlyActive(null);
                // console.log("I set it to null.. something happened?");
            }}
        >
            <ul
                className={`w-full flex flex-row justify-start items-center flex-wrap gap-2`}
            >
                {TagsListItems.map((item) => (
                    <TagItem
                        key={item.title}
                        title={item.title}
                        subTitle={item.subTitle}
                        extraText={item.extraText}
                        onTagClick={useCallback((isActive) => {
                            if (isActive) setCurrentlyActive(item);
                            else setCurrentlyActive(null);
                        }, [])}
                    />
                ))}
            </ul>
            <div className="relative">{cardExtraText}</div>
        </div>
    );
};

export default TagsContainer;
